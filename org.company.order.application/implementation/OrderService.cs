using org.company.order.application.contracts;
using org.company.order.entities;
using org.company.order.domain.generic;
using org.company.order.domain.contracts.repository;
using org.company.order.service.model;
using System;
using System.Collections.Generic;
using System.Linq;

namespace org.company.order.application.implementation
{
    public class OrderService : IOrderService
    {
        private readonly IOrderRepository _orderRepository;
        public readonly IOrderDetailRepository _orderDetailRepository;
        private readonly IProductRepository _productRepository;
        private readonly IInventoryRepository _inventoryRepository;
        private readonly IUnitOfWork _uof;

        public OrderService(
            IOrderRepository orderRepository,
            IOrderDetailRepository orderDetailRepository,
            IProductRepository productRepository,
            IInventoryRepository inventoryRepository,
            IUnitOfWork uof)
        {
            _orderRepository = orderRepository;
            _orderDetailRepository = orderDetailRepository;
            _productRepository = productRepository;
            _inventoryRepository = inventoryRepository;
            _uof = uof;
        }

        public void AddOrder(OrderDTO orderDTO)
        {
            //1) save the order
            Order order = new Order(orderDTO.OrderNumber, (int)OrderStatus.InProgress);

            //2) add details to the order
            orderDTO.Products.ForEach( prod =>
            {
                OrderDetail orderDetail = new OrderDetail()
                {
                    Order = order,
                    ProductId = prod.ProductId,
                    CustomerId = orderDTO.CustomerId,
                    Quantity = prod.Quantity,
                    OrderDate = DateTime.Now
                };

                _orderDetailRepository.Add(orderDetail);

                //3)Adjust the Stock
                Product product = _productRepository.GetSingle(p => p.ProductId == prod.ProductId);
                Inventory inventory = product.AdjustStock(prod.Quantity);
                _inventoryRepository.Update(inventory);

            });

            _uof.Commit();
        }

        public IEnumerable<Order> GetOrdersByCustomerId(int customerId)
        {
            return null;
        }

        public Order GetOrderById(int id)
        {
            return _orderRepository.GetSingle(o => o.OrderId == id);
        }

        public IEnumerable<Product> GetProducts()
        {
            return _productRepository.GetAll(p => p.Inventories);
        }

        public enum OrderStatus
        {
            InProgress = 1,
            Completed = 2
        }
    }
}
