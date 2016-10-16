using org.company.messaging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace org.company.messages.commands
{
    public class PlaceOrder : Command
    {
        public int OrderId { get; set; }
        public Guid CustomerId { get; set; }
        public List<PickProducts> Products { get; set; }
        public string OrderNumber { get; set; }
    }
}
