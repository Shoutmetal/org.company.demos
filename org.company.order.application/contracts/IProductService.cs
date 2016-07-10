using org.company.order.entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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
