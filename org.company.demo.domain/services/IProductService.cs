using org.company.demo.entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace org.company.demo.domain.services
{
    public interface IProductService
    {
        void AddProduct(Product product);
    }
}
