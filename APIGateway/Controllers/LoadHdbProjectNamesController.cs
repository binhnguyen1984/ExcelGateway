using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using APIGateway.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace APIGateway.Controllers
{
    [Route("ExcelAddin/api/[controller]")]
    [ApiController]
    public class LoadHdbProjectNamesController : ControllerBase
    {
        // GET: api/LoadHdbProjectNames
        [HttpGet]
        public async Task<ResponseMessage> GetAsync()
        {
            return await DBHelper.GetAttributeValuesOfAllComponents(new string[] { "hdb:projects", "name" });
        }
    }
}
