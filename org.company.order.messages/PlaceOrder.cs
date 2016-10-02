using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace org.company.order.messages
{
    public class PlaceOrder : ICommand
    {
        public int OrderId { get; set; }
        public Guid CustomerId { get; set; }
        public List<PickProducts> Products { get; set; }
        public string OrderNumber { get; set; }
    }
}
