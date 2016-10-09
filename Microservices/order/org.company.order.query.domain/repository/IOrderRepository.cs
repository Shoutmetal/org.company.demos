using org.company.order.query.domain.generic;
using System;
using System.Collections.Generic;

namespace org.company.order.query.domain.repository
{
    public interface IOrderRepository : IQueryRepository<Order>
    {
        IList<Order> GetOrderByCustomerId(Guid customerId);
    }
}
