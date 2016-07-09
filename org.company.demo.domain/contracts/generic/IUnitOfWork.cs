using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace org.company.demo.domain.generic
{
    public interface IUnitOfWork : IDisposable
    {
        void Commit();
    }
}
