using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace org.company.order.entities
{
    public class OrderDetail : Aggregate
    {
        [Key, Column(Order = 0)]
        public int OrderId { get; set; }
        [Key, Column(Order = 1)]
        public int ProductId { get; set; }

        public int CustomerId { get; set; }
        public int Quantity { get; set; }
        public DateTime OrderDate { get; set; }

        public Order Order { get; set; }
        public Product Product { get; set; }
        public Customer Customer { get; set; }


    }
}
