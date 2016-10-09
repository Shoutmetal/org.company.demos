using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace org.company.inventory.command.domain
{
    public class Warehouse
    {
        public int WarehouseId { get; set; }
        public string Name { get; set; }
        public bool Active { get; set; }
    }
}
