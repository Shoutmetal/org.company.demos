using Microsoft.EntityFrameworkCore;
using org.company.order.query.domain;

namespace org.company.order.query.repository.context
{
    public class QueryDbContext : DbContext
    {
        public QueryDbContext(DbContextOptions<QueryDbContext> options)
            : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<OrderDetail>().HasKey(e => new { e.OrderId, e.ProductId });
        }


        public virtual DbSet<Order> Order { get; set; }


    }
}
