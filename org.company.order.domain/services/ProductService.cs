using org.company.order.domain.contracts.repository;
using org.company.order.domain.contracts.services;
using org.company.order.entities;
using System.Collections.Generic;
using System.Linq;
using System;

namespace org.company.order.domain.services
{
    public class ProductService : IProductService
    {
        private readonly IProductRepository _repository;
        private readonly IProductTypeRepository _repositoryProductType;
        public ProductService(IProductRepository repository, IProductTypeRepository repositoryProductType)
        {
            _repository = repository;
            _repositoryProductType = repositoryProductType;
        }

        public void AddProduct(Product product) => _repository.Add(product);

        public Product GetProductById(int id) => _repository.GetSingle(p => p.ProductId == id);

        public IEnumerable<Product> GetProducts() => _repository.GetAll().OrderBy( p => p.Name);

        public IEnumerable<ProductType> GetProductTypes() => _repositoryProductType.GetAll().OrderBy(p => p.Name);

        public void UpdateProduct(Product product) => _repository.Update(product);

     
    }
}
