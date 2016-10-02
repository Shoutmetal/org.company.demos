using org.company.order.domain;
using System;
using System.Collections.Generic;

namespace org.company.order.query
{
    public interface IOrderQuery
    {
        IEnumerable<Order> GetOrdersByCustomerId(Guid customerId);

        Order GetOrderById(int id);

        IEnumerable<Product> GetProducts();
    }
}
