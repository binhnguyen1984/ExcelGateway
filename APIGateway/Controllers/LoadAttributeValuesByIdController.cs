using APIGateway.Models;
using Microsoft.AspNetCore.Mvc;
using System.Security.Principal;
using System.Threading.Tasks;

namespace APIGateway.Controllers
{
    [Route("ExcelAddin/api/[controller]")]
    [ApiController]
    public class LoadAttributeValuesByIdController : ControllerBase
    {
        [HttpGet]
        public async Task<ResponseMessage> GetAsync(string apiPath, string id, string attrPath)
        {
            if (id == null || attrPath == null)
                return new ResponseMessage(false, "Invalid query");
            var callerIdentity = User.Identity as WindowsIdentity;
            return await WindowsIdentity.RunImpersonated(callerIdentity.AccessToken, 
                async () => await LoadAttributeValuesById(apiPath, id, attrPath));
        }
        private async Task<ResponseMessage> LoadAttributeValuesById(string apiPath, string id, string attrPath)
        {
            ResponseMessage response = Common.StripOffDBNameFromAttrPath(attrPath);
            if (!response.IsSuccessful) return response;
            object[] result = response.Data as object[];
            string dBName = result[0] as string;
            string[] path = result[1] as string[];
            if (dBName.ToLower().CompareTo("hdb") == 0)
                return await HDBHandler.GetAttributeValuesByIdOrName(apiPath, id, path, null);
            else if (dBName.ToLower().CompareTo("cdp") == 0)
                return await CDPHandler.GetAttributeValuesByIdOrName(apiPath, id, path, null);
            return new ResponseMessage(false, "Database '" + dBName + "' is unknown");
        }
    }
}