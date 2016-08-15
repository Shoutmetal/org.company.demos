using Microsoft.EntityFrameworkCore;
using org.company.order.domain.contracts.repository;
using org.company.order.entities;
using org.company.order.repository.generic;

namespace org.company.order.repository
{
    public class InventoryRepository : GenericRepository<Inventory>, IInventoryRepository
    {
        public InventoryRepository(DemoDbContext context) : base(context) { }

    }
}
