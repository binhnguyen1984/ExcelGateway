using APIGateway.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace APIGateway.Controllers
{
    [Route("ExcelAddin/api/[controller]")]
    [ApiController]
    public class LoadExcelConfigController : ControllerBase
    {
        [HttpGet]
        public ActionResult<string> Get()
        {
            //return System.Security.Principal.WindowsIdentity.GetCurrent().Name + ":" +User.Identity.Name+":"+ System.Security.Principal.WindowsIdentity.GetCurrent().AuthenticationType;            
            return JsonConvert.SerializeObject(Settings.ExcelConfig);
        }
    }
}
