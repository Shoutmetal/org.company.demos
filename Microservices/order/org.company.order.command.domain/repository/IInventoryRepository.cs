using org.company.order.command.domain.generic;


namespace org.company.order.command.domain
{
    public interface IInventoryRepository : ICommandRepository<Inventory>
    {
        void AdjustStock(int productId, int quantity);
    }
}
