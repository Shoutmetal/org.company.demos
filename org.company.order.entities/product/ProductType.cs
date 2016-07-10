using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace org.company.order.entities
{
    public partial class ProductType
    {
        public ProductType()
        {
            this.Product = new HashSet<Product>();
        }

        [Key]
        public int ProductTypeId { get; set; }
        public string Name { get; set; }
        public bool IsActive { get; set; }

        public virtual ICollection<Product> Product { get; set; }
    }
}
