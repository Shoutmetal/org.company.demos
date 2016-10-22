using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using org.company.messaging;
using org.company.product.query.handler;
using org.company.product.query.repository.configuration;
using RawRabbit.vNext;
using System;
using System.IO;

namespace org.company.product.application
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

            QueryRepositoryDependencyResolver.RegisterServices(services);

            services.AddSingleton<IQueryStartHandler, ProductQueryHandler>();

            services.AddRawRabbit(
              cfg => cfg.SetBasePath(Directory.GetCurrentDirectory()).AddJsonFile("rawrabbit.json", optional: true),
              ioc => ioc
                .AddSingleton<ICommandServiceBus, RawRabbitCommandServiceBus>()
                .AddSingleton<IQueryServiceBus, RawRabbitQueryServiceBus>()
            );


            return services.BuildServiceProvider();
        }
    }
}
