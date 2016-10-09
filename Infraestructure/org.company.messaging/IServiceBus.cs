using System;
using System.Threading.Tasks;

namespace org.company.messaging
{
    public interface IServiceBus : IDisposable
    {
        void PublishAsync<T>(T commandMessage) where T : ICommand;
        void SubscribeAsync<T>(Func<T, Task> fn) where T : ICommand;
    }
}
