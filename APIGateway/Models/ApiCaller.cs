using Newtonsoft.Json.Linq;
using System;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;

namespace APIGateway.Models
{
    public class ApiCaller
    {
        private HttpClient ApiClient = null;
        public ApiCaller()
        {
            HttpClientHandler clientHandler = new HttpClientHandler
            {
                AllowAutoRedirect = false
            };
            clientHandler.ServerCertificateCustomValidationCallback += (o, certificate, chain, errors) => true;
            clientHandler.UseDefaultCredentials = true;

            //initialize API client for HDB API server
            ApiClient = new HttpClient(clientHandler);
            ApiClient.DefaultRequestHeaders.Accept.Clear();
            ApiClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
        }
        public void SetBearerToken(string accessToken)
        {
            ApiClient.SetBearerToken(accessToken);
        }
        public async Task<object> FetchDataFromDB(string Url)
        {
            using (HttpResponseMessage response = await ApiClient.GetAsync(Url))
            {
                if (response.IsSuccessStatusCode)
                {
                    string result = await response.Content.ReadAsStringAsync();
                    if (result[0] == '[') return JArray.Parse(result);
                    return JObject.Parse(result);
                }
                else return null;
            }
        }

        public async Task<bool> UpdateDataToDB(string Url, string data)
        {
            StringContent content = new StringContent(data, Encoding.UTF8, "application/json");
            using (var response = await ApiClient.PutAsync(Url, content))
            {
                if (response.IsSuccessStatusCode) return response.IsSuccessStatusCode;
                else throw new Exception(response.ReasonPhrase);
            }
        }

        internal Task<HttpResponseMessage> GetAsync(string Url)
        {
            return ApiClient.GetAsync(Url);
        }
    }
}
