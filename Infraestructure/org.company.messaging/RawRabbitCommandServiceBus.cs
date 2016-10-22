using RawRabbit;
using RawRabbit.Common;
using RawRabbit.Extensions.MessageSequence;
using System;
using System.Threading.Tasks;
using System.Linq;

namespace org.company.messaging
{
    public class RawRabbitCommandServiceBus : ICommandServiceBus
    {
        protected IBusClient _bus { get; set; }

        public RawRabbitCommandServiceBus(IBusClient bus)
        {
            _bus = bus;
        }

        public void Dispose()
        {
            _bus.ShutdownAsync(TimeSpan.FromSeconds(10));
        }

        public Task PublishAsync<T>(T commandMessage) where T : Event
        {
            _bus.PublishAsync(commandMessage);

            return Task.CompletedTask;
        }

        public Task SubscribeAsync<T>(Func<T, Task> fn) where T : Event
        {
            _bus.SubscribeAsync<T>(async (msg, context) => await fn(msg),
                cfg => cfg.WithQueue(q => q.WithArgument(QueueArgument.QueueMode, "lazy"))
                .WithPrefetchCount(1)
           );

            return Task.CompletedTask;
        }

        public Task SendAsync<T>(T commandMessage) where T : Command
        {
            _bus.PublishAsync(commandMessage);

            return Task.CompletedTask;
        }

        public Task RecieveAsync<T>(Func<T, Task> fn) where T : Command
        {
            _bus.SubscribeAsync<T>(async (msg, context) => await fn(msg),
               cfg => cfg.WithQueue(q => q.WithArgument(QueueArgument.QueueMode, "lazy"))
               .WithPrefetchCount(1));

            return Task.CompletedTask;
        }
    }
}
