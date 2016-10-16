using org.company.messages.commands;
using org.company.messaging;
using org.company.order.messages.commands;
using System.Threading.Tasks;

namespace org.company.order.handler
{
    public class OrderSaga : 
        ICommandHandle<AdjustStock>,
        ICommandHandle<PlaceOrder>
    {

        private readonly IServiceBus _bus;

        public OrderSaga(IServiceBus bus)
        {
            _bus = bus;
        }

        public Task Handle(PlaceOrder message)
        {
            _bus.SendAsync(message);

            return Task.CompletedTask;
        }

        public Task Handle(AdjustStock message)
        {
            _bus.SendAsync(message);

            return Task.CompletedTask;
        }
    }
}
