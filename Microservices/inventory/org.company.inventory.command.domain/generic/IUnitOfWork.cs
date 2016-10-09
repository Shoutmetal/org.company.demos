using System;
using System.Threading.Tasks;

namespace org.company.inventory.command.domain.generic
{
    public interface IUnitOfWork : IDisposable
    {
        void Commit();

        Task CommitAsync();
    }
}
