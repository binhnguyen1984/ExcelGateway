using APIGateway.Models;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace APIGateway.Controllers
{
    [Route("ExcelAddin/api/[controller]")]
    [ApiController]
    public class UpdateParametersController : ControllerBase
    {
        [HttpPut]
        public async Task<int> Put([FromBody] string value)
        {
            return await Settings.ExcelModel.UpdateParametersAsync(value.Split(','));
        }
    }
}
