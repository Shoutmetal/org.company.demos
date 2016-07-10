
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace org.company.order.service.dtos
{
    public class OrderDTO
    {
        public int OrderId { get; set; }
        public List<ProductDTO> Products { get; set; }
        public string Number { get; set; }
        public int ClientId { get; set; }

    }

    public class ProductDTO {
        public int ProductId { get; set; }
        public int Quantity { get; set; }
    }
}