using org.company.order.contract.command;
using org.company.order.contract.generic;
using org.company.order.domain;
using org.company.order.handler;
using org.company.order.messages;
using RawRabbit;
using RawRabbit.Common;
using System.Threading.Tasks;
using static org.company.order.domain.Order;

namespace org.company.order.command
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

        private readonly IBusClient _bus;

        public OrderHandler(
            IBusClient bus,
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
            _bus.SubscribeAsync<PlaceOrder>(async (msg, context) => await Handle(msg),
                cfg => cfg.WithQueue(q => q.WithArgument(QueueArgument.QueueMode, "lazy"))
                .WithPrefetchCount(1));
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
