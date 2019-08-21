using HtmlAgilityPack;
using IdentityModel.OidcClient;
using IdentityModel.OidcClient.Results;
using Newtonsoft.Json.Linq;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;

namespace APIGateway.Models
{
    public class CDPHandler : DatabaseHandler
    {
        private static OidcClientInfo CurrentOidcClientInfo = null;
        private static HtmlDocument htmlDoc = null;
        public CDPHandler()
        {
            CurrentOidcClientInfo = new OidcClientInfo(new OidcClient(InitOpenIdConnectOps()));
            htmlDoc = new HtmlDocument();
        }

        protected override string GetAllComponentUrl(string compName)
        {
            return Settings.CDPApiUrl + compName;
        }

        private static string ExtractDataUrl(string content)
        {
            htmlDoc.LoadHtml(content);
            HtmlNodeCollection htmlMetaNodes = htmlDoc.DocumentNode.SelectNodes("//meta");
            HtmlNode lastMetaNode = htmlMetaNodes[htmlMetaNodes.Count - 1];
            return lastMetaNode.Attributes["data-url"].Value;
        }

        private static string GetAbsoluteRedirectUri(HttpResponseMessage response)
        {
            HttpResponseHeaders headers = response.Headers;
            var requestUri = response.RequestMessage.RequestUri;
            var loc = headers.Location;
            if (loc != null)
                return loc.IsAbsoluteUri?headers.Location.AbsoluteUri: requestUri.GetLeftPart(UriPartial.Authority)+loc.ToString();
            return response.RequestMessage.RequestUri.AbsoluteUri;
        }

        public override async Task<ResponseMessage> GetComponentAttr(string[] attrPath)
        {
            await RequestAccessTokenForOpenIDConnect();
            return await base.GetComponentAttr(attrPath);              
        }
        public static async Task<string> GetAuthTokens(string Url)
        {
            HttpResponseMessage response = await ApiCaller.GetAsync(Url);
            string content = await response.Content.ReadAsStringAsync();
            if (response.StatusCode == System.Net.HttpStatusCode.Found)
            {
                string redirectUrl = GetAbsoluteRedirectUri(response);
                return await GetAuthTokens(redirectUrl);
            }
            else if (response.StatusCode == System.Net.HttpStatusCode.OK)
            {
                string dataUrl = ExtractDataUrl(content);
                var lastUrl = response.RequestMessage.RequestUri.GetLeftPart(UriPartial.Authority) + dataUrl;
                lastUrl = System.Web.HttpUtility.HtmlDecode(lastUrl);
                response = await ApiCaller.GetAsync(lastUrl);
                return response.Headers.Location.Query;
            }
            return null;
        }


        private OidcClientOptions InitOpenIdConnectOps()
        {
            // we do not need browser interaction to send authentication request
            //var browser = new SystemBrowser(Settings.CDPRedirecPort);
            return new OidcClientOptions
            {
                Authority = Settings.CDPAuthUrl,
                ClientId = Settings.CDPClientId,
                RedirectUri = string.Format($"http://localhost:{Settings.CDPRedirecPort}"),
                Scope = Settings.CDPScope,
                FilterClaims = false,
                //Browser = browser,
                Flow = OidcClientOptions.AuthenticationFlow.AuthorizationCode,
                ResponseMode = OidcClientOptions.AuthorizeResponseMode.Redirect
            };
        }

        public class OidcClientInfo
        {
            public string AccessToken { get; set; }
            public string RefreshToken { get; set; }
            public DateTime ValidDate { get; set; }
            public OidcClient OidcClient { get; set; }
            public OidcClientInfo(OidcClient oidcClient)
            {
                AccessToken = RefreshToken = null;
                OidcClient = oidcClient;
            }
        }
        private async Task Login()
        {
            // create a redirect URI using an available port on the loopback address.
            var state = await CurrentOidcClientInfo.OidcClient.PrepareLoginAsync();
            var formData = await GetAuthTokens(state.StartUrl);
            if(formData!=null)
            {
                var loginResult = await CurrentOidcClientInfo.OidcClient.ProcessResponseAsync(formData, state);
                CurrentOidcClientInfo.AccessToken = loginResult.AccessToken;
                CurrentOidcClientInfo.RefreshToken = loginResult.RefreshToken;
                CurrentOidcClientInfo.ValidDate = loginResult.AccessTokenExpiration;
            }
        }


        private async Task RequestAccessTokenForOpenIDConnect()
        {
            if (CurrentOidcClientInfo.AccessToken == null)
            {
                await Login();
                ApiCaller.SetBearerToken(CurrentOidcClientInfo.AccessToken);
            }
            else if (DateTime.Now >= CurrentOidcClientInfo.ValidDate)
            {
                RefreshAccessToken();
                ApiCaller.SetBearerToken(CurrentOidcClientInfo.AccessToken);
            }
        }

        private void RefreshAccessToken()
        {
            RefreshTokenResult refreshTokenResult = AsyncHelper.RunSync<RefreshTokenResult>(async () => await CurrentOidcClientInfo.OidcClient.RefreshTokenAsync(CurrentOidcClientInfo.RefreshToken));
            CurrentOidcClientInfo.AccessToken = refreshTokenResult.AccessToken;
            CurrentOidcClientInfo.RefreshToken = refreshTokenResult.RefreshToken;
            CurrentOidcClientInfo.ValidDate = refreshTokenResult.AccessTokenExpiration;
        }

        /// <summary>
        /// Currently, CDP only supports searching conditioned on a single property
        /// </summary>
        /// <param name="compName"></param>
        /// <param name="searchValues"></param>
        /// <returns></returns>
        protected override string GetSearchURL(string compName, List<string> searchProps, List<string> searchValues)
        {
            string searchUrl =  Settings.CDPApiUrl + compName;
            if(searchValues.Count>0) searchUrl += "/" + searchValues[0];
            return searchUrl;
        }

        protected override object ExtractResponseBody(object respObject, string compName = null)
        {
            return respObject;
        }

        protected override string GetPutUrl(string compName, string compID = null)
        {
            return Settings.CDPApiUrl + compName;
        }
        public override async Task<ResponseMessage> UpdateComponentToDB(string compName, JObject loadedCompDetails, string compIdValue = null)
        {
            string updateUrl = GetPutUrl(compName);
            await RequestAccessTokenForOpenIDConnect();
            return await ApiCaller.UpdateDataToDB(updateUrl, loadedCompDetails.ToString());
        }
    }
}
