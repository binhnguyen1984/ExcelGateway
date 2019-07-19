using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using APIGateway.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace APIGateway.Controllers
{
    [Route("ExcelAddin/api/[controller]")]
    [ApiController]
    public class LoadParametersController : ControllerBase
    {
        // GET api/loadparameters/searchValues
        [HttpGet("{searchValues}")]
        public async Task<string> Get(string searchValues)
        {
            return JsonConvert.SerializeObject(await Settings.ExcelModel.FetchParamsFromDBAsync(searchValues.Split(',')));
        }
    }
}