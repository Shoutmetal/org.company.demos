using Microsoft.AspNetCore.Mvc;
using org.company.product.query.handler;
using Microsoft.AspNetCore.Authorization;


namespace org.company.order.service.Controllers
{
    [Route("api/[controller]")]
    [Authorize]
    public class ProductController : Controller
    {

        
        private readonly IProductQuery _productQuery;

        public ProductController(IProductQuery productQuery)
        {
            _productQuery = productQuery;
        }

        [HttpGet("products")]
        public IActionResult GetProducts()
        {
            var products = _productQuery.GetProducts();

            return Ok(products);
        }
    }
}
