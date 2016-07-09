﻿using org.company.demo.domain.contracts;
using org.company.demo.domain.generic;
using org.company.demo.entities;
using System.Collections.Generic;
using System.Linq;

namespace org.company.demo.domain.services
{
    public class ProductService : IProductService
    {
        private readonly IProductRepository _repository;
        public ProductService(IProductRepository repository)
        {
            _repository = repository;
        }

        public void AddProduct(Product product) => _repository.Add(product);

        public Product GetProductById(int id) => _repository.GetSingle(p => p.Id == id);

        public IEnumerable<Product> GetProducts() => _repository.GetAll().OrderBy( p => p.Name);

        public void UpdateProduct(Product product) => _repository.Update(product);

     
    }
}
