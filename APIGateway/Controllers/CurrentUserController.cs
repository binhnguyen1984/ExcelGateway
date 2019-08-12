using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace APIGateway.Controllers
{
    [Route("ExcelAddin/api/[controller]")]
    [ApiController]
    public class CurrentUserController : ControllerBase
    {
        // GET: api/CurrentUser
        [HttpGet]
        public string Get()
        {
            return "Current user:" + System.Security.Principal.WindowsIdentity.GetCurrent().Name;
        }

        // GET: api/CurrentUser/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/CurrentUser
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/CurrentUser/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
