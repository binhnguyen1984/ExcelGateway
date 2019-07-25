using APIGateway.Models;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace APIGateway.Controllers
{
    [Route("ExcelAddin/api/[controller]")]
    [ApiController]
    public class UpdateParametersController : ControllerBase
    {
        [HttpPut("{sheetName}")]
        public async Task<int> Put(string sheetName, [FromBody] string value)
        {
            return await Settings.UpdateParametersAsync(sheetName,value.Split(','));
        }
    }
}
