using org.company.inventory.command.domain;
using org.company.inventory.command.domain.generic;
using System.Collections.Generic;

namespace org.company.inventory.command.domain
{
    public interface IInventoryRepository : ICommandRepository<Inventory>
    {
        IList<Inventory> GetInventoryByProduct(int productId);
    }
}
