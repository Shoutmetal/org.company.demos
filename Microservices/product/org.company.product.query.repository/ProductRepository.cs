using org.company.product.query.domain;
using org.company.product.query.domain.repository;
using org.company.product.query.repository.generic;

namespace org.company.product.query.repository
{
    public class ProductRepository : QueryRepository<Product>, IProductRepository
    {
    }
}
