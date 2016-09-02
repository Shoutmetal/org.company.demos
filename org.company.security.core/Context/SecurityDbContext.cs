using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using org.company.security.IdentityModels;
using System;

namespace org.company.security.Context
{
    public class SecurityDbContext : IdentityDbContext<User,Role, Guid>
    {
 
        public SecurityDbContext(DbContextOptions<SecurityDbContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.HasDefaultSchema("security");
            builder.Entity<IdentityRoleClaim<Guid>>().ForSqlServerToTable(nameof(RoleClaim));
            builder.Entity<IdentityUserClaim<Guid>>().ForSqlServerToTable(nameof(UserClaim));
            builder.Entity<IdentityUserLogin<Guid>>().ForSqlServerToTable(nameof(UserLogin));
            builder.Entity<IdentityUserToken<Guid>>().ForSqlServerToTable(nameof(UserToken));
            builder.Entity<IdentityUserRole<Guid>>().ForSqlServerToTable(nameof(UserRole));
            builder.Entity<User>().ForSqlServerToTable(nameof(User));
            builder.Entity<Role>().ForSqlServerToTable(nameof(Role));
           

            base.OnModelCreating(builder);

        }

        

    }
}
