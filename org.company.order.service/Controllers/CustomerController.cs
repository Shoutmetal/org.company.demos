using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using org.company.order.application.contracts;
using org.company.order.entities;
using System.Collections.Generic;

namespace org.company.order.service.Controllers
{
    [Route("api/[controller]")]
    [Authorize]
    public class CustomerController : Controller
    {
        private readonly ICustomerService _service;

        public CustomerController(ICustomerService service)
        {
            _service = service;
        }

        [HttpGet]
        public IEnumerable<Customer> GetCustomers() {
            var result = _service.GetCustomers();

            return result;
        }

        [HttpGet("{id}")]
        public Customer GetCustomerById(int id)
        {
            var result = _service.GetCustomerById(id);

            return result;
        }
    }
}
