using org.company.order.domain.contracts.repository;
using org.company.order.entities;
using org.company.order.repository.generic;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace org.company.order.repository
{
    public class InventoryRepository : GenericRepository<Inventory>, IInventoryRepository
    {
        public InventoryRepository(DbContext context) : base(context) { }

    }
}
