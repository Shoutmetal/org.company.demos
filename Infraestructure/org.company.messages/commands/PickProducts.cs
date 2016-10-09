using System;
using org.company.messaging;

namespace org.company.messages.commands
{
    public class PickProducts : ICommand
    {
        public Guid Id => Guid.NewGuid();

        public int ProductId { get; set; }
        public int Quantity { get; set; }
    }
}
