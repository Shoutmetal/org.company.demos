using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using org.company.security.IdentityModels;

namespace org.company.security.Context
{
    public class SecurityDbContext : IdentityDbContext<User,Role,int>
    {
 
        public SecurityDbContext(DbContextOptions<SecurityDbContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.HasDefaultSchema("security");
            builder.Entity<IdentityRoleClaim<int>>().ForSqlServerToTable(nameof(RoleClaim));
            builder.Entity<IdentityUserClaim<int>>().ForSqlServerToTable(nameof(UserClaim));
            builder.Entity<IdentityUserLogin<int>>().ForSqlServerToTable(nameof(UserLogin));
            builder.Entity<IdentityUserToken<int>>().ForSqlServerToTable(nameof(UserToken));
            builder.Entity<IdentityUserRole<int>>().ForSqlServerToTable(nameof(UserRole));
            builder.Entity<User>().ForSqlServerToTable(nameof(User));
            builder.Entity<Role>().ForSqlServerToTable(nameof(Role));
           

            base.OnModelCreating(builder);

        }

        

    }
}
