using System;
using System.Collections;
using System.Threading.Tasks;

namespace org.company.messaging
{
    public interface IQueryServiceBus
    {
        Task<IEnumerable> RequestAsync<T>(T queryRequest) where T : Query;
        Task<IEnumerable> RequestAsync<T>() where T : Query;
        Task<Object> RequestSingleAsync<T>(T queryRequest) where T : Query;
        Task RespondAsync<T>(Func<T, IEnumerable> fn) where T : Query;
        Task RespondSingleAsync<T>(Func<T, Object> fn) where T : Query;

    }
}
