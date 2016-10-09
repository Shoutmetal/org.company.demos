using org.company.product.query.domain;
using System.Collections.Generic;

namespace org.company.product.query.handler
{
    public interface IProductQuery
    {
        IEnumerable<Product> GetProducts();
    }
}
