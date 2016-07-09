using org.company.sales.domain.contracts.repository;
using org.company.sales.entities;
using org.company.sales.repository.generic;
using System.Data.Entity;

namespace org.company.sales.repository
{
    public class ProductRepository : GenericRepository<Product>, IProductRepository
    {
       public ProductRepository(DbContext context) : base(context) { }
    }
}
