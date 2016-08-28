using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace org.company.security.IdentityModels
{
    public class User : IdentityUser<int>
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }

    }

  
}
