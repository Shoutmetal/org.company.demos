using org.company.order.messages;
using System.Threading.Tasks;
using org.company.order.command.domain;
using org.company.order.command.domain.generic;
using static org.company.order.command.domain.Order;
using org.company.messaging;

namespace org.company.order.command.handler
{

    public class OrderHandler :
        IStartHandler,
        ICommandHandle<PlaceOrder>
    {

        private readonly IOrderRepository _orderRepository;
        private readonly IOrderDetailRepository _orderDetailRepository;
        private readonly IProductRepository _productRepository;
        private readonly IInventoryRepository _inventoryRepository;
        private readonly IUnitOfWork _uof;

        private readonly IServiceBus _bus;

        public OrderHandler(
            IServiceBus bus,
            IOrderRepository orderRepository,
            IOrderDetailRepository orderDetailRepository,
            IProductRepository productRepository,
            IInventoryRepository inventoryRepository,
            IUnitOfWork uof
            )
        {
            _bus = bus;
            _orderRepository = orderRepository;
            _orderDetailRepository = orderDetailRepository;
            _productRepository = productRepository;
            _inventoryRepository = inventoryRepository;
            _uof = uof;
        }


        public void start()
        {
            _bus.SubscribeAsync<PlaceOrder>(async (msg) => await Handle(msg));
        }


        public Task Handle(PlaceOrder placeOrder)
        {
            Order order = new Order(placeOrder.CustomerId, OrderStatus.Created);
            _orderRepository.Add(order);

            placeOrder.Products.ForEach(prod =>
            {
                this.AddOrderDetail(order, prod.ProductId, prod.Quantity);
                this.AdjustStock(prod.ProductId, prod.Quantity);
            });

            _uof.Commit();

            return Task.CompletedTask;
        }

        internal void AddOrderDetail(Order order, int productId, int quantity) =>
            _orderDetailRepository.Add(new OrderDetail(order, productId, quantity));


        internal void AdjustStock(int productId, int quantity) =>
            _inventoryRepository.AdjustStock(productId, quantity);



    }
}
