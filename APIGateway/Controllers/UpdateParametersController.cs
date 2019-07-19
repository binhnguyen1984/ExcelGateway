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
    public class UpdateParametersController : ControllerBase
    {
        // PUT: api/UpdateParameters
        [HttpPut]
        public string Put([FromBody] string value)
        {
            return "testing:"+value;
            //return await Settings.ExcelModel.UpdateParametersAsync(value.Split(','));
        }
    }
}
