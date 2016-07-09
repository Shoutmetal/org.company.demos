using org.company.sales.domain.contracts.repository;
using org.company.sales.domain.contracts.services;
using org.company.sales.entities;
using System.Collections.Generic;
using System.Linq;

namespace org.company.sales.domain.services
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
