using RawRabbit;
using RawRabbit.Common;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace org.company.messaging
{
    public class RawRabbitQueryServiceBus : IQueryServiceBus
    {

        protected IBusClient _bus { get; set; }

        public RawRabbitQueryServiceBus(IBusClient bus)
        {
            _bus = bus;
        }

        public async Task<IEnumerable> RequestAsync<T>(T queryRequest) where T : Query
        {
            return await _bus.RequestAsync<T, IEnumerable>(queryRequest);
        }

        public async Task<IEnumerable> RequestAsync<T>() where T : Query
        {
            return await _bus.RequestAsync<T, IEnumerable>();
        }

        public async Task<Object> RequestSingleAsync<T>(T queryRequest) where T : Query
        {
            return await _bus.RequestAsync<T, Object>(queryRequest);
        }

        public Task RespondAsync<T>(Func<T, IEnumerable> fn) where T : Query
        {
            _bus.RespondAsync<T, IEnumerable>(async (msg, context) => await Task.FromResult(fn(msg)),
                cfg => cfg.WithQueue(q => q.WithArgument(QueueArgument.QueueMode, "lazy"))
                .WithPrefetchCount(1)
           );

            return Task.CompletedTask;
        }

        public Task RespondSingleAsync<T>(Func<T, Object> fn) where T : Query
        {
            _bus.RespondAsync<T, Object>(async (msg, context) => await Task.FromResult(fn(msg)),
                cfg => cfg.WithQueue(q => q.WithArgument(QueueArgument.QueueMode, "lazy"))
                .WithPrefetchCount(1)
           );

            return Task.CompletedTask;
        }

        public Task RespondSingleAsync<T>(Func<Object> fn) where T : Query
        {
            _bus.RespondAsync<T, Object>(async (msg, context) => await Task.FromResult(fn()),
                cfg => cfg.WithQueue(q => q.WithArgument(QueueArgument.QueueMode, "lazy"))
                .WithPrefetchCount(1)
           );

            return Task.CompletedTask;
        }
    }
}
