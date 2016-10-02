using Microsoft.Extensions.DependencyInjection;
using RawRabbit;
using RawRabbit.Configuration;
using RawRabbit.vNext;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

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
            _bus.PublishAsync(eventMessage, eventMessage.Id, null);
        }

        public void Send(ICommand commandMessage)
        {
            _bus.PublishAsync(commandMessage, commandMessage.Id);
        }
    }
}
