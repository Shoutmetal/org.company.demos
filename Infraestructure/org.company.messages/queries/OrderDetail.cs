
using org.company.messaging;

namespace org.company.messages.queries
{
    public class OrderDetail : Query
    {
        public int OrderId { get; set; }
      
        public int ProductId { get; set; }
        public int Quantity { get; set; }

        public Order Order { get; set; }

    }
}
