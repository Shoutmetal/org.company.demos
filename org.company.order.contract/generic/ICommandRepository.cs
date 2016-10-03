using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace org.company.order.contract.generic
{
    public interface ICommandRepository<T> where T : class
    {
        void Add(params T[] items);
        void Update(params T[] items);
        void Remove(params T[] items);
    }
}
