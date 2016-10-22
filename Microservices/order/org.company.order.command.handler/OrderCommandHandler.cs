using System.Threading.Tasks;
using org.company.order.command.domain;
using org.company.order.command.domain.generic;
using static org.company.order.command.domain.Order;
using org.company.messaging;
using org.company.messages.commands;

namespace org.company.order.command.handler
{
    public class OrderCommandHandler :
        ICommandStartHandler,
        ICommandHandle<PlaceOrder>
    {

        private readonly IOrderRepository _orderRepository;
        private readonly IOrderDetailRepository _orderDetailRepository;
        private readonly IUnitOfWork _uof;

        private readonly ICommandServiceBus _bus;

        public OrderCommandHandler(
            ICommandServiceBus bus,
            IOrderRepository orderRepository,
            IOrderDetailRepository orderDetailRepository,
            IUnitOfWork uof
            )
        {
            _bus = bus;
            _orderRepository = orderRepository;
            _orderDetailRepository = orderDetailRepository;
            _uof = uof;
        }

        public void start()
        {
            _bus.RecieveAsync<PlaceOrder>(async (msg) => await Handle(msg));
        }


        public Task Handle(PlaceOrder placeOrder)
        {
            var adjustStockResult = _bus.SendAsync(new AdjustStock(placeOrder.Products));

            Order order = new Order(placeOrder.CustomerId, OrderStatus.Created);
            _orderRepository.Add(order);

            placeOrder.Products.ForEach(prod => this.AddOrderDetail(order, prod.ProductId, prod.Quantity));

            _uof.Commit();

            return Task.CompletedTask;

        }

        internal void AddOrderDetail(Order order, int productId, int quantity) =>
            _orderDetailRepository.Add(new OrderDetail(order, productId, quantity));

    }
}
