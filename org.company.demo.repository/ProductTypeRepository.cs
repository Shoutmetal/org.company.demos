using org.company.demo.domain.contracts;
using org.company.demo.entities;
using org.company.demo.repository.generic;
using System.Data.Entity;

namespace org.company.demo.repository
{
    public class ProductTypeRepository : GenericRepository<ProductType>, IProductTypeRepository
    {
        public ProductTypeRepository(DbContext context) : base(context) { }
    }
}
