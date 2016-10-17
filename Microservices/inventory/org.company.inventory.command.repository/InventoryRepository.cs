using org.company.inventory.command.repository.generic;
using System;
using System.Linq;
using org.company.inventory.command.domain;
using org.company.inventory.command.repository.context;
using System.Collections.Generic;

namespace org.company.inventory.command.repository
{
    public class InventoryRepository : CommandRepository<Inventory>, IInventoryRepository
    {
        public InventoryRepository(CommandDbContext context) : base(context) { }


        public IList<Inventory> GetInventoryByProduct(int productId)
        {
            return dbSet.Where(p => p.ProductId == productId).ToList();

        }

    }
}
