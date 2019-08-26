using APIGateway.Models;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace APIGateway.Controllers
{
    [Route("ExcelAddin/api/[controller]")]
    [ApiController]
    public class LoadHdbComponentIdsController : ControllerBase
    {
        // GET: ExcelAddin/api/LoadComponentIds
        [HttpGet]
        public async Task<ResponseMessage> Get()
        {
            return await DBHelper.GetAttributeValuesOfAllComponents(new string[] { "hdb:components", "componentID" });
        }
    }
}
