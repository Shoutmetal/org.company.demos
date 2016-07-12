using org.company.order.application.contracts;
using org.company.order.entities;
using org.company.order.domain.generic;
using org.company.order.domain.contracts.repository;
using org.company.order.service.dtos;
using System;
using System.Collections.Generic;
using System.Linq;

namespace org.company.order.application.implementation
{
    public class OrderService : IOrderService
    {
        private readonly IOrderRepository _repository;
        private readonly IProductRepository _productRepository;
        private readonly IUnitOfWork _uof;

        public OrderService(IOrderRepository repository, IProductRepository productRepository, IUnitOfWork uof)
        {
            _repository = repository;
            _productRepository = productRepository;
            _uof = uof;
        }

        public void AddOrder(OrderDTO orderDTO)
        {
            Order order = new Order(orderDTO.ClientId);

            orderDTO.Products.ForEach(prod =>
            {

                //Get product
                var product = _productRepository.GetSingle(p => p.ProductId == prod.ProductId);

                //Reduce Stock
                product.ReduceStock(prod.Quantity);

                //Add to OrderProduct
                order.AddProductAndQuantity(product, prod.Quantity);

                //Update Product added
                _productRepository.Update(product);

            });

            _repository.Add(order);
            _uof.Commit();
        }

        public IEnumerable<Order> GetOrdersByClient(int id)
        {
            return _repository.GetList(o => o.ClientId == id,
                o => o.OrderProduct.Select(p => p.Product),
                c => c.Client);
        }

        public Order GetOrderById(int id)
        {
            return _repository.GetSingle(o => o.OrderId == id);
        }

        public IEnumerable<Product> GetProducts()
        {
            return _productRepository.GetAll();
        }
    }
}
