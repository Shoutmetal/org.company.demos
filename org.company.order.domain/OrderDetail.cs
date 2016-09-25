
namespace org.company.order.domain
{
    public class OrderDetail : Aggregate
    {

        public OrderDetail(Order order, int productId, int quantity) {
            Order = order;
            ProductId = productId;
            Quantity = quantity;
        }
   
        public int OrderId { get; set; }
      
        public int ProductId { get; set; }
        public int Quantity { get; set; }

        public Order Order { get; set; }
        public Product Product { get; set; }
    }
}
