using System;
using System.Threading.Tasks;

namespace org.company.messaging
{
    public interface IServiceBus : IDisposable
    {
        void SendAsync<T>(T commandMessage) where T : ICommand;
        void PublishAsync<T>(T commandMessage) where T : IEvent;
        void SubscribeAsync<T>(Func<T, Task> fn) where T : IEvent;
        void RecieveAsync<T>(Func<T, Task> fn) where T : ICommand;
    }
}
