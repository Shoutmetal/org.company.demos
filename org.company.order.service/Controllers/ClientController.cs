using org.company.order.application.contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace org.company.order.service.Controllers
{
    [RoutePrefix("api/client")]
    public class ClientController : ApiController
    {
        private readonly IClientService _service;

        public ClientController(IClientService service)
        {
            _service = service;
        }


        public IHttpActionResult GetClients() {
            var result = _service.GetClients();

            return Ok(result);
        }

        [Route("client/{id}")]
        public IHttpActionResult GetClientById(int id)
        {
            var result = _service.GetClientById(id);

            return Ok(result);
        }
    }
}
