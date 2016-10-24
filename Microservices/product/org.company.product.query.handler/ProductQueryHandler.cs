using System.Collections.Generic;
using org.company.product.query.domain.repository;
using org.company.messaging;
using System;
using org.company.messages.queries;
using Domain = org.company.product.query.domain;
using AutoMapper;

namespace org.company.product.query.handler
{
    public class ProductQueryHandler : 
        IQueryStartHandler,
        IQueryHandler<Product>
    {

        private readonly IProductRepository _productRepository;
        private readonly IQueryServiceBus _bus;

        public ProductQueryHandler(IProductRepository productRepository, IQueryServiceBus bus) {
            _productRepository = productRepository;
            _bus = bus;
            Mapper.Initialize(cfg => {
                cfg.CreateMap<Domain.Product, Product>();
                cfg.CreateMap<Domain.ProductType, ProductType>();
            });
        }

        public void start()
        {
            _bus.RespondAsync<Product>((msg) => GetList(msg));
        }


        public IEnumerable<Product> GetAll()
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Product> GetList(Product query)
        {
            var products = _productRepository.GetAll("ecommerce", "product");
            return (IList<Product>)Mapper.Map<IList<Product>>(products);
        }

        public Product GetOne(Product query)
        {
            throw new NotImplementedException();
        }
    }
}
