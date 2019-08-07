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

        private static string ExtractDataUrl(string content)
        {
            htmlDoc.LoadHtml(content);
            HtmlNodeCollection htmlMetaNodes = htmlDoc.DocumentNode.SelectNodes("//meta");
            HtmlNode lastMetaNode = htmlMetaNodes[htmlMetaNodes.Count - 1];
            return lastMetaNode.Attributes["data-url"].Value;
        }
        public static async Task<string> GetAccessCode(string Url)
        {
            var request = new HttpRequestMessage()
            {
                RequestUri = new Uri(Url),
                Method = HttpMethod.Get
            };

            HttpResponseMessage response = await ApiCaller.SendAsync(request);
            string content = await response.Content.ReadAsStringAsync();
            if (response.StatusCode == System.Net.HttpStatusCode.Found)
            {
                HttpResponseHeaders headers = response.Headers;
                if (headers != null && headers.Location != null)
                {
                    var redirectedUrl = headers.Location;
                    if (!redirectedUrl.IsAbsoluteUri)
                    {
                        redirectedUrl = new Uri(request.RequestUri.GetLeftPart(UriPartial.Authority) + redirectedUrl);
                    }
                    return await GetAccessCode(redirectedUrl.AbsoluteUri);
                }
            }
            else if (response.StatusCode == System.Net.HttpStatusCode.OK)
            {
                string dataUrl = ExtractDataUrl(content);
                var lastUrl = request.RequestUri.GetLeftPart(UriPartial.Authority) + dataUrl;
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
            var formData = await GetAccessCode(state.StartUrl);
            //var loginResult = AsyncHelper.RunSync<LoginResult>(async () => await CurrentOidcClientInfo.OidcClient.LoginAsync(new LoginRequest()));
            var loginResult = await CurrentOidcClientInfo.OidcClient.ProcessResponseAsync(formData, state);
            CurrentOidcClientInfo.AccessToken = loginResult.AccessToken;
            CurrentOidcClientInfo.RefreshToken = loginResult.RefreshToken;
            CurrentOidcClientInfo.ValidDate = loginResult.AccessTokenExpiration;
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

        public override string GetSearchURL(string compName, IEnumerator searchValues, List<SearchParamCell> searchCells = null)
        {
            string searchUrl =  Settings.CDPApiUrl + compName;
            if (searchValues.MoveNext())
                searchUrl += "/" + searchValues.Current;
            return searchUrl;
        }
        public override JObject GetUpdateComponent(object respObject, string compName = null)
        {
            if (respObject == null) return null;
            JObject componentDetails = respObject is JArray ? (respObject as JArray).First as JObject : respObject as JObject;
            return componentDetails;
        }
        public override string GetPutUrl(string compName, string compID = null)
        {
            return Settings.CDPApiUrl + compName;
        }
        public override async Task<bool> UpdateComponentToDB(string compName, JObject loadedCompDetails, string compIdValue = null)
        {
            string updateUrl = GetPutUrl(compName);
            await RequestAccessTokenForOpenIDConnect();
            return await ApiCaller.UpdateDataToDB(updateUrl, loadedCompDetails.ToString());
        }
        public override async Task<object> FetchDataFromDB(string Url)
        {
            await RequestAccessTokenForOpenIDConnect();
            return await ApiCaller.FetchDataFromDB(Url);
        }
    }
}
