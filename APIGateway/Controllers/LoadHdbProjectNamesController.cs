using APIGateway.Models;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

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
