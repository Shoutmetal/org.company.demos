using System;

namespace org.company.messaging
{
    public class Command : Message
    {
        public string Name { get; protected set; }
    }
}