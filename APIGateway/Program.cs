using APIGateway.CommonHelpers;
using APIGateway.Models;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;

namespace APIGateway
{
    public class Program
    {
        public static void Main(string[] args)
        {
            APICaller.InitializeAPIClients();
            Settings.LoadAllExcelConfigs();
            CreateWebHostBuilder(args).Build().Run();
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args)
        {
            return WebHost.CreateDefaultBuilder(args).UseIISIntegration().UseStartup<Startup>();
        }
    }
}
