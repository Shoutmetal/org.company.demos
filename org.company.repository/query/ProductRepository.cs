using org.company.order.contract.query;
using org.company.order.domain;
using org.company.order.repository.context;
using org.company.order.repository.generic;

namespace org.company.repository.query
{
    public class ProductRepository : QueryRepository<Product>, IProductRepository
    {
       public ProductRepository(QueryDbContext context) : base(context) { }
    }
}
