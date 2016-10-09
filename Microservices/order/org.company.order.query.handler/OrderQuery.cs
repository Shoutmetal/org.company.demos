using System;
using System.Collections.Generic;
using org.company.order.query.domain;
using org.company.order.query.domain.repository;

namespace org.company.order.query.handler
{
    public class OrderQuery : IOrderQuery
    {

        private readonly IOrderRepository _orderRepository;
        private readonly IProductRepository _productRepository;

        public OrderQuery(
            IOrderRepository orderRepository,
            IProductRepository productRepository)
        {
            _orderRepository = orderRepository;
            _productRepository = productRepository;            

        }

        public IEnumerable<Order> GetOrdersByCustomerId(Guid customerId)
        {
            return _orderRepository.GetOrderByCustomerId(customerId);
        }

        public Order GetOrderById(int id)
        {
            return _orderRepository.GetSingle(o => o.OrderId == id);
        }

        public IEnumerable<Product> GetProducts()
        {
            return _productRepository.GetAll(p => p.Inventories);
        }

    }
}
