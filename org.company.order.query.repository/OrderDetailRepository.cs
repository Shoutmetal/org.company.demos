using org.company.order.query.domain;
using org.company.order.query.domain.repository;
using org.company.order.query.repository.context;
using org.company.order.query.repository.generic;

namespace org.company.order.query.repository
{
    public class OrderDetailRepository : QueryRepository<OrderDetail>, IOrderDetailRepository
    {
        public OrderDetailRepository(QueryDbContext context) : base(context) { }
    

    }
}
