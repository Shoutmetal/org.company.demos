using org.company.messaging;

namespace org.company.messages.queries
{
    public class ProductType : Query
    {
        public int ProductTypeId { get; set; }
        public string Name { get; set; }
        public bool Active { get; set; }
    }
}
