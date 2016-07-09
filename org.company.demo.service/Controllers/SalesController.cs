
using org.company.order.application.contracts;
using org.company.order.entities;
using System.Web.Http;

namespace org.company.order.service.Controllers
{
    [RoutePrefix("api/order")]
    public class SalesController : ApiController
    {
        private readonly ISalesService _service;

        public SalesController(ISalesService service)
        {
            _service = service;
        }

        [HttpGet]
        [Route("products")]
        public IHttpActionResult Get()
        {
            var result = _service.GetProducts();

            return Ok(result);
        }

        [HttpGet]
        [Route("product/{id}")]
        public Product Get(int id)
        {
            return _service.GetProductById(id);
        }

        [HttpPost]
        [Route("product")]
        public void Post([FromBody]Product product)
        {
            _service.AddProduct(product);
        }

        [HttpPut]
        [Route("product")]
        public void Put(int id, [FromBody]Product product)
        {
            _service.UpdateProduct(product);
        }

        [HttpDelete]
        [Route("product")]
        public void Delete(int id)
        {
            _service.UpdateProduct(new Product() { Id = id });
        }
    }
}
