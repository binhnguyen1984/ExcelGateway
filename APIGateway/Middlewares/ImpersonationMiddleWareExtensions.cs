using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ExcelProxy.Middlewares
{
    public static class ImpersonationMiddleWareExtensions
    {
        public static IApplicationBuilder UseImpersonationMiddleWare(this IApplicationBuilder builder)
        {
            return builder.UseMiddleware<ImpersonationMiddleWare>();
        }
    }
}
