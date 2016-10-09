

using Microsoft.EntityFrameworkCore;
using org.company.order.command.domain;

namespace org.company.order.command.repository.context
{

    public partial class CommandDbContext : DbContext
    {
        public CommandDbContext(DbContextOptions<CommandDbContext> options)
            : base(options)
        {
           
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<OrderDetail>().HasKey(e => new { e.OrderId, e.ProductId });

        }


        public virtual DbSet<Order> Order { get; set; }
        public virtual DbSet<OrderDetail> OrderDetail { get; set; }
        public virtual DbSet<Status> Status { get; set; }



    }
}
