using Microsoft.AspNetCore.Http;
using System.Security.Principal;
using System.Threading.Tasks;

namespace APIGateway.Middlewares
{
    public class ImpersonationMiddleWare
    {
        private readonly RequestDelegate _next;
        //private readonly ILogger<ImpersonationMiddleWare> _logger;
        public ImpersonationMiddleWare(RequestDelegate next/*, ILogger<ImpersonationMiddleWare> logger*/)
        {
            _next = next;
            //_logger = logger;
        }

        public async Task Invoke(HttpContext context)
        {
            var user = context.User.Identity;
            //_logger.LogInformation($"Original User: {user.Name}\tState: {user.ImpersonationLevel}\n");
            //await _next.Invoke(context);
            if (user is WindowsIdentity)
            {
                await WindowsIdentity.RunImpersonated(((WindowsIdentity)user).AccessToken, async () =>
                {
                    //var impersonatedUser = WindowsIdentity.GetCurrent();
                    //var message =
                    //    $"Impersonated User: {impersonatedUser.Name}\t" +
                    //    $"State: {impersonatedUser.ImpersonationLevel}\n";
                    //_logger.LogInformation(message);
                    await _next.Invoke(context);
                });
            }
            else await _next.Invoke(context);
        }
    }
}
