using AspNet.Security.OpenIdConnect.Extensions;
using AspNet.Security.OpenIdConnect.Server;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Http.Authentication;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Logging;
using org.company.security.IdentityManagers;
using org.company.security.IdentityModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace org.company.core.security.Service
{
    public sealed class AuthorizationProvider : OpenIdConnectServerProvider
    {
        private readonly SecurityUserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;
        private readonly ILogger _logger;


        public AuthorizationProvider(
            SecurityUserManager<User> userManager,
            SignInManager<User> signInManager,
            ILoggerFactory loggerFactory)
        {

            _userManager = userManager;
            
            _signInManager = signInManager;
            _logger = loggerFactory.CreateLogger<AuthorizationProvider>();
        }


        public override Task ValidateTokenRequest(ValidateTokenRequestContext context)
        {
            // Reject the token requests that don't use
            // grant_type=password or grant_type=refresh_token.
            if (!context.Request.IsPasswordGrantType() &&
                !context.Request.IsRefreshTokenGrantType())
            {
                context.Reject(
                    error: OpenIdConnectConstants.Errors.UnsupportedGrantType,
                    description: "Only grant_type=password and refresh_token " +
                                 "requests are accepted by this server.");

                return Task.FromResult(0);
            }

            // Note: you can skip the request validation when the client_id
            // parameter is missing to support unauthenticated token requests.
            if (string.IsNullOrEmpty(context.ClientId))
            {
                context.Skip();

                return Task.FromResult(0);
            }

            // Note: to mitigate brute force attacks, you SHOULD strongly consider applying
            // a key derivation function like PBKDF2 to slow down the secret validation process.
            // You SHOULD also consider using a time-constant comparer to prevent timing attacks.
            if (string.Equals(context.ClientId, "client_id", StringComparison.Ordinal) &&
                string.Equals(context.ClientSecret, "client_secret", StringComparison.Ordinal))
            {
                context.Validate();
            }

            // Since there's only one application and since it's a public client
            // (i.e a client that cannot keep its credentials private), call Skip()
            // to inform the server that the request should be accepted without 
            // enforcing client authentication.
            context.Skip();

            return Task.FromResult(0);
        }

        public override async Task HandleTokenRequest(HandleTokenRequestContext context)
        {
            // Only handle grant_type=password token requests and let the
            // OpenID Connect server middleware handle the other grant types.
            if (context.Request.IsPasswordGrantType())
            {
                var user = await _userManager.FindByNameAsync(context.Request.Username);
                var result = await _userManager.CheckPasswordAsync(user, context.Request.Password);

                if (user == null || !result) {
                    _logger.LogInformation(0, "Invalid User");
                    context.Reject(
                        error: OpenIdConnectConstants.Errors.InvalidClient,
                        description: "Invalid User.");
                }


                var identity = new ClaimsIdentity(context.Options.AuthenticationScheme);
                identity.AddClaim(ClaimTypes.NameIdentifier, user.UserName);
                identity.AddClaim(ClaimTypes.Name, user.UserName);
                identity.AddClaim(ClaimTypes.Email, user.Email);

                // By default, claims are not serialized in the access and identity tokens.
                // Use the overload taking a "destinations" parameter to make sure 
                // your claims are correctly serialized in the appropriate tokens.
                identity.AddClaim("urn:customclaim", "value",
                    OpenIdConnectConstants.Destinations.AccessToken,
                    OpenIdConnectConstants.Destinations.IdentityToken);

                AuthenticationProperties properties = await CreateProperties(user);

                var claimPrincipal = new ClaimsPrincipal(identity);
                var ticket = new AuthenticationTicket(claimPrincipal, properties, context.Options.AuthenticationScheme);

                // Call SetResources with the list of resource servers
                // the access token should be issued for.
                ticket.SetResources("resource_server_1");

                // Call SetScopes with the list of scopes you want to grant
                // (specify offline_access to issue a refresh token).
                ticket.SetScopes("profile", "offline_access");

                context.Validate(ticket);

                await _signInManager.SignInAsync(user, properties);
            }
        }

        public async Task<AuthenticationProperties> CreateProperties(User user)
        {
            var permissions = await _userManager.GetRolesAsync(user);

            IDictionary<string, string> data = new Dictionary<string, string>
            {
                { "username", user.UserName },
                { "email", user.Email },
                { "roles", string.Join(",", permissions) }
            };

            return new AuthenticationProperties(data);
        }
    }
}
