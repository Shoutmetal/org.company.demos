using org.company.order.contract.query;
using org.company.order.domain;
using org.company.order.repository.context;
using org.company.repository.generic;
using System;
using System.Linq;
using System.Collections.Generic;
using System.Linq.Expressions;
using org.company.order.repository.generic;

namespace org.company.repository.query
{
    public class InventoryRepository : QueryRepository<Inventory>, IInventoryRepository
    {
        public InventoryRepository(QueryDbContext context) : base(context) { }

      
    }
}
