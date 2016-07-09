using org.company.order.domain.generic;
using org.company.order.entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace org.company.order.domain.contracts.repository
{
    public interface IOrderRepository : IGenericRepository<Order>
    {
    }
}
