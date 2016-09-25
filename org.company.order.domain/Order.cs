using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace org.company.order.domain
{
    public class Order : Aggregate
    {
        public enum OrderStatus
        {
            Created = 1,
            Completed = 2
        }

        public Order()
        {
            this.OrderDetail = new HashSet<OrderDetail>();
        }

        public Order(Guid customerId, OrderStatus statusId)
        {
            this.OrderDetail = new HashSet<OrderDetail>();
            this.CustomerId = customerId;
            this.Number = GenerateOrderNumber();
            this.StatusId = (int)statusId;
            this.OrderDate = DateTime.Now;
            this.Active = true;
        }

        private string GenerateOrderNumber()
        {
            return (CustomerId.ToString().Substring(0, 11) + DateTime.Now.ToString("yyMMddHHmmssff")).ToUpper();
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
