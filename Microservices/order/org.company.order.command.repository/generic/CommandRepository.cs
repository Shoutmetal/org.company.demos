using Microsoft.EntityFrameworkCore;
using org.company.order.command.domain.generic;

namespace org.company.order.command.repository.generic
{
    public class CommandRepository<T> : ICommandRepository<T> where T : class
    {
        private DbContext _context;
        public DbSet<T> dbSet;


        public CommandRepository(DbContext context)
        {
            _context = context;
            dbSet = context.Set<T>();
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
