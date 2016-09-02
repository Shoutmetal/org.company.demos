using org.company.security.Context;
using org.company.security.IdentityModels;
using Microsoft.Extensions.DependencyInjection;
using org.company.security.IdentityManagers;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;

namespace org.company.security.core.Configuration
{
    public class AuthServiceConfiguration
    {

        public static void Add(IServiceCollection services, IConfigurationRoot configuration) {

            services.AddAuthentication();

            services
                .AddEntityFrameworkSqlServer()
                .AddDbContext<SecurityDbContext>(options =>
                    options.UseSqlServer(configuration.GetConnectionString("SecurityDbContext")));

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
                .AddEntityFrameworkStores<SecurityDbContext, int>()
                .AddDefaultTokenProviders()
                .AddUserManager<SecurityUserManager<User>>();



            //services.AddAuthorization(auth =>
            //{
            //    auth.AddPolicy("Bearer", new AuthorizationPolicyBuilder("org.company")
            //        .RequireAuthenticatedUser().Build());
            //});
        }
    }
}
