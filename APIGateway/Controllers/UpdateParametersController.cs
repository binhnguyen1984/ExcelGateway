﻿using APIGateway.Models;
using Microsoft.AspNetCore.Mvc;
using System.Security.Principal;
using System.Threading.Tasks;

namespace APIGateway.Controllers
{
    [Route("ExcelAddin/api/[controller]")]
    [ApiController]
    public class UpdateParametersController : ControllerBase
    {
        [HttpPut]
        public async Task<ResponseMessage> Put(string propNames, [FromBody] string value)
        {
            if (value == null) return new ResponseMessage(false, "Updated values are not present");
            if (propNames == null) return new ResponseMessage(false, "Updated parameters are not present");
            return await GlobalResources.ExcelHandlerInst.UpdateParametersAsync(User.Identity as WindowsIdentity, propNames.Split(","), value.Split(','));
        }
    }
}
