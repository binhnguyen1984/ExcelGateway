using APIGateway.Models;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace APIGateway.Controllers
{
    [Route("ExcelAddin/api/[controller]")]
    [ApiController]
    public class LoadProjectIdsController : ControllerBase
    {
        // GET: ExcelAddin/api/LoadProjectIds
        [HttpGet]
        public async Task<ResponseMessage> GetAsync()
        {
            return await DBHelper.GetAttributeValues(Settings.DBCenters.CDP, new string[] { "projects", "id" });
        }
    }
}
