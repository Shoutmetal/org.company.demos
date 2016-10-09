

using Microsoft.EntityFrameworkCore;
using org.company.inventory.command.domain;

namespace org.company.inventory.command.repository.context
{

    public partial class CommandDbContext : DbContext
    {
        public CommandDbContext(DbContextOptions<CommandDbContext> options)
            : base(options)
        {
           
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Inventory>().HasKey(e => new { e.WarehouseId, e.ProductId });

        }

        public virtual DbSet<Inventory> Inventory { get; set; }


    }
}
