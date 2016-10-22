using org.company.order.query.domain.repository;
using org.company.messaging;
using org.company.messages.queries;
using System.Collections;

namespace org.company.order.query.handler
{
    public class OrderQueryHandler : 
        IQueryStartHandler,
        IQueryHandler<GetOrderByCustomerId>
    {


        private readonly IOrderRepository _orderRepository;
        private readonly IQueryServiceBus _bus;


        public OrderQueryHandler(
            IOrderRepository orderRepository,
            IQueryServiceBus bus)
        {
            _orderRepository = orderRepository;
            _bus = bus;

        }

        public void start()
        {
            _bus.RespondAsync<GetOrderByCustomerId>((msg) => Handle(msg));
            _bus.RespondSingleAsync<GetOrderById>((msg) => Handle(msg));

        }

        private object Handle(GetOrderById msg)
        {
            return _orderRepository.GetSingle(o => o.OrderId == msg.OrderId);
        }

        public IEnumerable Handle(GetOrderByCustomerId msg)
        {
            return _orderRepository.GetOrderByCustomerId(msg.CustomerId);
        }

       
    }
}
