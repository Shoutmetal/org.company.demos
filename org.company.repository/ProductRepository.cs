using org.company.order.contract.repository;
using org.company.order.domain;
using org.company.repository.generic;

namespace org.company.repository
{
    public class ProductRepository : GenericRepository<Product>, IProductRepository
    {
       public ProductRepository(DemoDbContext context) : base(context) { }
    }
}
