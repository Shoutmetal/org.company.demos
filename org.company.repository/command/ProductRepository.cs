using org.company.order.contract.command;
using org.company.order.domain;
using org.company.repository.generic;

namespace org.company.repository.command
{
    public class ProductRepository : CommandRepository<Product>, IProductRepository
    {
       public ProductRepository(CommandDbContext context) : base(context) { }
    }
}
