using APIGateway.Models;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace APIGateway.Controllers
{
    [Route("ExcelAddin/api/[controller]")]
    [ApiController]
    public class LoadCdpProjectIdsController : ControllerBase
    {
        // GET: ExcelAddin/api/LoadProjectIds
        [HttpGet]
        public async Task<ResponseMessage> GetAsync()
        {
            return await DBHelper.GetAttributeValuesOfAllComponents(new string[] { "cdp:projects", "id" });
        }
    }
}
