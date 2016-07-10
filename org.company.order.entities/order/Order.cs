using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace org.company.order.entities
{
    public class Order : Aggregate
    {
        public Order()
        {
            this.OrderProduct = new HashSet<OrderProduct>();
        }

        public Order(string number,int clientId)
        {
            if (number == null)
                throw new ArgumentNullException("number");

            this.OrderProduct = new HashSet<OrderProduct>();
            this.Number = number;
            this.ClientId = clientId;
        }

        [Key]
        public int OrderId { get; set; }
        public int ClientId { get; set; }
        public string Number { get; set; }
        public DateTime OrderDate { get; set; } = DateTime.Now;
        public bool IsActive { get; set; } = true;
        public virtual Client Client { get; set; }
        public virtual ICollection<OrderProduct> OrderProduct { get; set; }


        public void AddProductAndQuantity(Product product, int quantity) {

            if (product == null)
                throw new ArgumentNullException("product");

            if(quantity <= 0)
                throw new QuantityLessThanZero();

            OrderProduct op = new OrderProduct(product.ProductId, quantity);
            OrderProduct.Add(op);
        }

    }

    public class QuantityLessThanZero : Exception
    {
        public override string Message
        {
            get
            {
                return "Quantity should not be less than zero.";
            }
        }
    }
}
