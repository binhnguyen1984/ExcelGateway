using APIGateway.Models;
using Microsoft.AspNetCore.Mvc;
using System.Security.Principal;
using System.Threading.Tasks;

namespace APIGateway.Controllers
{
    [Route("ExcelAddin/api/[controller]")]
    [ApiController]
    public class LoadVariantsByProjectNameController : ControllerBase
    {
        public async Task<ResponseMessage> GetAsync(string projectName)
        {
            var callerIdentity = User.Identity as WindowsIdentity;
            return await WindowsIdentity.RunImpersonated(callerIdentity.AccessToken,
                async () => await CDPHandler.GetVariantsByProjectName(projectName));
        }
    }
}