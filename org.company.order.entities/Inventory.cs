using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace org.company.order.entities
{
    public class Inventory : Aggregate
    {
        [Key, Column(Order = 0)]
        public int WarehouseId { get; set; }
        [Key, Column(Order = 1)]
        public int ProductId { get; set; }
        public int Stock { get; set; }
        public Warehouse Warehouse { get; set; }
        public Product Product { get; set; }
    }
}
