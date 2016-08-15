using org.company.order.application.contracts;
using org.company.order.domain.contracts.repository;
using org.company.order.domain.generic;
using org.company.order.entities;
using org.company.order.service.model;
using System;
using System.Collections.Generic;


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

            //0) generate order number
            string orderNumber = orderDTO.CustomerId + DateTime.Now.ToString("yyMMddHHmmssff");

            //1) create an order
            Order order = new Order(orderDTO.CustomerId, orderNumber, (int)OrderStatus.Created);
            _orderRepository.Add(order);

            //2) add details to the order
            orderDTO.Products.ForEach(prod =>
           {
               OrderDetail orderDetail = new OrderDetail()
               {
                   Order = order,
                   ProductId = prod.ProductId,
                   Quantity = prod.Quantity
               };

               _orderDetailRepository.Add(orderDetail);

                   //3) Adjust the Stock
                   Product product = _productRepository.GetSingle(p => p.ProductId == prod.ProductId, i => i.Inventories);
               Inventory inventory = product.AdjustStock(prod.Quantity);
               _inventoryRepository.Update(inventory);

           });


            _uof.Commit();


        }

        public IEnumerable<Order> GetOrdersByCustomerId(int customerId)
        {
            return _orderRepository.GetList(o => o.CustomerId == customerId,
                o => o.OrderDetail,
                c => c.Customer);
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
            Created = 1,
            Completed = 2
        }
    }
}
