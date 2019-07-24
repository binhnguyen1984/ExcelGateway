using Newtonsoft.Json.Linq;
using System;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;

namespace APIGateway.Models
{
    public sealed class APICaller
    {
        public static HttpClient APIClient;
        public static void InitializeAPIClient()
        {
            AppContext.SetSwitch("System.Net.Http.UseSocketsHttpHandler", false); //this line is needed for impersonation to work
            HttpClientHandler clientHandler = new HttpClientHandler();
            clientHandler.ServerCertificateCustomValidationCallback += (o, certificate, chain, errors) => true;
            clientHandler.UseDefaultCredentials = true;
            APIClient = new HttpClient(clientHandler);
            APIClient.DefaultRequestHeaders.Accept.Clear();
            APIClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
        }

        public static async Task<JObject> FetchData(string Url)
        {
            using (HttpResponseMessage response = await APIClient.GetAsync(Url))
            {
                if (response.IsSuccessStatusCode)
                    return JObject.Parse(await response.Content.ReadAsStringAsync());
                else throw new Exception(response.ReasonPhrase);
            }
        }

        public static async Task<JObject> UpdateData(string Url, string data)
        {
            StringContent content = new StringContent(data, Encoding.UTF8, "application/json");
            using (var response = await APIClient.PutAsync(Url, content))
            {
                if (response.IsSuccessStatusCode) return JObject.Parse(await response.Content.ReadAsStringAsync());
                else throw new Exception(response.ReasonPhrase);
            }
        }
    }
}
