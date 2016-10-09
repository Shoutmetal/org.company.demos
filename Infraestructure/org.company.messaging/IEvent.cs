using System;

namespace org.company.messaging
{
    public interface IEvent
    {
        Guid Id { get; set; }
    }
}