using org.company.order.domain.generic;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Linq.Expressions;

namespace org.company.order.repository.generic
{
    public class GenericRepository<T> : IGenericRepository<T> where T : class
    {
        private DbContext _context;

        public GenericRepository() { }

        public GenericRepository(DbContext context)
        {
            _context = context;
        }

        public virtual IList<T> GetAll(params Expression<Func<T, object>>[] navigationProperties)
        {
            IQueryable<T> dbQuery = _context.Set<T>();

            foreach (Expression<Func<T, object>> navigationProperty in navigationProperties)
                dbQuery = dbQuery.Include<T, object>(navigationProperty);

            return dbQuery.AsNoTracking().ToList<T>();
        }

        public virtual IList<T> GetList(Expression<Func<T, bool>> where, params Expression<Func<T, object>>[] navigationProperties)
        {
            IQueryable<T> dbQuery = _context.Set<T>();

            foreach (Expression<Func<T, object>> navigationProperty in navigationProperties)
                dbQuery = dbQuery.Include<T, object>(navigationProperty);

            dbQuery = dbQuery.Where(where);

            return dbQuery.AsNoTracking().ToList<T>();
        }

        public virtual T GetSingle(Func<T, bool> where, params Expression<Func<T, object>>[] navigationProperties)
        {
            IQueryable<T> dbQuery = _context.Set<T>();

            foreach (Expression<Func<T, object>> navigationProperty in navigationProperties)
                dbQuery = dbQuery.Include<T, object>(navigationProperty);

            return dbQuery.AsNoTracking().FirstOrDefault(where);
        }

        public virtual void Add(params T[] items)
        {
            foreach (T item in items)
                _context.Entry(item).State = EntityState.Added;

        }

        public virtual void Update(params T[] items)
        {
            foreach (T item in items)
                _context.Entry(item).State = EntityState.Modified;
            
        }

        public virtual void Remove(params T[] items)
        {
            foreach (T item in items)
                _context.Entry(item).State = EntityState.Deleted;
            
        }
    }

}
