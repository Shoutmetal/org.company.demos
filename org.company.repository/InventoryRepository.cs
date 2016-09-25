using org.company.order.contract.repository;
using org.company.order.domain;
using org.company.repository.generic;

namespace org.company.repository
{
    public class InventoryRepository : GenericRepository<Inventory>, IInventoryRepository
    {
        public InventoryRepository(DemoDbContext context) : base(context) { }

    }
}
