using org.company.order.entities;
using org.company.order.service.dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace org.company.order.application.contracts
{
    public interface IOrderService
    {
        void AddOrder(OrderDTO order);

        IEnumerable<Order> GetOrdersByClient(int id);
        Order GetOrderById(int id);
   
        
    }
}
