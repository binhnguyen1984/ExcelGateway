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
        [HttpGet]
        public async Task<ResponseMessage> Get(string propNames, string searchValues)
        {
            if (searchValues == null) return new ResponseMessage(false, "No search values are specified");
            if(propNames==null) return new ResponseMessage(false, "No import parameters are specified");
            return await Settings.LoadParametersAsync(propNames.Split(","), searchValues.Split(','));
        }
    }
}