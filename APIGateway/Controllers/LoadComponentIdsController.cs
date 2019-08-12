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
    public class LoadComponentIdsController : ControllerBase
    {
        // GET: ExcelAddin/api/LoadComponentIds
        [HttpGet]
        public async Task<List<string>> Get()
        {
            return await DBHelper.GetAttributeValues(Settings.DBCenters.HDB, new string[] { "components","componentID" });
        }
    }
}
