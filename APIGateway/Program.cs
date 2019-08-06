﻿using APIGateway.Models;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;

namespace APIGateway
{
    public class Program
    {
        public static void Main(string[] args)
        {
            Settings.LoadAllExcelConfigs();
            CreateWebHostBuilder(args).Build().Run();
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args)
        {
            return WebHost.CreateDefaultBuilder(args).UseIISIntegration().UseStartup<Startup>();
        }
    }
}
