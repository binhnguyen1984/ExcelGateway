using Microsoft.AspNetCore.Mvc.RazorPages;

namespace APIGateway.HomePage
{
    public class IndexModel : PageModel
    {
        public string Message { get; private set; }
        public void OnGet()
        {
            Message = "Excel API Gateway is listening...";
        }
    }
}
