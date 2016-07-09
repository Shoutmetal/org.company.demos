using org.company.sales.domain.contracts.services;
using org.company.sales.domain.generic;
using org.company.sales.entities;
using System.Collections.Generic;

namespace org.company.sales.application
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
