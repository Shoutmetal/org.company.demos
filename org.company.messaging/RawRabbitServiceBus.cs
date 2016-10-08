using RawRabbit;
using RawRabbit.Common;
using System;
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

        public void PublishAsync<T>(T commandMessage) where T : ICommand
        {
            _bus.PublishAsync(commandMessage);
        }

        public void SubscribeAsync<T>(Func<T,Task> fn) where T : ICommand
        {
            _bus.SubscribeAsync<T>(async (msg, context) => await fn(msg),
                cfg => cfg.WithQueue(q => q.WithArgument(QueueArgument.QueueMode, "lazy"))
                .WithPrefetchCount(1));
        }
    }
}
