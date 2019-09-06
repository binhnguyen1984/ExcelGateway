using Newtonsoft.Json.Linq;
using System.Threading.Tasks;

namespace APIGateway.Models
{
    public class HDBHandler : IDbHandler
    {
        public static object ExtractResponseBody(object jsonData, string compName)
        {
            JObject responseBody = (jsonData as JObject)["message"] as JObject;
            return responseBody[compName];
        }
        object IDbHandler.ExtractResponseBody(object jsonData, string compName) => ExtractResponseBody(jsonData, compName);
        public static async Task<ResponseMessage> UpdateComponentToDB(string updateUrl, string updateData) =>
            await GlobalResources.ApiHandler.ExecutePutAsync(updateUrl, updateData);

        async Task<ResponseMessage> IDbHandler.UpdateComponentToDB(string updateUrl, string updateData) =>
            await UpdateComponentToDB(updateUrl, updateData);
        public static async Task<ResponseMessage> GetAttributeValuesByIdOrName(string apiPath, string IdOrName, string[] attrPath, string filter)
        {
            string apiUrl = Settings.HDBApiUrl + attrPath[0] + "/";
            if (apiPath != null) apiUrl += apiPath;
            apiUrl += $"({IdOrName}).json?";
            if (filter != null && filter.Length > 0) apiUrl += "?" + filter;
            ResponseMessage response = await GlobalResources.ApiHandler.ExecuteGetAsync(apiUrl);
            if (!response.IsSuccessful) return response;
            return JsonHelper.GetStringAttributeFromMultipleComponents(response.Data, attrPath);
        }
        async Task<ResponseMessage> IDbHandler.GetAttributeValuesByIdOrName(string apiPath, string IdOrName, string[] attrPath, string filter) =>
            await GetAttributeValuesByIdOrName(apiPath, IdOrName, attrPath, filter);
        public static async Task<ResponseMessage> GetAttributeValuesOfAllComponents(string[] attrPath)
        {
            string apiUrl = GetAllComponenstUrl(attrPath[0]);
            ResponseMessage response = await GlobalResources.ApiHandler.ExecuteGetAsync(apiUrl);
            if (!response.IsSuccessful) return response;
            object data = ExtractResponseBody(response.Data, attrPath[0]);
            return JsonHelper.GetStringAttributeFromMultipleComponents(data, attrPath);
        }
        async Task<ResponseMessage> IDbHandler.GetAttributeValuesOfAllComponents(string[] attrPath) =>
            await GetAttributeValuesOfAllComponents(attrPath);
        public static string GetAllComponenstUrl(string compName) => Settings.HDBApiUrl + compName;
        string IDbHandler.GetAllComponenstUrl(string compName) => GetAllComponenstUrl(compName);

        public static async Task<ResponseMessage> FetchDataFromDB(string url) => await GlobalResources.ApiHandler.ExecuteGetAsync(url);
        async Task<ResponseMessage> IDbHandler.FetchDataFromDB(string url) => await FetchDataFromDB(url);
    }
}
