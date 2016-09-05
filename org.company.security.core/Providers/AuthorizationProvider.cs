using AspNet.Security.OpenIdConnect.Extensions;
using AspNet.Security.OpenIdConnect.Server;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Http.Authentication;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;
using org.company.security.IdentityManagers;
using org.company.security.IdentityModels;
using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;

namespace org.company.core.security.Service
{
    public sealed class AuthorizationProvider : OpenIdConnectServerProvider
    {

        public override Task MatchEndpoint(MatchEndpointContext context)
        {
            // Note: by default, OpenIdConnectServerHandler only handles authorization requests made to the authorization endpoint.
            // This context handler uses a more relaxed policy that allows extracting authorization requests received at
            // /connect/authorize/accept and /connect/authorize/deny (see AuthorizationController.cs for more information).
            if (context.Options.AuthorizationEndpointPath.HasValue &&
                context.Request.Path.StartsWithSegments(context.Options.AuthorizationEndpointPath))
            {
                context.MatchesAuthorizationEndpoint();
            }

            return Task.FromResult(0);
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

            var userManager = context.HttpContext.RequestServices.GetService<SecurityUserManager<User>>();
            var signInManager = context.HttpContext.RequestServices.GetService<SignInManager<User>>();

            // Only handle grant_type=password token requests and let the
            // OpenID Connect server middleware handle the other grant types.
            if (context.Request.IsPasswordGrantType())
            {
                var user = await userManager.FindByNameAsync(context.Request.Username);
                var result = await userManager.CheckPasswordAsync(user, context.Request.Password);

                if (user == null || !result)
                {
                    context.Reject(
                        error: OpenIdConnectConstants.Errors.InvalidGrant,
                        description: "Invalid Credentials.");

                    return;
                }

                
                var identity = new ClaimsIdentity(context.Options.AuthenticationScheme);

                // Note: the name identifier is always included in both identity and
                // access tokens, even if an explicit destination is not specified.
                identity.AddClaim(ClaimTypes.NameIdentifier, await userManager.GetUserIdAsync(user));
 

                // By default, claims are not serialized in the access and identity tokens.
                // Use the overload taking a "destinations" parameter to make sure 
                // your claims are correctly serialized in the appropriate tokens.
                identity.AddClaim(ClaimTypes.Name, await userManager.GetUserNameAsync(user),
                    OpenIdConnectConstants.Destinations.AccessToken,
                    OpenIdConnectConstants.Destinations.IdentityToken);

                identity.AddClaim("userid", user.Id.ToString(),
                     OpenIdConnectConstants.Destinations.AccessToken,
                    OpenIdConnectConstants.Destinations.IdentityToken);

                identity.AddClaim("firstname", user.FirstName,
                     OpenIdConnectConstants.Destinations.AccessToken,
                    OpenIdConnectConstants.Destinations.IdentityToken);

                identity.AddClaim("lastname", user.LastName,
                     OpenIdConnectConstants.Destinations.AccessToken,
                    OpenIdConnectConstants.Destinations.IdentityToken);


                AuthenticationProperties properties = await CreateProperties(context, user);

                var claimPrincipal = new ClaimsPrincipal(identity);

                // Create a new authentication ticket holding the user identity.
                var ticket = new AuthenticationTicket(claimPrincipal, properties, context.Options.AuthenticationScheme);


                // Call SetScopes with the list of scopes you want to grant
                // (specify offline_access to issue a refresh token).
                ticket.SetScopes(
                    OpenIdConnectConstants.Scopes.OpenId,
                    OpenIdConnectConstants.Scopes.Email,
                    OpenIdConnectConstants.Scopes.Profile,
                    OpenIdConnectConstants.Scopes.OfflineAccess);

                // Call SetResources with the list of resource servers
                // the access token should be issued for.
                ticket.SetResources("resource_server");

                

                context.Validate(ticket);
            }
        }

        public async Task<AuthenticationProperties> CreateProperties(HandleTokenRequestContext context, User user)
        {

            var userManager = context.HttpContext.RequestServices.GetService<SecurityUserManager<User>>();
            var permissions = await userManager.GetRolesAsync(user);

            IDictionary<string, string> data = new Dictionary<string, string>
            {
                { "username", user.UserName },
                { "email", user.Email },
                { "roles", string.Join(",", permissions) }
            };

            return new AuthenticationProperties(data);
        }

        public override Task HandleUserinfoRequest(HandleUserinfoRequestContext context)
        {
            context.SkipToNextMiddleware();

            return Task.FromResult(0);
        }
    }
}
