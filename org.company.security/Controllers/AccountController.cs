using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Authorization;
using org.company.security.Model;
using Microsoft.Extensions.Logging;
using org.company.security.IdentityModels;
using org.company.security.IdentityManagers;

namespace org.company.security.Controllers
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
        //[AllowAnonymous]
        //[ValidateAntiForgeryToken]
        public async Task<IActionResult> Register(RegisterViewModel model)
        {
            if (ModelState.IsValid)
            {
                var user = new User { UserName = model.Email, Email = model.Email };
                var result = await _userManager.CreateAsync(user, model.Password);
                if (result.Succeeded)
                {

                    await AddRoleAsync(user);

                    return Ok();
                }

            }

            // If we got this far, something failed, redisplay form
            return BadRequest();
        }

        public async Task AddRoleAsync(User user)
        {
            var roleExists = await _roleManager.RoleExistsAsync(CustomerRoleName);

            if (!roleExists)
                await _roleManager.CreateAsync(new Role() { Name = CustomerRoleName });

            await _userManager.AddToRoleAsync(user, CustomerRoleName);
        }

        [HttpPost]
        [AllowAnonymous]
        //[ValidateAntiForgeryToken]
        public async Task<IActionResult> Login(LoginViewModel model, string returnUrl = null)
        {
            ViewData["ReturnUrl"] = returnUrl;
            if (ModelState.IsValid)
            {
                // This doesn't count login failures towards account lockout
                // To enable password failures to trigger account lockout, set lockoutOnFailure: true
                var result = await _signInManager.PasswordSignInAsync(model.Email, model.Password, model.RememberMe, lockoutOnFailure: false);
                if (result.Succeeded)
                {
                    _logger.LogInformation(1, "User logged in.");
                    return Redirect(returnUrl);
                }
                if (result.RequiresTwoFactor)
                {
                    return Redirect("");
                }
                if (result.IsLockedOut)
                {
                    _logger.LogWarning(2, "User account locked out.");
                    return Redirect("");
                }
                else
                {
                    ModelState.AddModelError(string.Empty, "Invalid login attempt.");
                    return Redirect("");
                }
            }

            // If we got this far, something failed, redisplay form
            return Redirect("");
        }

        [HttpPost]
        //[ValidateAntiForgeryToken]
        public async Task<IActionResult> LogOff()
        {
            await _signInManager.SignOutAsync();
            _logger.LogInformation(4, "User logged out.");
            return Redirect("");
        }
    }
}
