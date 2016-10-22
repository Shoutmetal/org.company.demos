using org.company.messaging;

namespace org.company.messages.queries
{
    public class GetOrderById : Query
    {
        public int OrderId { get; set; }
    }
}
