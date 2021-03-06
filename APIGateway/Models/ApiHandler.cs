﻿using Newtonsoft.Json.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;

namespace APIGateway.Models
{
    /// <summary>
    /// This class makes direct API calls to HDB and CDP
    /// </summary>
    public class ApiHandler
    {
        private readonly HttpClient ApiClient = null;
        public ApiHandler()
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
        public async Task<ResponseMessage> ExecuteGetAsync(string Url)
        {
            using (HttpResponseMessage response = await ApiClient.GetAsync(Url))
            {
                if (response.IsSuccessStatusCode)
                {
                    string result = await response.Content.ReadAsStringAsync();
                    if (result[0] == '[') return new ResponseMessage(true, JArray.Parse(result));
                    return new ResponseMessage(true, JObject.Parse(result));
                }
                else return new ResponseMessage(false, "Error code: " + response.StatusCode);
            }
        }

        public async Task<ResponseMessage> ExecutePutAsync(string Url, string data)
        {
            StringContent content = new StringContent(data, Encoding.UTF8, "application/json");
            using (var response = await ApiClient.PutAsync(Url, content))
            {
                if (response.IsSuccessStatusCode) return new ResponseMessage(true, null);
                else return new ResponseMessage(false, "Error code: " + response.StatusCode);
            }
        }
        internal Task<HttpResponseMessage> GetAsync(string Url)
        {
            return ApiClient.GetAsync(Url);
        }
    }
}
