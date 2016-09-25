using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;

namespace org.company.order.domain
{
    public partial class Product : Aggregate
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

        public Inventory AdjustStock(int quantity) {
            var inventory = Inventories.Where(i => i.Stock >= quantity).FirstOrDefault();

            if (inventory == null) throw new EmptyStockException();

            inventory.Stock = inventory.Stock - quantity;

            return inventory;
        }

        public class EmptyStockException : Exception
        {
            public override string Message
            {
                get
                {
                    return "Stock Exceeded";
                }
            }
        }
    }

}
