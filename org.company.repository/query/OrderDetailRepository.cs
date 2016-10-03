
using org.company.order.contract.query;
using org.company.order.domain;
using org.company.order.repository.context;
using org.company.order.repository.generic;
using org.company.repository.generic;

namespace org.company.repository.query
{
    public class OrderDetailRepository : QueryRepository<OrderDetail>, IOrderDetailRepository
    {
        public OrderDetailRepository(QueryDbContext context) : base(context) { }
    

    }
}
