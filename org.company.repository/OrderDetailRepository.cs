using org.company.order.contract.repository;
using org.company.order.domain;
using org.company.repository.generic;

namespace org.company.repository
{
    public class OrderDetailRepository : GenericRepository<OrderDetail>, IOrderDetailRepository
    {
        public OrderDetailRepository(DemoDbContext context) : base(context) { }
    

    }
}
