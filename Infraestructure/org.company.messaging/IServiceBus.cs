using System;
using System.Threading.Tasks;

namespace org.company.messaging
{
    public interface IServiceBus : IDisposable
    {
        void SendAsync<T>(T commandMessage) where T : Command;
        void RecieveAsync<T>(Func<T, Task> fn) where T : Command;

        void PublishAsync<T>(T commandMessage) where T : Event;
        void SubscribeAsync<T>(Func<T, Task> fn) where T : Event;
    }
}
