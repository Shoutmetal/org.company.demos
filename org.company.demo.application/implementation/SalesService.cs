using org.company.order.application.contracts;
using org.company.order.domain.contracts.services;
using org.company.order.domain.generic;
using org.company.order.entities;
using System.Collections.Generic;

namespace org.company.order.application.implementation
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
