﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace org.company.order.contract.generic
{
    public interface IGenericRepository<T> where T : class
    {
        IList<T> GetAll(params Expression<Func<T, object>>[] navigationProperties);
        IList<T> GetList(Expression<Func<T, bool>> where, params Expression<Func<T, object>>[] navigationProperties);
        T GetSingle(Func<T, bool> where, params Expression<Func<T, object>>[] navigationProperties);
        void Add(params T[] items);
        void Update(params T[] items);
        void Remove(params T[] items);

        Task<IList<T>> GetAllAsync(params Expression<Func<T, object>>[] navigationProperties);
        Task<IList<T>> GetListAsync(Expression<Func<T, bool>> where, params Expression<Func<T, object>>[] navigationProperties);
        Task<T> GetSingleAsync(Expression<Func<T, bool>> where, params Expression<Func<T, object>>[] navigationProperties);
    }
}
