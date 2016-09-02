using org.company.security.Context;
using org.company.security.IdentityModels;
using Microsoft.Extensions.DependencyInjection;
using org.company.security.IdentityManagers;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using System;

namespace org.company.security.core.Configuration
{
    public class AuthServiceConfiguration
    {

        public static void Add(IServiceCollection services, IConfigurationRoot configuration) {

            services.AddAuthentication();

            services
                .AddEntityFrameworkSqlServer()
                .AddDbContext<SecurityDbContext>(options =>
                    options.UseSqlServer(configuration.GetConnectionString("SecurityDbContext"), 
                    b => b.MigrationsAssembly("org.company.order.service")));

            services
                .AddIdentity<User, Role>(
                        options =>
                        {
                            options.Password.RequireDigit = false;
                            options.Password.RequiredLength = 8;
                            options.Password.RequireLowercase = false;
                            options.Password.RequireNonAlphanumeric = false;
                            options.Password.RequireUppercase = false;
                        })
                .AddEntityFrameworkStores<SecurityDbContext, Guid>()
                .AddDefaultTokenProviders()
                .AddUserManager<SecurityUserManager<User>>();

        }
    }
}
