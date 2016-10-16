using org.company.messages.commands;
using org.company.messaging;
using System;
using System.Collections.Generic;

namespace org.company.messages.events
{
    public class PlacedOrder : Event
    {
        public PlacedOrder(List<PickProducts> products) {
            Products = products;
        }

        public int OrderId { get; set; }
        public Guid CustomerId { get; set; }
        public List<PickProducts> Products { get; private set; }
        public string OrderNumber { get; set; }

    }
}
