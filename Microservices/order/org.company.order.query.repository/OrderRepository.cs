using Microsoft.EntityFrameworkCore;
using org.company.order.query.domain;
using org.company.order.query.domain.repository;
using org.company.order.query.repository.context;
using org.company.order.query.repository.generic;
using System;
using System.Collections.Generic;
using System.Linq;

namespace org.company.order.query.repository
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
