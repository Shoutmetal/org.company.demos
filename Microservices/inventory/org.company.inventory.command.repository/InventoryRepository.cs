using org.company.inventory.command.repository.generic;
using System;
using System.Linq;
using org.company.inventory.command.domain;
using org.company.inventory.command.repository.context;

namespace org.company.inventory.command.repository
{
    public class InventoryRepository : CommandRepository<Inventory>, IInventoryRepository
    {
        public InventoryRepository(CommandDbContext context) : base(context) { }

        public void AdjustStock(int productId, int quantity) {

            Inventory inventory = dbSet.Where(x => x.ProductId == productId && x.Stock > 0).FirstOrDefault();

            if (inventory == null) throw new Exception("Stock Exceeded");

            inventory.Stock = inventory.Stock - quantity;

            dbSet.Update(inventory);
        }

    }
}
