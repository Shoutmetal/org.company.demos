
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace org.company.order.service.model
{
    public class OrderDTO
    {
        public int OrderId { get; set; }
        public int CustomerId { get; set; }
        public List<ProductDTO> Products { get; set; }
        public string OrderNumber { get; set; }
    }

    public class ProductDTO
    {
        public int ProductId { get; set; }
        public int Quantity { get; set; }
    }
}