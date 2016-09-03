using Microsoft.EntityFrameworkCore;
using org.company.order.domain.contracts.repository;
using org.company.order.entities;
using org.company.order.repository.generic;
using System;
using System.Collections.Generic;
using System.Linq;

namespace org.company.order.repository
{
    public class OrderRepository : GenericRepository<Order>, IOrderRepository
    {
        public OrderRepository(DemoDbContext context) : base(context) { }

        public IList<Order> GetOrderByCustomerId(Guid customerId) {

            var order = dbSet
                .Include(od => od.OrderDetail)
                .ThenInclude(p => p.Product)
                .Where(o => o.CustomerId == customerId);

            return order.ToList();
        }
    }
}
