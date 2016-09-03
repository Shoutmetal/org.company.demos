using org.company.order.entities;
using org.company.order.service.model;
using System;
using System.Collections.Generic;

namespace org.company.order.application.contracts
{
    public interface IOrderService
    {
        void AddOrder(OrderDTO order);

        IEnumerable<Order> GetOrdersByCustomerId(Guid customerId);
        Order GetOrderById(int orderId);

        IEnumerable<Product> GetProducts();
    }
}
