using org.company.order.query.domain;
using org.company.order.query.domain.repository;
using org.company.order.query.repository.context;
using org.company.order.query.repository.generic;

namespace org.company.order.query.repository
{
    public class ProductRepository : QueryRepository<Product>, IProductRepository
    {
       public ProductRepository(QueryDbContext context) : base(context) { }
    }
}
