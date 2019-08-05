using Newtonsoft.Json.Linq;
using System;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using IdentityModel.OidcClient;
using APIGateway.Models;
using IdentityModel.OidcClient.Results;

namespace APIGateway.CommonHelpers
{
    public sealed class APICaller
    {
        private static HttpClient ApiClient = null;
        private static OidcClientInfo CurrentOidcClientInfo = null;
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
        public static void InitializeAPIClients()
        {
            AppContext.SetSwitch("System.Net.Http.UseSocketsHttpHandler", false); //this line is needed for impersonation to work
            InitHDBClient();
            InitCDPClient();
        }

        private static void Login()
        {
            // create a redirect URI using an available port on the loopback address.
            // requires the OP to allow random ports on 127.0.0.1 - otherwise set a static port
            var loginResult = AsyncHelper.RunSync<LoginResult>(async () => await CurrentOidcClientInfo.OidcClient.LoginAsync(new LoginRequest()));
            CurrentOidcClientInfo.AccessToken = loginResult.AccessToken;
            CurrentOidcClientInfo.RefreshToken = loginResult.RefreshToken;
            CurrentOidcClientInfo.ValidDate = loginResult.AccessTokenExpiration;
        }


        private static void RequestAccessTokenForOpenIDConnect()
        {
            if (CurrentOidcClientInfo.AccessToken == null)
            {
                Login();
                ApiClient.SetBearerToken(CurrentOidcClientInfo.AccessToken);
            }
            else if(DateTime.Now >= CurrentOidcClientInfo.ValidDate)
            {
                RefreshAccessToken();
                ApiClient.SetBearerToken(CurrentOidcClientInfo.AccessToken);
            }
        }

        private static void RefreshAccessToken()
        {
            RefreshTokenResult refreshTokenResult = AsyncHelper.RunSync<RefreshTokenResult>(async () => await CurrentOidcClientInfo.OidcClient.RefreshTokenAsync(CurrentOidcClientInfo.RefreshToken));
            CurrentOidcClientInfo.AccessToken = refreshTokenResult.AccessToken;
            CurrentOidcClientInfo.RefreshToken = refreshTokenResult.RefreshToken;
            CurrentOidcClientInfo.ValidDate = refreshTokenResult.AccessTokenExpiration;
        }

        //private static void ShowResult(LoginResult result)
        //{
        //    if (result.IsError)
        //    {
        //        Console.WriteLine("\n\nError:\n{0}", result.Error);
        //        return;
        //    }

        //    Console.WriteLine("\n\nClaims:");
        //    foreach (var claim in result.User.Claims)
        //    {
        //        Console.WriteLine("{0}: {1}", claim.Type, claim.Value);
        //    }

        //    Console.WriteLine($"\nidentity token: {result.IdentityToken}");
        //    Console.WriteLine($"access token:   {result.AccessToken}");
        //    Console.WriteLine($"refresh token:  {result?.RefreshToken ?? "none"}");
        //}

        private static void InitHDBClient()
        {
            HttpClientHandler clientHandler = new HttpClientHandler();
            clientHandler.ServerCertificateCustomValidationCallback += (o, certificate, chain, errors) => true;
            clientHandler.UseDefaultCredentials = true;

            //initialize API client for HDB API server
            ApiClient = new HttpClient(clientHandler);
            ApiClient.DefaultRequestHeaders.Accept.Clear();
            ApiClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

        }

        private static void InitCDPClient()
        {
            //initialize API client for CDP API server
            CurrentOidcClientInfo = new OidcClientInfo(new OidcClient(InitOpenIdConnectOps()));
        }
        private static OidcClientOptions InitOpenIdConnectOps()
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

        public static async Task<object> FetchDataFromHDB(string Url)
        {
            return await FetchDataFromDB(Url);
        }

        public static async Task<Boolean> UpdateDataToHDB(string Url, string data)
        {
            return await UpdateDataToDB(Url, data);
        }

        public static async Task<object> FetchDataFromCDP(string Url)
        {
            RequestAccessTokenForOpenIDConnect();
            return await FetchDataFromDB(Url);
        }

        public static async Task<Boolean> UpdateDataToCDP(string Url, string data)
        {
            RequestAccessTokenForOpenIDConnect();
            return await UpdateDataToDB(Url, data);
        }


        private static async Task<object> FetchDataFromDB(string Url)
        {
            using (HttpResponseMessage response = await ApiClient.GetAsync(Url))
            {
                if (response.IsSuccessStatusCode)
                {
                    string result = await response.Content.ReadAsStringAsync();
                    if (result[0] == '[') return JArray.Parse(result);
                    return JObject.Parse(result);
                }
                else throw new Exception(response.ReasonPhrase);
            }
        }

        private static async Task<Boolean> UpdateDataToDB(string Url, string data)
        {
            StringContent content = new StringContent(data, Encoding.UTF8, "application/json");
            using (var response = await ApiClient.PutAsync(Url, content))
            {
                if (response.IsSuccessStatusCode) return response.IsSuccessStatusCode;
                else throw new Exception(response.ReasonPhrase);
            }
        }
    }
}
