using System;
using org.company.messaging;

namespace org.company.order.messages
{
    public class PickProducts : ICommand
    {
        public Guid Id => Guid.NewGuid();

        public int ProductId { get; set; }
        public int Quantity { get; set; }
    }
}
