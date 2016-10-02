using org.company.order.messages;
using System.Threading.Tasks;
using RawRabbit;
using RawRabbit.Common;
using org.company.order.contract.repository;
using org.company.order.contract.generic;
using org.company.order.domain;
using static org.company.order.domain.Order;

namespace org.company.order.command
{
    public interface IOrderHandler
    {
        void start();
    }

    public class OrderHandler :
        IOrderHandler,
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

        internal void AddOrderDetail(Order order, int productId, int quantity)
        {
            OrderDetail orderDetail = new OrderDetail(order, productId, quantity);
            _orderDetailRepository.Add(orderDetail);
        }

        internal void AdjustStock(int productId, int quantity)
        {
            Product product = _productRepository.GetSingle(p => p.ProductId == productId, i => i.Inventories);
            Inventory inventory = product.AdjustStock(quantity);
            _inventoryRepository.Update(inventory);
        }


    }
}
