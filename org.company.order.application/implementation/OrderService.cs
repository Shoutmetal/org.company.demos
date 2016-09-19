using org.company.order.application.contracts;
using org.company.order.domain.contracts.repository;
using org.company.order.domain.generic;
using org.company.order.entities;
using org.company.order.service.model;
using System;
using System.Collections.Generic;
using System.Linq;
using static org.company.order.entities.Order;

namespace org.company.order.application.implementation
{
    public class OrderService : IOrderService
    {
        private readonly IOrderRepository _orderRepository;
        private readonly IOrderDetailRepository _orderDetailRepository;
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
            //1) create an order
            Order order = new Order(orderDTO.CustomerId, OrderStatus.Created);
            _orderRepository.Add(order);


            orderDTO.Products.ForEach(prod =>
            {
                //2) add details to the order
                this.AddOrderDetail(order, prod.ProductId, prod.Quantity);

                //3) Adjust the Stock
                this.AdjustStock(prod.ProductId, prod.Quantity);
            });

            _uof.Commit();
        }

        internal void AddOrderDetail(Order order, int productId, int quantity)
        {
            OrderDetail orderDetail = new OrderDetail(order, productId, quantity);

            _orderDetailRepository.Add(orderDetail);
        }

        internal void AdjustStock(int productId, int quantity)
        {
            Product product = _productRepository.GetSingle(p => p.ProductId == productId, i => i.Inventories);
            Inventory inventory = product.AdjustStock(quantity);
            _inventoryRepository.Update(inventory);
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
