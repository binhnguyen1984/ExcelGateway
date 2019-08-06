using IdentityModel.OidcClient;
using IdentityModel.OidcClient.Results;
using Newtonsoft.Json.Linq;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace APIGateway.Models
{
    public class CDPHandler : DatabaseHandler
    {
        private static OidcClientInfo CurrentOidcClientInfo = null;
        public CDPHandler()
        {
            CurrentOidcClientInfo = new OidcClientInfo(new OidcClient(InitOpenIdConnectOps()));
        }

        private OidcClientOptions InitOpenIdConnectOps()
        {
            var browser = new SystemBrowser(Settings.CDPRedirecPort);
            return new OidcClientOptions
            {
                Authority = Settings.CDPAuthUrl,
                ClientId = Settings.CDPClientId,
                RedirectUri = string.Format($"http://localhost:{Settings.CDPRedirecPort}"),
                Scope = Settings.CDPScope,
                FilterClaims = false,
                Browser = browser,
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
        private void Login()
        {
            // create a redirect URI using an available port on the loopback address.
            // requires the OP to allow random ports on 127.0.0.1 - otherwise set a static port
            var loginResult = AsyncHelper.RunSync<LoginResult>(async () => await CurrentOidcClientInfo.OidcClient.LoginAsync(new LoginRequest()));
            CurrentOidcClientInfo.AccessToken = loginResult.AccessToken;
            CurrentOidcClientInfo.RefreshToken = loginResult.RefreshToken;
            CurrentOidcClientInfo.ValidDate = loginResult.AccessTokenExpiration;
        }


        private void RequestAccessTokenForOpenIDConnect()
        {
            if (CurrentOidcClientInfo.AccessToken == null)
            {
                Login();
                ApiClient.SetBearerToken(CurrentOidcClientInfo.AccessToken);
            }
            else if (DateTime.Now >= CurrentOidcClientInfo.ValidDate)
            {
                RefreshAccessToken();
                ApiClient.SetBearerToken(CurrentOidcClientInfo.AccessToken);
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
            RequestAccessTokenForOpenIDConnect();
            return await ApiClient.UpdateDataToDB(updateUrl, loadedCompDetails.ToString());
        }
        public override async Task<object> FetchDataFromDB(string Url)
        {
            RequestAccessTokenForOpenIDConnect();
            return await ApiClient.FetchDataFromDB(Url);
        }

    }
}
