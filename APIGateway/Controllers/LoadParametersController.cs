using APIGateway.Models;
using Microsoft.AspNetCore.Mvc;
using System.Security.Principal;
using System.Threading.Tasks;

namespace APIGateway.Controllers
{
    [Route("ExcelAddin/api/[controller]")]
    [ApiController]
    public class LoadParametersController : ControllerBase
    {
        [HttpGet]
        public async Task<ResponseMessage> Get(string propNames, string searchValues)
        {
            if (searchValues == null) return new ResponseMessage(false, "No search values are specified");
            if (propNames == null) return new ResponseMessage(false, "No import parameters are specified");
            var callerIdentity = User.Identity as WindowsIdentity;
            return await WindowsIdentity.RunImpersonated(callerIdentity.AccessToken,
                async () => await GlobalResources.ExcelHandlerInst.LoadParametersAsync(propNames.Split(","), searchValues.Split(',')));
        }
    }
}