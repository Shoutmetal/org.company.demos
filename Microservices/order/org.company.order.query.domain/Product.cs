using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace org.company.order.query.domain
{
    public partial class Product
    {

        public Product() {
            this.Inventories = new HashSet<Inventory>();
        }

        [Key]
        public int ProductId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string ImageUrl { get; set; }
        public decimal Price { get; set; }
        public int ProductTypeId { get; set; }
        public ProductType ProductType { get; set; }

        public ICollection<Inventory> Inventories { get; set; }

       
    }

}
