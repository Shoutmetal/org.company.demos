using System.Threading.Tasks;

namespace org.company.messaging
{
    public interface ICommandHandle<T> where T : Message
    {
        Task Handle(T message);
    }
}
