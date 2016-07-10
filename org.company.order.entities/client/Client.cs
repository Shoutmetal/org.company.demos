using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace org.company.order.entities
{
    public partial class Client : Aggregate
    {
        public Client()
        {
            this.Order = new HashSet<Order>();
        }

        [Key]
        public int ClientId { get; set; }
        public string Name { get; set; }
        public string MiddleName { get; set; }
        public string LastName { get; set; }
        public bool? IsActive { get; set; }

        public virtual ICollection<Order> Order { get; set; }
    }
}
