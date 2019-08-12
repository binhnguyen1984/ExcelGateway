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
    public class LoadProjectIdsController : ControllerBase
    {
        // GET: ExcelAddin/api/LoadProjectIds
        [HttpGet]
        public async Task<List<string>> GetAsync()
        {
            return await DBHelper.GetAttributeValues(Settings.DBCenters.CDP, new string[] { "projects", "id"});
        }
    }
}
