using org.company.order.contract.command;
using org.company.order.domain;
using org.company.repository.generic;

namespace org.company.repository.command
{
    public class OrderDetailRepository : CommandRepository<OrderDetail>, IOrderDetailRepository
    {
        public OrderDetailRepository(CommandDbContext context) : base(context) { }
    

    }
}
