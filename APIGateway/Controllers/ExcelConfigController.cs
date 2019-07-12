using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace ExcelProxy.Controllers
{
    [Route("ExcelAddin/api/[controller]")]
    [ApiController]
    public class LoadExcelConfigController : ControllerBase
    {
        // GET api/values
        [HttpGet]
        public ActionResult<string> Get()
        {
            //return System.Security.Principal.WindowsIdentity.GetCurrent().Name + ":" +User.Identity.Name+":"+ System.Security.Principal.WindowsIdentity.GetCurrent().AuthenticationType;
            using (StreamReader sr = new StreamReader("excelconfig.json"))
            {
                return sr.ReadToEnd();
            }
        }
        
        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
