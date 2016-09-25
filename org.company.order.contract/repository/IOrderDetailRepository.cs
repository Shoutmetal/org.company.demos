using org.company.order.contract.generic;
using org.company.order.domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace org.company.order.contract.repository
{
    public interface IOrderDetailRepository : IGenericRepository<OrderDetail>
    {
    }
}
