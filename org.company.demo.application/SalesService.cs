using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using org.company.demo.entities;
using org.company.demo.domain.services;
using org.company.demo.domain.core;

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
    }
}
