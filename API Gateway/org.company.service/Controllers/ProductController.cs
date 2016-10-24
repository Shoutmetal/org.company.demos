using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using org.company.messaging;
using org.company.messages.queries;
using System.Threading.Tasks;

namespace org.company.order.service.Controllers
{
    [Route("api/[controller]")]
    [Authorize]
    public class ProductController : Controller
    {


        private readonly IQueryServiceBus _queryBus;

        public ProductController(IQueryServiceBus queryBus)
        {
            _queryBus = queryBus;
        }

        [HttpGet("products")]
        public async Task<IActionResult> GetProducts()
        {
            var response = await _queryBus.RequestAsync<Product>();
            return Ok(response);
        }
    }
}
