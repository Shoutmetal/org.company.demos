using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace org.company.order.entities
{
    public class Order : Aggregate
    {
        public Order()
        {
            this.OrderDetail = new HashSet<OrderDetail>();
        }

        public Order(Guid customerId, int statusId)
        {
            this.OrderDetail = new HashSet<OrderDetail>();
            this.CustomerId = customerId;
            this.Number = GenerateOrderNumber();
            this.StatusId = statusId;
            this.OrderDate = DateTime.Now;
            this.Active = true;
        }

        private string GenerateOrderNumber()
        {
            return (CustomerId.ToString().Substring(0, 5) + DateTime.Now.ToString("yyMMddHHmmssff") +
                    CustomerId.ToString().Substring(CustomerId.ToString().Length - 6, 6)).ToUpper();
        }

        [Key]
        public int OrderId { get; set; }
        public Guid CustomerId { get; set; }
        public int StatusId { get; set; }
        public string Number { get; private set; }

        public DateTime? OrderDate { get; set; }
        public bool Active { get; set; }
        public virtual ICollection<OrderDetail> OrderDetail { get; set; }
        
        public Status Status { get; set; }

    }

   
}
