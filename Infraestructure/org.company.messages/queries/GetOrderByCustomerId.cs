using org.company.messaging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace org.company.messages.queries
{
    public class GetOrderByCustomerId : Query
    {
        public Guid CustomerId { get; set; }
    }
}
