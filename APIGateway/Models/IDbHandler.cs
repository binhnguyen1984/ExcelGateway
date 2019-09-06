using System.Threading.Tasks;

namespace APIGateway.Models
{
    public interface IDbHandler
    {
        object ExtractResponseBody(object jsonData, string compName = null);
        Task<ResponseMessage> FetchDataFromDB(string url);
        Task<ResponseMessage> UpdateComponentToDB(string updateUrl, string updateData);
        Task<ResponseMessage> GetAttributeValuesOfAllComponents(string[] attrPath);
        string GetAllComponenstUrl(string compName);
        Task<ResponseMessage> GetAttributeValuesByIdOrName(string apiPath, string IdOrName, string[] attrPath, string filter);
    }
}
