using APIGateway.Models;
using Microsoft.AspNetCore.Mvc;
using System.Security.Principal;
using System.Threading.Tasks;

namespace APIGateway.Controllers
{
    [Route("ExcelAddin/api/[controller]")]
    [ApiController]
    public class GetCallerNameController : ControllerBase
    {
        [HttpGet]
        public async Task<string> GetCallerName()
        {
            string url = "https://grzsms216.andritz.com/services/api/components(3300).json?";
            WindowsIdentity caller = User.Identity as WindowsIdentity;
            ResponseMessage response = await WindowsIdentity.RunImpersonated(caller.AccessToken, async () => await HDBHandler.FetchDataFromDB(url));
            //ResponseMessage response = await HDBHandler.FetchDataFromDB(url);
            return $"{caller.Name} : {response.Data.ToString()}";
        }
    }
}