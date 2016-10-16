using System;

namespace org.company.messaging
{
    public class Event : Message
    {
        public string Name { get; protected set; }
    }
}