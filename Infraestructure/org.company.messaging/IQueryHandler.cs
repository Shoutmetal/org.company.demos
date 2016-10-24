using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace org.company.messaging
{
    public interface IQueryHandler<T> where T : Query
    {
        IEnumerable<T> GetAll();

        IEnumerable<T> GetList(T query);

        T GetOne(T query);
    }


}
