using Microsoft.EntityFrameworkCore;
using org.company.order.contract.command;
using org.company.order.domain;
using org.company.repository.generic;
using System;
using System.Collections.Generic;
using System.Linq;

namespace org.company.repository.command
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
