using Microsoft.AspNetCore.Builder;

namespace APIGateway.Middlewares
{
    public static class ImpersonationMiddleWareExtensions
    {
        public static IApplicationBuilder UseImpersonationMiddleWare(this IApplicationBuilder builder)
        {
            return builder.UseMiddleware<ImpersonationMiddleWare>();
        }
    }
}
