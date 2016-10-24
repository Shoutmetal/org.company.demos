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

        public async Task<IEnumerable<T>> RequestAsync<T>(T queryRequest) where T : Query
        {
            return await _bus.RequestAsync<T, IEnumerable<T>>(queryRequest);
        }

        public async Task<IEnumerable<T>> RequestAsync<T>() where T : Query
        {
            return await _bus.RequestAsync<T, IEnumerable<T>>();
        }

        public async Task<T> RequestSingleAsync<T>(T queryRequest) where T : Query
        {
            return await _bus.RequestAsync<T, T>(queryRequest);
        }

        public Task RespondAsync<T>(Func<T, IEnumerable<T>> fn) where T : Query
        {
            _bus.RespondAsync<T, IEnumerable<T>>(async (msg, context) => await Task.FromResult(fn(msg)),
                cfg => cfg.WithQueue(q => q.WithArgument(QueueArgument.QueueMode, "lazy"))
                .WithPrefetchCount(1)
           );

            return Task.CompletedTask;
        }

        public Task RespondSingleAsync<T>(Func<T, T> fn) where T : Query
        {
            _bus.RespondAsync<T, T>(async (msg, context) => await Task.FromResult(fn(msg)),
                cfg => cfg.WithQueue(q => q.WithArgument(QueueArgument.QueueMode, "lazy"))
                .WithPrefetchCount(1)
           );

            return Task.CompletedTask;
        }

        public Task RespondSingleAsync<T>(Func<T> fn) where T : Query
        {
            _bus.RespondAsync<T, T>(async (msg, context) => await Task.FromResult(fn()),
                cfg => cfg.WithQueue(q => q.WithArgument(QueueArgument.QueueMode, "lazy"))
                .WithPrefetchCount(1)
           );

            return Task.CompletedTask;
        }

      
    }
}
