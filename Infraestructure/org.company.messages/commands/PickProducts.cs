using System;
using org.company.messaging;

namespace org.company.messages.commands
{
    public class PickProducts : Command
    {
        public int ProductId { get; set; }
        public int Quantity { get; set; }
    }
}
