using System.Collections.Generic;
using org.company.demo.entities;
using org.company.demo.domain.services;
using org.company.demo.domain.generic;

namespace org.company.demo.application
{
    public class SalesService : ISalesService
    {
        private readonly IProductService _service;
        private readonly IUnitOfWork _uof;

        public SalesService(IProductService service, IUnitOfWork uof) {
            _service = service;
            _uof = uof;
        }

        public void AddProduct(Product product)
        {
            _service.AddProduct(product);
            _uof.Commit();
        }

        public Product GetProductById(int id) 
        {
            return _service.GetProductById(id);
        }

        public IEnumerable<Product> GetProducts()
        {
            return _service.GetProducts();
        }

        public void UpdateProduct(Product product)
        {
            _service.UpdateProduct(product);
            _uof.Commit();
        }
    }
}
