using Microsoft.EntityFrameworkCore;
using org.company.order.domain;

namespace org.company.repository
{

    public partial class DemoDbContext : DbContext
    {
        public DemoDbContext(DbContextOptions<DemoDbContext> options)
            : base(options)
        {
           
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Inventory>().HasKey(e => new { e.WarehouseId, e.ProductId });
            modelBuilder.Entity<OrderDetail>().HasKey(e => new { e.OrderId, e.ProductId });

        }


        public virtual DbSet<Order> Order { get; set; }
        public virtual DbSet<OrderDetail> OrderDetail { get; set; }
        public virtual DbSet<Status> Status { get; set; }
        public virtual DbSet<Product> Product { get; set; }
        public virtual DbSet<ProductType> ProductType { get; set; }
        public virtual DbSet<Inventory> Inventory { get; set; }
        public virtual DbSet<Warehouse> Warehouse { get; set; }


    }
}
