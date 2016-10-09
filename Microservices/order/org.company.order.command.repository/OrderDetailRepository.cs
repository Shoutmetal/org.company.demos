using org.company.order.command.repository.generic;
using org.company.order.command.domain;
using org.company.order.command.repository.context;

namespace org.company.order.command.repository
{
    public class OrderDetailRepository : CommandRepository<OrderDetail>, IOrderDetailRepository
    {
        public OrderDetailRepository(CommandDbContext context) : base(context) { }
    

    }
}
