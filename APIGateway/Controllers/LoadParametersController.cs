﻿using APIGateway.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
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
            return JsonConvert.SerializeObject(await Settings.LoadParametersAsync(sheetName,searchValues.Split(',')));
        }
    }
}