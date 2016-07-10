using org.company.order.application.contracts;
using org.company.order.domain.contracts.repository;
using org.company.order.domain.generic;
using org.company.order.entities;
using System.Collections.Generic;

namespace org.company.order.application.implementation
{
    public class ProductsService : IProductService
    {
        private readonly IProductRepository _repository;
        private readonly IUnitOfWork _uof;

        public ProductsService(IProductRepository repository, IUnitOfWork uof) {
            _repository = repository;
            _uof = uof;
        }

        public void AddProduct(Product product)
        {
            _repository.Add(product);
            _uof.Commit();
        }

        public Product GetProductById(int id) 
        {
            return _repository.GetSingle(p=> p.ProductId == id);
        }

        public IEnumerable<Product> GetProducts()
        {
            return _repository.GetAll();
        }

        public void UpdateProduct(Product product)
        {
            _repository.Update(product);
            _uof.Commit();
        }
    }
}
