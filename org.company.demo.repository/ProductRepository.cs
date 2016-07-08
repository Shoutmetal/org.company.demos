using org.company.demo.domain.contracts;

using org.company.demo.entities;
using org.company.demo.repository.core;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace org.company.demo.repository
{
    public class ProductRepository : GenericRepository<Product>, IProductRepository
    {
       public ProductRepository(DbContext context) : base(context) { }
    }
}
