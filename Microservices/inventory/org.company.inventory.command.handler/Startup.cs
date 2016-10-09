using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using org.company.messaging;
using org.company.inventory.command.repository.configuration;
using RawRabbit.vNext;
using System;
using System.IO;

namespace org.company.inventory.command.handler
{
    public class Startup
    {

        public Startup()
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT")}.json", optional: true);
                

            builder.AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        public IServiceProvider ConfigureServices(IServiceCollection services)
        {
            CommandContext.RegisterServices(services, Configuration);
            CommandRepositoryDependencyResolver.RegisterServices(services);

            services.AddSingleton<IStartHandler, InventoryHandler>();

            services.AddRawRabbit(
              cfg => cfg.SetBasePath(Directory.GetCurrentDirectory()).AddJsonFile("rawrabbit.json", optional: true),
              ioc => ioc.AddSingleton<IServiceBus,RawRabbitServiceBus>()
              
            );


            return services.BuildServiceProvider();
        }
    }
}
