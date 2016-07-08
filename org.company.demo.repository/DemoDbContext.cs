
using org.company.demo.entities;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;

namespace org.company.demo.repository
{
    public class DemoDbContext : DbContext
    {
        public DemoDbContext()
            : base("name=DemoDbContext")
        {
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }

        public virtual DbSet<Product> Product { get; set; }
        public virtual DbSet<ProductType> ProductType { get; set; }
    }
}
