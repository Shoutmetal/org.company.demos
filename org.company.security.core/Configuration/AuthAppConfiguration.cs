using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Logging;
using org.company.core.security.Service;
using org.company.security.IdentityManagers;
using org.company.security.IdentityModels;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Threading.Tasks;

namespace org.company.security.core.Configuration
{
    public class AuthAppConfiguration
    {

        public static void Add(IApplicationBuilder app, ILoggerFactory loggerFactory, SecurityUserManager<User> userManager, SignInManager<User> signInManager)
        {
            app.UseOAuthValidation();

            // Add a new middleware issuing tokens.
            app.UseOpenIdConnectServer(options =>
            {
                // Disable the HTTPS requirement.
                options.ApplicationCanDisplayErrors = true;
                options.AllowInsecureHttp = true;
                options.AutomaticAuthenticate = true;

                // Disable the authorization endpoint as it's not used in this scenario.
                options.AuthorizationEndpointPath = PathString.Empty;
                options.TokenEndpointPath = "/connect/token";
                options.UserinfoEndpointPath = "/connect/userinfo";

                options.Provider = new AuthorizationProvider();

                // Force the OpenID Connect server middleware to use JWT
                // instead of the default opaque/encrypted format.
                //options.AccessTokenHandler = new JwtSecurityTokenHandler();
            });

            

        }
    }
}
