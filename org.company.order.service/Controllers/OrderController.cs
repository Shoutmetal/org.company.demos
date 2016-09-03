
using AspNet.Security.OpenIdConnect.Extensions;
using AspNet.Security.OpenIdConnect.Server;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using org.company.order.application.contracts;
using org.company.order.service.model;
using System;
using System.Linq;
using System.Security.Claims;

namespace org.company.order.service.Controllers
{
    [Route("api/[controller]")]
    [Authorize]
    public class OrderController : BaseController
    {
        
        private readonly IOrderService _service;
        
        public OrderController(IOrderService service)
        {
            _service = service;
        }

        [HttpGet("orders/{id}")]
        public IActionResult GetOrdersByCustomer(Guid id)
        {
            var result = _service.GetOrdersByCustomerId(id);
            return Ok(result);
        }

        [HttpGet("order/{id}")]
        public IActionResult GetOrderById(int id)
        {
            var result = _service.GetOrderById(id);

            return Ok(result);
        }

        [HttpGet("products")]
        public IActionResult GetProducts()
        {
            var result = _service.GetProducts();
            return Ok(result);
        }

        [HttpPost("save")]
        public void Post([FromBody]OrderDTO order)
        {
            _service.AddOrder(order);
        }

    }
}
