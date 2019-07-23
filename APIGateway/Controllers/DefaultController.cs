using Microsoft.AspNetCore.Mvc;

namespace APIGateway.Controllers
{
    [ApiController]
    public class DefaultController : ControllerBase
    {
        [Route("")]
        [HttpGet]
        public string Get()
        {
            //return System.Security.Principal.WindowsIdentity.GetCurrent().Name + ":" +User.Identity.Name+":"+ System.Security.Principal.WindowsIdentity.GetCurrent().AuthenticationType;            
            return "ExcelAPIGateway is listening...";
        }
    }
}
