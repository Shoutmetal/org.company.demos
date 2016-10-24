using System;
using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace org.company.messaging
{
    public interface IQueryServiceBus
    {
        Task<IEnumerable<T>> RequestAsync<T>(T queryRequest) where T : Query;
        Task<IEnumerable<T>> RequestAsync<T>() where T : Query;
        Task<T> RequestSingleAsync<T>(T queryRequest) where T : Query;
        Task RespondAsync<T>(Func<T, IEnumerable<T>> fn) where T : Query;
        Task RespondSingleAsync<T>(Func<T, T> fn) where T : Query;

    }
}
