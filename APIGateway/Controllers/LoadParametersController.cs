using APIGateway.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace APIGateway.Controllers
{
    [Route("ExcelAddin/api/[controller]")]
    [ApiController]
    public class LoadParametersController : ControllerBase
    {
        [HttpGet("{sheetName}")]
        public async Task<string> Get(string sheetName, string searchValues)
        {
            if (searchValues == null) return "";
            List<ParamCell> result = await Settings.LoadParametersAsync(sheetName, searchValues.Split(','));
            return result!=null?JsonConvert.SerializeObject(result): "";
        }
    }
}