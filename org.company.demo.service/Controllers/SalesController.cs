using org.company.demo.application;
using org.company.demo.entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace org.company.demo.service.Controllers
{
    public class SalesController : ApiController
    {
        private readonly ISalesService _service;

        public SalesController(ISalesService service)
        {
            _service = service;
        }

        // GET: api/Sales
        public IEnumerable<string> Get()
        {
            Product product = new Product() {
                Name = "Spaguetti",
                Price = 19.21M,
                Stock = 2000,
                ProductType = new ProductType() {
                       Id = 1,
                       Name = "Cereal",
                       IsActive = true
                }
            };


            _service.AddProduct(product);

            return new string[] { "value1", "value2" };
        }

        // GET: api/Sales/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Sales
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Sales/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Sales/5
        public void Delete(int id)
        {
        }
    }
}
