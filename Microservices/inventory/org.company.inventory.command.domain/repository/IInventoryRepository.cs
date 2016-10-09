using org.company.inventory.command.domain;
using org.company.inventory.command.domain.generic;


namespace org.company.inventory.command.domain
{
    public interface IInventoryRepository : ICommandRepository<Inventory>
    {
        void AdjustStock(int productId, int quantity);
    }
}
