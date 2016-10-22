using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using org.company.messaging;
using System;
using org.company.messages.commands;
using org.company.messages.queries;
using System.Threading.Tasks;
using System.Collections;

namespace org.company.service.Controllers
{
    [Route("api/[controller]")]
    [Authorize]
    public class OrderController : BaseController
    {
        private readonly ICommandServiceBus _commandBus;
        private readonly IQueryServiceBus _queryBus;

        public OrderController(ICommandServiceBus commandBus, IQueryServiceBus queryBus)
        {
            _commandBus = commandBus;
            _queryBus = queryBus;
        }

        [HttpGet("orders/{id}")]
        public async Task<IActionResult> GetOrdersByCustomer(Guid id)
        {
            var response = await _queryBus.RequestAsync<GetOrderByCustomerId>(new GetOrderByCustomerId() { CustomerId = id });
            return Ok(response);
        }

        [HttpGet("order/{id}")]
        public async Task<IActionResult> GetOrderById(int id)
        {
            var response = await _queryBus.RequestSingleAsync<GetOrderById>(new GetOrderById() { OrderId = id });
            return Ok(response);
        }

        [HttpPost("save")]
        public void Post([FromBody]PlaceOrder order)
        {
            _commandBus.SendAsync(order);
        }

    }
}

