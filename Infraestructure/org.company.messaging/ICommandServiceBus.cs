using System;
using System.Threading.Tasks;

namespace org.company.messaging
{
    public interface ICommandServiceBus : IDisposable
    {
        Task SendAsync<T>(T commandMessage) where T : Command;
        Task RecieveAsync<T>(Func<T, Task> fn) where T : Command;

        Task PublishAsync<T>(T commandMessage) where T : Event;
        Task SubscribeAsync<T>(Func<T, Task> fn) where T : Event;
    }
}
