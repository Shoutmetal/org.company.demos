using System;
using System.Collections.Generic;
using org.company.product.query.domain;
using Nest;

namespace org.company.product.query.handler
{
    public class ProductQuery : IProductQuery
    {
        private readonly Uri _node;
        private readonly ConnectionSettings _settings;
        private readonly ElasticClient _client;


        public ProductQuery() {
            _node = new Uri("http://localhost:9200");
            _settings = new ConnectionSettings(_node);
            _client = new ElasticClient(_settings);
        }

        public IEnumerable<Product> GetProducts()
        {
            ISearchRequest request = new SearchRequest("ecommerce", "product");

            var response = _client.Search<Product>(request);

            return response.Documents;
        }
    }
}
