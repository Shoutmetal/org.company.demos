using System;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace org.company.product.query.domain.generic
{
    public interface IQueryRepository<T> where T : class
    {
        IList<T> GetAll(string index, string type);
        IList<T> GetList(Expression<Func<T, bool>> where, params Expression<Func<T, object>>[] navigationProperties);
        T GetSingle(Func<T, bool> where, params Expression<Func<T, object>>[] navigationProperties);
    }
}
