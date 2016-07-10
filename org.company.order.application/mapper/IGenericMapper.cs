using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace org.company.order.application.mapper
{
    public interface IGenericMapper<T,M> 
        where T : class 
        where M : class
    {
        M MapTo(T obj);

      
    }
}
