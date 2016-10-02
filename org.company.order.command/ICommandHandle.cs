using org.company.order.messages;
using System.Threading.Tasks;

namespace org.company.order.command
{
    public interface ICommandHandle<T> where T : ICommand
    {
        Task Handle(T message);
    }
}
