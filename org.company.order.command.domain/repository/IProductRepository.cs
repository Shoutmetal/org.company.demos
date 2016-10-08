using org.company.order.command.domain.generic;

namespace org.company.order.command.domain
{
    public interface IProductRepository : ICommandRepository<Product>
    {
    }
}
