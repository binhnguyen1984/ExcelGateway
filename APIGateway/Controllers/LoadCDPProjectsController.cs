using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using APIGateway.CommonHelpers;
using APIGateway.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace APIGateway.Controllers
{
    [Route("ExcelAddin/api/[controller]")]
    [ApiController]
    public class LoadCDPProjectsController : ControllerBase
    {
        // GET: ExcelAddin/api/LoadCDPProjects
        [HttpGet]
        public async Task<string> Get()
        {
            object result = await APICaller.FetchDataFromCDP(Settings.CDPUrl + "projects");
            return JsonConvert.SerializeObject(result);
        }

        // GET: ExcelAddin/api/LoadCDPProjects/5
        [HttpGet("{id}", Name = "Get")]
        public async Task<string> Get(int id)
        {
            object result = await APICaller.FetchDataFromCDP(Settings.CDPUrl + "projects/" + id);
            return JsonConvert.SerializeObject(result);
        }
    }
}
