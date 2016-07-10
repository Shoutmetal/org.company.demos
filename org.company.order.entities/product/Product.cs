using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace org.company.order.entities
{
    public partial class Product : Aggregate
    {
        public Product()
        {
            this.OrderProduct = new HashSet<OrderProduct>();
        }

        [Key]
        public int ProductId { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }
        public int Stock { get; set; }
        public int ProductTypeId { get; set; }

        public virtual ICollection<OrderProduct> OrderProduct { get; set; }
        public virtual ProductType ProductType { get; set; }

        public void ReduceStock(int quantity)
        {
            if (this.Stock < quantity)
                throw new InsufucientStock();

            this.Stock -= quantity;
        }
    }

    public class InsufucientStock : Exception {

        public override string Message
        {
            get
            {
                return "The stock is insuficient.";
            }
        }
    }
}
