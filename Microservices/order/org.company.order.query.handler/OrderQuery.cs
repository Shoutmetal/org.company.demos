using System;
using System.Collections.Generic;
using org.company.order.query.domain;
using org.company.order.query.domain.repository;

namespace org.company.order.query.handler
{
    public class OrderQuery : IOrderQuery
    {

        private readonly IOrderRepository _orderRepository;


        public OrderQuery(
            IOrderRepository orderRepository)
        {
            _orderRepository = orderRepository;    

        }

        public IEnumerable<Order> GetOrdersByCustomerId(Guid customerId)
        {
            return _orderRepository.GetOrderByCustomerId(customerId);
        }

        public Order GetOrderById(int id)
        {
            return _orderRepository.GetSingle(o => o.OrderId == id);
        }

    }
}
