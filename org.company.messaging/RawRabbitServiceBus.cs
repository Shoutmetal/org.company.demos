using RawRabbit;
using System;

namespace org.company.messaging
{
    public class RawRabbitServiceBus : IServiceBus
    {
        protected IBusClient _bus { get; set; }

        public RawRabbitServiceBus(IBusClient bus)
        {
            _bus = bus;
        }

        public void Dispose()
        {
            _bus.ShutdownAsync(TimeSpan.FromSeconds(10));
        }

        public void Publish(IEvent eventMessage)
        {
            _bus.PublishAsync(eventMessage);
        }

        public void Send(ICommand commandMessage)
        {
            _bus.PublishAsync(commandMessage);
        }
    }
}
