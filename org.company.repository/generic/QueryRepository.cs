using Microsoft.EntityFrameworkCore;
using org.company.order.domain.generic;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;


namespace org.company.order.repository.generic
{
    public class QueryRepository<T> : IQueryRepository<T> where T : class
    {

        private DbContext _context;
        public DbSet<T> dbSet;


        public QueryRepository(DbContext context)
        {
            _context = context;
            dbSet = context.Set<T>();
        }

        public virtual IList<T> GetAll(params Expression<Func<T, object>>[] navigationProperties)
        {
            IQueryable<T> dbQuery = dbSet;

            foreach (Expression<Func<T, object>> navigationProperty in navigationProperties)
                dbQuery = dbQuery.Include<T, object>(navigationProperty);

            return dbQuery.ToList<T>();
        }

        public virtual IList<T> GetList(Expression<Func<T, bool>> where, params Expression<Func<T, object>>[] navigationProperties)
        {
            IQueryable<T> dbQuery = dbSet;

            foreach (Expression<Func<T, object>> navigationProperty in navigationProperties)
                dbQuery = dbQuery.Include<T, object>(navigationProperty);

            dbQuery = dbQuery.Where(where);

            return dbQuery.ToList<T>();
        }

        public virtual T GetSingle(Func<T, bool> where, params Expression<Func<T, object>>[] navigationProperties)
        {
            IQueryable<T> dbQuery = dbSet;

            foreach (Expression<Func<T, object>> navigationProperty in navigationProperties)
                dbQuery = dbQuery.Include<T, object>(navigationProperty);

            return dbQuery.FirstOrDefault(where);
        }
    }
}
