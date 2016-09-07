using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Logging;
using org.company.core.security.Service;
using org.company.security.IdentityManagers;
using org.company.security.IdentityModels;
using System;
using System.IdentityModel.Tokens.Jwt;

namespace org.company.security.core.Configuration
{
    public class AuthAppConfiguration
    {

        public static void Add(IApplicationBuilder app, ILoggerFactory loggerFactory, SecurityUserManager<User> userManager, SignInManager<User> signInManager)
        {
            // Calling app.UseOAuthValidation() will register the middleware
            // in charge of validating the bearer tokens issued by ASOS.
            app.UseOAuthValidation();

            // Alternatively, you can also register the JWT middleware
            // if you don't want to use opaque tokens (the default format).
            // In this case, comment or remove the previous line.
            //app.UseJwtBearerAuthentication(new JwtBearerOptions
            //{
            //    AutomaticAuthenticate = true,
            //    AutomaticChallenge = true,
            //    RequireHttpsMetadata = false,
            //    Audience = "http://localhost:35923/",
            //    Authority = "http://localhost:35923/"
            //});

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
                options.AccessTokenLifetime = TimeSpan.FromMinutes(1);
                options.RevocationEndpointPath = "/connect/revoke";

                options.Provider = new AuthorizationProvider();

                // Force the OpenID Connect server middleware to use JWT
                // instead of the default opaque/encrypted format.
                //options.AccessTokenHandler = new JwtSecurityTokenHandler();
            });


           
        }
    }
}
