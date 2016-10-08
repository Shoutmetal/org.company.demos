
using org.company.order.query.domain.repository;
using org.company.order.query.repository.generic;
using org.company.order.query.repository.context;
using org.company.order.query.domain;

namespace org.company.order.query.repository
{
    public class InventoryRepository : QueryRepository<Inventory>, IInventoryRepository
    {
        public InventoryRepository(QueryDbContext context) : base(context) { }

      
    }
}
