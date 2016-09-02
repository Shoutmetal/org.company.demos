using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using System;

namespace org.company.security.IdentityModels
{
    public class User : IdentityUser<Guid>
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }

    }

  
}
