using APIGateway.Models;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using System;

namespace APIGateway
{
    public class Program
    {
        public static void Main(string[] args)
        {
            AppContext.SetSwitch("System.Net.Http.UseSocketsHttpHandler", false); //this is for impersonation to work
            DBHelper.InitializeDbHelper();
            CreateWebHostBuilder(args).Build().Run();
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args)
        {
            return WebHost.CreateDefaultBuilder(args).UseIISIntegration().UseStartup<Startup>();
        }
    }
}
