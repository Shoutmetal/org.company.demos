using Microsoft.EntityFrameworkCore;
using org.company.order.domain.contracts.repository;
using org.company.order.entities;
using org.company.order.repository.generic;

namespace org.company.order.repository
{
    public class OrderDetailRepository : GenericRepository<OrderDetail>, IOrderDetailRepository
    {
        public OrderDetailRepository(DemoDbContext context) : base(context) { }
    

    }
}
