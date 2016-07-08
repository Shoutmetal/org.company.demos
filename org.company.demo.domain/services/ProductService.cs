using System;
using System.Collections.Generic;
using org.company.demo.domain.contracts;
using org.company.demo.entities;

using org.company.demo.domain.core;

namespace org.company.demo.domain.services
{
    public class ProductService : IProductService
    {
        private readonly IProductRepository _repository;


        public ProductService(IProductRepository repository, IUnitOfWork uof) {
            _repository = repository;
         
        }

        public void AddProduct(Product product) {

            _repository.Add(product);
          
        }
       

    }
}
