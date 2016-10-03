using org.company.order.contract.generic;
using org.company.order.domain;

namespace org.company.order.contract.command
{
    public interface IInventoryRepository : ICommandRepository<Inventory>
    {
        void AdjustStock(int productId, int quantity);
    }
}
