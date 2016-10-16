using System.Collections.Generic;
using org.company.product.query.domain;
using org.company.product.query.domain.repository;

namespace org.company.product.query.handler
{
    public class ProductQuery : IProductQuery
    {

        private readonly IProductRepository _productRepository;

        public ProductQuery(IProductRepository productRepository) {
            _productRepository = productRepository;
        }

        public IEnumerable<Product> GetProducts()
        {
            return _productRepository.GetAll("ecommerce", "product");
        }
    }
}
