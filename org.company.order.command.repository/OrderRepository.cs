using Microsoft.EntityFrameworkCore;
using org.company.order.command.repository.generic;
using System;
using System.Collections.Generic;
using System.Linq;
using org.company.order.command.domain;
using org.company.order.command.repository.context;

namespace org.company.order.command.repository
{
    public class OrderRepository : CommandRepository<Order>, IOrderRepository
    {
        public OrderRepository(CommandDbContext context) : base(context) { }

        public IList<Order> GetOrderByCustomerId(Guid customerId) {

            var order = dbSet
                .Include(od => od.OrderDetail)
                .ThenInclude(p => p.Product)
                .Where(o => o.CustomerId == customerId);

            return order.ToList();
        }
    }
}
