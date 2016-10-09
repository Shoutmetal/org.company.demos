using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using org.company.messaging;
using org.company.order.messages;
using org.company.order.query.handler;
using RawRabbit;
using System;


namespace org.company.service.Controllers
{
    [Route("api/[controller]")]
    [Authorize]
    public class OrderController : BaseController
    {
        private readonly IServiceBus _bus;
        private readonly IOrderQuery _orderQuery;

        public OrderController(IServiceBus bus, IOrderQuery orderQuery)
        {
            _bus = bus;
            _orderQuery = orderQuery;
        }

        [HttpGet("orders/{id}")]
        public IActionResult GetOrdersByCustomer(Guid id)
        {
            var result = _orderQuery.GetOrdersByCustomerId(id);
            return Ok(result);
        }

        [HttpGet("order/{id}")]
        public IActionResult GetOrderById(int id)
        {
            var result = _orderQuery.GetOrderById(id);

            return Ok(result);
        }

        [HttpGet("products")]
        public IActionResult GetProducts()
        {
            var result = _orderQuery.GetProducts();
            return Ok(result);
        }

        [HttpPost("save")]
        public void Post([FromBody]PlaceOrder order)
        {
            _bus.PublishAsync(order);
        }

    }
}

