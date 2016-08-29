
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using org.company.order.application.contracts;
using org.company.order.service.model;
using System.Linq;

namespace org.company.order.service.Controllers
{
    [Route("api/[controller]")]
    public class OrderController : Controller
    {
        
        private readonly IOrderService _service;

        public OrderController(IOrderService service)
        {
            _service = service;
         
        }

        [HttpGet("orders/{id}")]
        public IActionResult GetOrdersByCustomer(int id)
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
        [Authorize("Bearer")]
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
