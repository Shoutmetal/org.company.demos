using System.Threading.Tasks;
using org.company.messaging;
using org.company.inventory.command.domain;
using org.company.inventory.command.domain.generic;
using org.company.messages.events;
using System.Linq;
using org.company.messages.commands;

namespace org.company.inventory.command.handler
{

    public class InventoryHandler :
        IStartHandler,
        ICommandHandle<AdjustStock>
    {

        private readonly IInventoryRepository _inventoryRepository;
        private readonly IUnitOfWork _uof;

        private readonly IServiceBus _bus;

        public InventoryHandler(
            IServiceBus bus,
            IInventoryRepository inventoryRepository,
            IUnitOfWork uof
            )
        {
            _bus = bus;
            _inventoryRepository = inventoryRepository;
            _uof = uof;
        }


        public void start()
        {
            _bus.RecieveAsync<AdjustStock>(async (msg) => await Handle(msg));
        }


        public Task Handle(AdjustStock adjustStock)
        {
            adjustStock.Products.ForEach(prod =>
            {
                var inventories = _inventoryRepository.GetInventoryByProduct(prod.ProductId);
                int totalStock = inventories.Sum(i => i.Stock);

                if (prod.Quantity > totalStock) _bus.PublishAsync(new NotEnoughStock());

                int quantity = prod.Quantity;

                inventories.ToList().ForEach(i =>
                {
                    int stock = i.Stock;

                    i.Stock = i.Stock >= quantity ? (i.Stock - quantity) : 0;

                    quantity = quantity > stock ? prod.Quantity - stock : 0;

                    _inventoryRepository.Update(i);
                });

            });

            _uof.Commit();

            return Task.CompletedTask;
        }




    }
}
