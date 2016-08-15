using org.company.order.entities;
using System.Collections.Generic;

namespace org.company.order.application.contracts
{
    public interface IProductService
    {
        void AddProduct(Product product);
        IEnumerable<Product> GetProducts();
        Product GetProductById(int id);
        void UpdateProduct(Product product);

    }
}
