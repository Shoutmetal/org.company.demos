using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using org.company.security.IdentityManagers;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Logging;
using org.company.security.IdentityModels;
using Microsoft.AspNetCore.Authorization;
using org.company.security.Model;
using AspNet.Security.OpenIdConnect.Extensions;
using System.Security.Claims;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace org.company.order.service.Controllers
{
    [Route("api/[controller]")]
    public class AccountController : Controller
    {
        private readonly SecurityUserManager<User> _userManager;
        private readonly RoleManager<Role> _roleManager;
        private readonly SignInManager<User> _signInManager;
        private readonly string CustomerRoleName = "Customer";
        private readonly ILogger _logger;

        public AccountController(
            SecurityUserManager<User> userManager,
            RoleManager<Role> roleManager,
            SignInManager<User> signInManager,
            ILoggerFactory loggerFactory)
        {

            _userManager = userManager;
            _roleManager = roleManager;
            _signInManager = signInManager;
            _logger = loggerFactory.CreateLogger<AccountController>();
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(RegisterViewModel model)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            var user = new User
            {
                UserName = model.UserName,
                Email = model.Email,
                FirstName = model.FirstName,
                LastName = model.LastName
            };

            var result = await _userManager.CreateAsync(user, model.Password);
            if (result.Succeeded)
            {
                await AddRoleAsync(user);

                return Ok(result);
            }

            return BadRequest(result.Errors);
        }

        public async Task AddRoleAsync(User user)
        {
            var roleExists = await _roleManager.RoleExistsAsync(CustomerRoleName);

            if (!roleExists)
                await _roleManager.CreateAsync(new Role() { Name = CustomerRoleName });

            await _userManager.AddToRoleAsync(user, CustomerRoleName);
        }

        [Authorize]
        [HttpGet("~/connect/userinfo")]
        public IActionResult Get()
        {
            return Json(new
            {
                sub = User.GetClaim(ClaimTypes.NameIdentifier),
                username = User.GetClaim(ClaimTypes.Name),
                firstname = User.GetClaim("firstname"),
                lastname = User.GetClaim("lastname")
            });
        }

        [HttpPost]
        public async Task<IActionResult> LogOff()
        {
            await _signInManager.SignOutAsync();
            _logger.LogInformation(4, "User logged out.");
            return Redirect("");
        }
    }
}
