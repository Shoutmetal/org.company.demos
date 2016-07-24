using org.company.order.application.contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace org.company.order.service.Controllers
{
    [RoutePrefix("api/customer")]
    public class CustomerController : ApiController
    {
        private readonly ICustomerService _service;

        public CustomerController(ICustomerService service)
        {
            _service = service;
        }


        public IHttpActionResult GetCustomers() {
            var result = _service.GetCustomers();

            return Ok(result);
        }

        [Route("customer/{id}")]
        public IHttpActionResult GetCustomerById(int id)
        {
            var result = _service.GetCustomerById(id);

            return Ok(result);
        }
    }
}
