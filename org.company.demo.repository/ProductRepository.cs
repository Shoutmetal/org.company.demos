using org.company.order.domain.contracts.repository;
using org.company.order.entities;
using org.company.order.repository.generic;
using System.Data.Entity;

namespace org.company.order.repository
{
    public class ProductRepository : GenericRepository<Product>, IProductRepository
    {
       public ProductRepository(DbContext context) : base(context) { }
    }
}
