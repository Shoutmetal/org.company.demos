using Microsoft.EntityFrameworkCore;
using org.company.order.contract.generic;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace org.company.repository.generic
{
    public class GenericRepository<T> : IGenericRepository<T> where T : class
    {
        private DbContext _context;
        public DbSet<T> dbSet;


        public GenericRepository(DbContext context)
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

        public virtual async Task<IList<T>> GetAllAsync(params Expression<Func<T, object>>[] navigationProperties)
        {
            IQueryable<T> dbQuery = dbSet;

            foreach (Expression<Func<T, object>> navigationProperty in navigationProperties)
                dbQuery = dbQuery.Include<T, object>(navigationProperty);

            return await dbQuery.ToListAsync<T>();
        }


        public virtual IList<T> GetList(Expression<Func<T, bool>> where, params Expression<Func<T, object>>[] navigationProperties)
        {
            IQueryable<T> dbQuery = dbSet;

            foreach (Expression<Func<T, object>> navigationProperty in navigationProperties)
                dbQuery = dbQuery.Include<T, object>(navigationProperty);

            dbQuery = dbQuery.Where(where);

            return dbQuery.ToList<T>();
        }

        public virtual async Task<IList<T>> GetListAsync(Expression<Func<T, bool>> where, params Expression<Func<T, object>>[] navigationProperties)
        {
            IQueryable<T> dbQuery = dbSet;

            foreach (Expression<Func<T, object>> navigationProperty in navigationProperties)
                dbQuery = dbQuery.Include<T, object>(navigationProperty);

            dbQuery = dbQuery.Where(where);

            return await dbQuery.ToListAsync<T>();
        }

        public virtual T GetSingle(Func<T, bool> where, params Expression<Func<T, object>>[] navigationProperties)
        {
            IQueryable<T> dbQuery = dbSet;

            foreach (Expression<Func<T, object>> navigationProperty in navigationProperties)
                dbQuery = dbQuery.Include<T, object>(navigationProperty);

            return dbQuery.FirstOrDefault(where);
        }

        public virtual async Task<T> GetSingleAsync(Expression<Func<T, bool>> where, params Expression<Func<T, object>>[] navigationProperties)
        {
            IQueryable<T> dbQuery = dbSet;

            foreach (Expression<Func<T, object>> navigationProperty in navigationProperties)
                dbQuery = dbQuery.Include<T, object>(navigationProperty);

 
            return await dbQuery.FirstOrDefaultAsync(where);
        }

        public virtual void Add(params T[] items)
        {
                foreach (T item in items)
                    _context.Entry(item).State = EntityState.Added;
        }

        public virtual async void AddAsync(params T[] items)
        {
            foreach (T item in items)
               _context.Entry(item).State = EntityState.Added;

            await Task.CompletedTask;
        }



        public virtual void Update(params T[] items)
        {
            foreach (T item in items)
                _context.Entry(item).State = EntityState.Modified;
            
        }

        public virtual async void UpdateAsync(params T[] items)
        {
            foreach (T item in items)
                _context.Entry(item).State = EntityState.Modified;

            await Task.CompletedTask;
        }

        public virtual void Remove(params T[] items)
        {
            foreach (T item in items)
                _context.Entry(item).State = EntityState.Deleted;
            
        }
    }

}
