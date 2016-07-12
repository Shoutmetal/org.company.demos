using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;

namespace org.company.order.entities
{
    public class Order : Aggregate
    {
        private static Random _random = new Random();
        private static int _orderNumberLength = 8;

        public Order()
        {
            this.OrderProduct = new HashSet<OrderProduct>();
        }

        public Order(int clientId)
        {
            this.OrderProduct = new HashSet<OrderProduct>();
            this.ClientId = clientId;
        }

        [Key]
        public int OrderId { get; set; }
        public int ClientId { get; set; }
        public string Number { get; private set; } = RandomString();
        public DateTime OrderDate { get; private set; } = DateTime.Now;
        public bool IsActive { get; private set; } = true;
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

        
        private static string RandomString()
        {
            const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            return new string(Enumerable.Repeat(chars, _orderNumberLength)
              .Select(s => s[_random.Next(s.Length)]).ToArray());
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
