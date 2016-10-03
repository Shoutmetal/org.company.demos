using Microsoft.EntityFrameworkCore;
using org.company.order.contract.query;
using org.company.order.domain;
using org.company.order.repository.context;
using org.company.order.repository.generic;
using org.company.repository.generic;
using System;
using System.Collections.Generic;
using System.Linq;

namespace org.company.repository.query
{
    public class OrderRepository : QueryRepository<Order>, IOrderRepository
    {
        public OrderRepository(QueryDbContext context) : base(context) { }

        public IList<Order> GetOrderByCustomerId(Guid customerId) {

            var order = dbSet
                .Include(od => od.OrderDetail)
                .ThenInclude(p => p.Product)
                .Where(o => o.CustomerId == customerId);

            return order.ToList();
        }
    }
}
