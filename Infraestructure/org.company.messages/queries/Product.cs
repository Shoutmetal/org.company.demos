using org.company.messaging;

namespace org.company.messages.queries
{
    public class Product : Query
    {
        public int ProductId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string ImageUrl { get; set; }
        public decimal Price { get; set; }
        public int ProductTypeId { get; set; }
        public ProductType ProductType { get; set; }

        
    }
}
