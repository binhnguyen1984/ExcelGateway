using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using APIGateway.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace APIGateway.Controllers
{
    [Route("ExcelAddin/api/[controller]")]
    [ApiController]
    public class LoadExcelConfigController : ControllerBase
    {
        // GET api/loadexcelconfig
        [HttpGet]
        public ActionResult<string> Get()
        {
            //return System.Security.Principal.WindowsIdentity.GetCurrent().Name + ":" +User.Identity.Name+":"+ System.Security.Principal.WindowsIdentity.GetCurrent().AuthenticationType;            
            return JsonConvert.SerializeObject(Settings.ExcelConfig);
        }

        // GET api/loadexcelconfig/excelsheetID
        [HttpGet("{excelSheetID}")]
        public ActionResult<string> Get(int excelSheetID)
        {
            return "value";
        }

        // POST api/excelSheetID
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/excelSheetID/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }
    }
}
