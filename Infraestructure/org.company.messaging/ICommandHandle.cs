using System.Threading.Tasks;

namespace org.company.messaging
{
    public interface ICommandHandle<T> where T : ICommand
    {
        Task Handle(T message);
    }
}
