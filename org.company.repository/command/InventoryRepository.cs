using org.company.order.contract.command;
using org.company.order.domain;
using org.company.repository.generic;
using System;
using System.Linq;

namespace org.company.repository.command
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
