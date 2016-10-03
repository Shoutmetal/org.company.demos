using org.company.order.domain;
using org.company.order.domain.generic;
using System;
using System.Collections.Generic;

namespace org.company.order.contract.query
{
    public interface IOrderRepository : IQueryRepository<Order>
    {
        IList<Order> GetOrderByCustomerId(Guid customerId);
    }
}
