using APIGateway.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace APIGateway.Controllers
{
    [Route("ExcelAddin/api/[controller]")]
    [ApiController]
    public class LoadExcelConfigController : ControllerBase
    {
        [HttpGet("{sheetName}")]
        public ActionResult<string> Get(string sheetName)
        {
            return JsonConvert.SerializeObject(Settings.LoadExcelConfiguration(sheetName));
        }
    }
}
