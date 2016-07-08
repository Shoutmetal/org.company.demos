using org.company.demo.domain.bases;
using org.company.demo.entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace org.company.demo.domain.contracts
{
    public interface IProductRepository : IGenericRepository<Product>
    {
    }
}
