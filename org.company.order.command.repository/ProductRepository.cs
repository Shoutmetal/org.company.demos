using org.company.order.command.repository.generic;
using org.company.order.command.repository.context;
using org.company.order.command.domain;

namespace org.company.order.command.repository
{
    public class ProductRepository : CommandRepository<Product>, IProductRepository
    {
       public ProductRepository(CommandDbContext context) : base(context) { }
    }
}
