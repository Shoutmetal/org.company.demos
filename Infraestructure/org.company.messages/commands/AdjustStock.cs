using org.company.messages.commands;
using org.company.messaging;
using System;
using System.Collections.Generic;

namespace org.company.messages.commands
{
    public class AdjustStock : Command
    {
        public AdjustStock(List<PickProducts> products)
        {
            Products = products;
        }

        public int OrderId { get; private set; }
        public Guid CustomerId { get; private set; }
        public List<PickProducts> Products { get; private set; }
        public string OrderNumber { get; private set; }
    }
}
