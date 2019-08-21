using APIGateway.Models;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace APIGateway.Controllers
{
    [Route("ExcelAddin/api/[controller]")]
    [ApiController]
    public class LoadComponentIdsController : ControllerBase
    {
        // GET: ExcelAddin/api/LoadComponentIds
        [HttpGet]
        public async Task<ResponseMessage> Get()
        {
            return await DBHelper.GetAttributeValues(Settings.DBCenters.HDB, new string[] { "components", "componentID" });
        }
    }
}
