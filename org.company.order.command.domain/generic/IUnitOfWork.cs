using System;
using System.Threading.Tasks;

namespace org.company.order.command.domain.generic
{
    public interface IUnitOfWork : IDisposable
    {
        void Commit();

        Task CommitAsync();
    }
}
