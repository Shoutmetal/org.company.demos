using System.Collections.Generic;
using org.company.product.query.domain;
using org.company.product.query.domain.repository;
using org.company.messaging;
using System;
using org.company.messages.queries;
using System.Collections;

namespace org.company.product.query.handler
{
    public class ProductQueryHandler : 
        IQueryStartHandler,
        IQueryHandler<GetAllProducts>
    {

        private readonly IProductRepository _productRepository;
        private readonly IQueryServiceBus _bus;

        public ProductQueryHandler(IProductRepository productRepository, IQueryServiceBus bus) {
            _productRepository = productRepository;
            _bus = bus;
        }

        public void start()
        {
            _bus.RespondAsync<GetAllProducts>((msg) => Handle(msg));
        }

        public IEnumerable<Product> GetProducts()
        {
            return _productRepository.GetAll("ecommerce", "product");
        }

        public IEnumerable Handle(GetAllProducts message)
        {
            var products = _productRepository.GetAll("ecommerce", "product");
            return products;
        }
    }
}
