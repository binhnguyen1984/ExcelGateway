using APIGateway.Models;
using Microsoft.AspNetCore.Mvc;
using System.Security.Principal;
using System.Threading.Tasks;

namespace APIGateway.Controllers
{
    [Route("ExcelAddin/api/[controller]")]
    [ApiController]
    public class LoadAttributeValuesController : ControllerBase
    {
        // GET: ExcelAddin/api/LoadAttributeValues
        [HttpGet]
        public async Task<ResponseMessage> GetAsync(string attrPath)
        {
            var callerIdentity = User.Identity as WindowsIdentity;
            return await WindowsIdentity.RunImpersonated(callerIdentity.AccessToken, async() => await LoadAttributeValues(attrPath));
        }

        private async Task<ResponseMessage> LoadAttributeValues(string attrPath)
        {
            ResponseMessage response = Common.StripOffDBNameFromAttrPath(attrPath);
            if (!response.IsSuccessful) return response;
            object[] result = response.Data as object[];
            string dBName = result[0] as string;
            string[] path = result[1] as string[];
            if (dBName.ToLower().CompareTo("hdb") == 0)
                return await HDBHandler.GetAttributeValuesOfAllComponents(path);
            else if (dBName.ToLower().CompareTo("cdp") == 0)
                return await CDPHandler.GetAttributeValuesOfAllComponents(path);
            return new ResponseMessage(false, "Database '" + dBName + "' is unknown");
        }
    }
}
