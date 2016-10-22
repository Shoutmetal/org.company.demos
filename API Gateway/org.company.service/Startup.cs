using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json.Serialization;
using org.company.messaging;
using org.company.security.Configuration;
using org.company.security.IdentityManagers;
using org.company.security.IdentityModels;
using RawRabbit.vNext;

namespace org.company.service
{
    public class Startup
    {
        private IHostingEnvironment environment;

        public Startup(IHostingEnvironment env)
        {
            environment = env;

            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true);



            if (env.IsEnvironment("Development"))
                builder.AddApplicationInsightsSettings(developerMode: true);


            builder.AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container
        public void ConfigureServices(IServiceCollection services)
        {
            // Add framework services.
            services.AddApplicationInsightsTelemetry(Configuration);

            //Add ASOS service
            AuthServiceConfiguration.Add(services, Configuration);

            services.AddRawRabbit(
                cfg => cfg.SetBasePath(environment.ContentRootPath).AddJsonFile("rawrabbit.json", optional: true),
                ioc => ioc
                    .AddSingleton<ICommandServiceBus, RawRabbitCommandServiceBus>()
                    .AddSingleton<IQueryServiceBus, RawRabbitQueryServiceBus>()
            );

            services.AddMvc()
                .AddJsonOptions(options =>
                {
                    options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;
                    options.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
                });

        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory, SecurityUserManager<User> userManager, SignInManager<User> signInManager)
        {
            if (env.IsEnvironment("Development"))
            {
                app.UseBrowserLink();
                app.UseDeveloperExceptionPage();
            }

            app.UseCors(policy =>
            {
                policy.AllowAnyOrigin();
                policy.AllowAnyHeader();
                policy.AllowAnyMethod();
            });

            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            app.UseApplicationInsightsRequestTelemetry();
            app.UseApplicationInsightsExceptionTelemetry();

            //Add ASOS configuration
            AuthAppConfiguration.Add(app, loggerFactory, userManager, signInManager);


            app.UseMvc();

            app.Run(async (context) =>
            {
                await context.Response.WriteAsync("Welcome to the org.company Demo");
            });
        }
    }
}
