using org.company.order.query.domain;
using System;
using System.Collections.Generic;

namespace org.company.order.queryHandler
{
    public interface IOrderQuery
    {
        IEnumerable<Order> GetOrdersByCustomerId(Guid customerId);

        Order GetOrderById(int id);

        IEnumerable<Product> GetProducts();
    }
}
