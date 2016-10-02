using System;

namespace org.company.messaging
{
    public interface IServiceBus : IDisposable
    {
        void Publish(IEvent eventMessage);
        void Send(ICommand commandMessage);
    }
}
