using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace org.company.order.entities
{
    public class OrderProduct
    {
        public OrderProduct() { }

        public OrderProduct(int productId, int quantity)
        {
            this.ProductId = productId;
            this.Quantity = quantity;
        }

        [Column(Order = 0), Key]
        public int OrderProductId { get; set; }

        [Column(Order = 1), ForeignKey("Order")]
        public int OrderId { get; set; }

        [Column(Order = 2), ForeignKey("Product")]
        public int ProductId { get; set; }
        public int Quantity { get; set; }

        public virtual Order Order { get; set; }
        public virtual Product Product { get; set; }

        
    }
}
