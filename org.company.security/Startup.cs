
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;
using org.company.core.security.Service;
using Microsoft.AspNetCore.Http;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.AspNetCore.Identity;
using org.company.security.Context;
using org.company.security.IdentityModels;
using org.company.security.IdentityManagers;
using Newtonsoft.Json.Serialization;

namespace org.company.security
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true);

            if (env.IsEnvironment("Development"))
            {
                // This will push telemetry data through Application Insights pipeline faster, allowing you to view results immediately.
                builder.AddApplicationInsightsSettings(developerMode: true);
            }

            builder.AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container
        public void ConfigureServices(IServiceCollection services)
        {
            // Add framework services.
            services.AddApplicationInsightsTelemetry(Configuration);

            services
                .AddEntityFrameworkSqlServer()
                .AddDbContext<SecurityDbContext>(options =>
                    options.UseSqlServer(Configuration.GetConnectionString("SecurityDbContext")));

            services
                .AddIdentity<User, Role>(
                        options => {
                            options.Password.RequireDigit = false;
                            options.Password.RequiredLength = 8;
                            options.Password.RequireLowercase = false;
                            options.Password.RequireNonAlphanumeric = false;
                            options.Password.RequireUppercase = false;
                            })
                .AddEntityFrameworkStores<SecurityDbContext, int>()
                .AddDefaultTokenProviders()
                .AddUserManager<SecurityUserManager<User>>();

            services.AddAuthentication();

            services.AddMvc()
               .AddJsonOptions(options => {
                   options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;
                   options.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
               });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory, SecurityUserManager<User> userManager, SignInManager<User> signInManager )
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            app.UseCors(policy =>
            {
                policy.AllowAnyOrigin();
                policy.AllowAnyHeader();
                policy.AllowAnyMethod();
            });



            app.UseApplicationInsightsRequestTelemetry();
            app.UseApplicationInsightsExceptionTelemetry();

            app.UseIdentity();

            app.UseJwtBearerAuthentication(new JwtBearerOptions
            {
                AutomaticAuthenticate = true,
                AutomaticChallenge = true,
                Audience = "resource_server_1",
                Authority = "/",
                RequireHttpsMetadata = false
                
            });

            // Add a new middleware issuing tokens.
            app.UseOpenIdConnectServer(options =>
            {
                // Disable the HTTPS requirement.
                options.AllowInsecureHttp = true;

                // Disable the authorization endpoint as it's not used in this scenario.
                options.AuthorizationEndpointPath = PathString.Empty;
                options.TokenEndpointPath = "/connect/token";
               
                options.Provider = new AuthorizationProvider(userManager, signInManager, loggerFactory);

                // Force the OpenID Connect server middleware to use JWT
                // instead of the default opaque/encrypted format.
                options.AccessTokenHandler = new JwtSecurityTokenHandler();
            });

            

            app.UseDeveloperExceptionPage();

 
            app.UseMvc();
        }
    }
}
