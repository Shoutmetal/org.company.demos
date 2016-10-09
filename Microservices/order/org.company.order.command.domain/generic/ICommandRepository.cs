namespace org.company.order.command.domain.generic
{
    public interface ICommandRepository<T> where T : class
    {
        void Add(params T[] items);
        void Update(params T[] items);
        void Remove(params T[] items);
    }
}
