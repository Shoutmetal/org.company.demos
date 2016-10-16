using Nest;
using org.company.product.query.domain;
using org.company.product.query.domain.generic;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;


namespace org.company.product.query.repository.generic
{
    public class QueryRepository<T> : IQueryRepository<T> where T : class
    {

        private readonly Uri _node;
        private readonly ConnectionSettings _settings;
        private readonly ElasticClient _client;

        public QueryRepository()
        {
            _node = new Uri("http://localhost:9200");
            _settings = new ConnectionSettings(_node);
            _client = new ElasticClient(_settings);
        }

        public virtual IList<T> GetAll(string index, string type)
        {
            ISearchRequest request = new SearchRequest("ecommerce", "product");
            var response = _client.Search<T>(request);
            IList<T> result = response.Documents.ToList();

            return result;
        }

        public virtual IList<T> GetList(Expression<Func<T, bool>> where, params Expression<Func<T, object>>[] navigationProperties)
        {
            return null;
        }

        public virtual T GetSingle(Func<T, bool> where, params Expression<Func<T, object>>[] navigationProperties)
        {
            return null;
        }

    }
}
