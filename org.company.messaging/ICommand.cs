using System;

namespace org.company.messaging
{
    public interface ICommand
    {
        Guid Id { get; set; }
    }
}