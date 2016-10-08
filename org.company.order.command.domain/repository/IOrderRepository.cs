using org.company.order.command.domain.generic;
using System;
using System.Collections.Generic;

namespace org.company.order.command.domain
{
    public interface IOrderRepository : ICommandRepository<Order>
    {
        IList<Order> GetOrderByCustomerId(Guid customerId);
    }
}
