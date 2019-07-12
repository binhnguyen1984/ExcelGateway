using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using ProxyKit;
using System.Net.Http;
using ExcelProxy.Middlewares;
using Microsoft.Extensions.Logging;

namespace APIGateway
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.Configure<CookiePolicyOptions>(options =>
            {
                // This lambda determines whether user consent for non-essential cookies is needed for a given request.
                options.CheckConsentNeeded = context => true;
                options.MinimumSameSitePolicy = SameSiteMode.None;
            });

            services.AddLogging(options =>
            {
                options.AddDebug();
                options.AddConsole(console =>
                {
                    console.IncludeScopes = true;
                });
            });
            services.AddMvcCore().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);
            services.AddProxy(httpClientBuilder =>
                httpClientBuilder.ConfigurePrimaryHttpMessageHandler(() => new HttpClientHandler { ServerCertificateCustomValidationCallback = (_, __, ___, ____) => true, UseDefaultCredentials = true }));
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                app.UseHsts();
            }
            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseCookiePolicy();
            app.UseAuthentication();
            app.UseImpersonationMiddleWare();
            app.UseMvc();
            app.Map("/api/hdb", app1 =>
            {
                app1.RunProxy(ctx => ctx
                    .ForwardTo("https://grzsms216.andritz.com/services/api/")
                    .AddXForwardedHeaders()
                    .Send());
            });

            app.Map("/api/cdp", app2 =>
            {
                app2.RunProxy(ctx => ctx
                    .ForwardTo("https://volta-dev.andritz.com/api/")
                    .AddXForwardedHeaders()
                    .Send());
            });

            app.Run(async ctx => await ctx.Response.WriteAsync("Excel API Gateway is listening..."));
        }
    }
}
