using Microsoft.EntityFrameworkCore;
using org.company.order.domain.contracts.repository;
using org.company.order.entities;
using org.company.order.repository.generic;

namespace org.company.order.repository
{
    public class ProductRepository : GenericRepository<Product>, IProductRepository
    {
       public ProductRepository(DemoDbContext context) : base(context) { }
    }
}
