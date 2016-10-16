using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace org.company.messaging
{
    public interface ICanHandle<T> where T : Message
    {
        Task Handle(T message);
    }
}
