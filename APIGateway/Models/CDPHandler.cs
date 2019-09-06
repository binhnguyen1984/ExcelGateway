using HtmlAgilityPack;
using IdentityModel.OidcClient;
using IdentityModel.OidcClient.Results;
using System;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;

namespace APIGateway.Models
{
    public class CDPHandler : IDbHandler
    {
        private static readonly OidcClientInfo CurrentOidcClientInfo = new OidcClientInfo(new OidcClient(InitOpenIdConnectOps()));
        private static readonly HtmlDocument htmlDoc = new HtmlDocument();

        public CDPHandler()
        {
        }

        public static Task<ResponseMessage> GetVersionsByProjectAndVariant(string projectName, string variantName)
        {
            throw new NotImplementedException();
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
                return loc.IsAbsoluteUri ? headers.Location.AbsoluteUri : requestUri.GetLeftPart(UriPartial.Authority) + loc.ToString();
            return response.RequestMessage.RequestUri.AbsoluteUri;
        }
        public static async Task<string> GetAuthTokens(string Url)
        {
            using (HttpResponseMessage response = await GlobalResources.ApiHandler.GetAsync(Url))
            {
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
                    using (HttpResponseMessage lastResponse = await GlobalResources.ApiHandler.GetAsync(lastUrl))
                        return lastResponse.Headers.Location.Query;
                }
            }
            return null;
        }


        private static OidcClientOptions InitOpenIdConnectOps()
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
        private static async Task Login()
        {
            // create a redirect URI using an available port on the loopback address.
            var state = await CurrentOidcClientInfo.OidcClient.PrepareLoginAsync();
            var formData = await GetAuthTokens(state.StartUrl);
            if (formData != null)
            {
                var loginResult = await CurrentOidcClientInfo.OidcClient.ProcessResponseAsync(formData, state);
                CurrentOidcClientInfo.AccessToken = loginResult.AccessToken;
                CurrentOidcClientInfo.RefreshToken = loginResult.RefreshToken;
                CurrentOidcClientInfo.ValidDate = loginResult.AccessTokenExpiration;
            }
        }


        private static async Task RequestAccessTokenForOpenIDConnect()
        {
            if (CurrentOidcClientInfo.AccessToken == null)
            {
                await Login();
                GlobalResources.ApiHandler.SetBearerToken(CurrentOidcClientInfo.AccessToken);
            }
            else if (DateTime.Now >= CurrentOidcClientInfo.ValidDate)
            {
                RefreshAccessToken();
                GlobalResources.ApiHandler.SetBearerToken(CurrentOidcClientInfo.AccessToken);
            }
        }

        private static void RefreshAccessToken()
        {
            RefreshTokenResult refreshTokenResult = AsyncFuncHelper.RunSync<RefreshTokenResult>(async () => await CurrentOidcClientInfo.OidcClient.RefreshTokenAsync(CurrentOidcClientInfo.RefreshToken));
            CurrentOidcClientInfo.AccessToken = refreshTokenResult.AccessToken;
            CurrentOidcClientInfo.RefreshToken = refreshTokenResult.RefreshToken;
            CurrentOidcClientInfo.ValidDate = refreshTokenResult.AccessTokenExpiration;
        }
        public static async Task<ResponseMessage> FetchDataFromDB(string url)
        {
            await RequestAccessTokenForOpenIDConnect();
            return await GlobalResources.ApiHandler.ExecuteGetAsync(url);
        }

        async Task<ResponseMessage> IDbHandler.FetchDataFromDB(string url) => await CDPHandler.FetchDataFromDB(url);
        public static async Task<ResponseMessage> UpdateComponentToDB(string updateUrl, string updateData)
        {
            await RequestAccessTokenForOpenIDConnect();
            return await GlobalResources.ApiHandler.ExecutePutAsync(updateUrl, updateData);
        }
        async Task<ResponseMessage> IDbHandler.UpdateComponentToDB(string updateUrl, string updateData) => await CDPHandler.UpdateComponentToDB(updateUrl, updateData);

        public static object ExtractResponseBody(object jsonData) => jsonData;
        object IDbHandler.ExtractResponseBody(object jsonData, string compName) => CDPHandler.ExtractResponseBody(jsonData); 
        public static async Task<ResponseMessage> GetAttributeValuesOfAllComponents(string[] attrPath)
        {
            string apiUrl = GetAllComponenstUrl(attrPath[0]);
            await RequestAccessTokenForOpenIDConnect();
            ResponseMessage response = await GlobalResources.ApiHandler.ExecuteGetAsync(apiUrl);
            if (!response.IsSuccessful) return response;
            object data = ExtractResponseBody(response.Data);
            return JsonHelper.GetStringAttributeFromMultipleComponents(data, attrPath);
        }
        async Task<ResponseMessage> IDbHandler.GetAttributeValuesOfAllComponents(string[] attrPath) => 
            await CDPHandler.GetAttributeValuesOfAllComponents(attrPath);
        public static string GetAllComponenstUrl(string compName) => Settings.CDPApiUrl + compName;
        string IDbHandler.GetAllComponenstUrl(string compName) => CDPHandler.GetAllComponenstUrl(compName);
        public static async Task<ResponseMessage> GetAttributeValuesByIdOrName(string apiPath, string IdOrName, string[] attrPath, string filter)
        {
            string apiUrl = Settings.CDPApiUrl + attrPath[0] + "/";
            if (apiPath != null) apiUrl += apiPath;
            apiUrl += $"{IdOrName}";
            if (filter != null && filter.Length > 0) apiUrl += "?" + filter;
            await RequestAccessTokenForOpenIDConnect();
            ResponseMessage response = await GlobalResources.ApiHandler.ExecuteGetAsync(apiUrl);
            if (!response.IsSuccessful) return response;
            return JsonHelper.GetStringAttributeFromMultipleComponents(response.Data, attrPath);
        }
        async Task<ResponseMessage> IDbHandler.GetAttributeValuesByIdOrName(string apiPath, string IdOrName, string[] attrPath, string filter) => 
            await CDPHandler.GetAttributeValuesByIdOrName(apiPath, IdOrName, attrPath, filter);
        public static async Task<ResponseMessage> GetVariantsByProjectName(string projectName) => await Task.FromResult<ResponseMessage>(null);

    }
}
