using org.company.messaging;
using System;
using System.Collections.Generic;

namespace org.company.messages.queries
{
    public class Order : Query
    {
        public int OrderId { get; set; }
        public Guid CustomerId { get; set; }
        public int StatusId { get; set; }
        public string Number { get; set; }

        public DateTime? OrderDate { get; set; }
        public bool Active { get; set; }
        public virtual ICollection<OrderDetail> OrderDetail { get; set; }
        
        public Status Status { get; set; }

    }

   
}
