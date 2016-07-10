using org.company.order.entities;
using org.company.order.service.dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace org.company.order.application.mapper
{
    public class OrderMapper : IGenericMapper<OrderDTO, Order>
    {
        public Order MapTo(OrderDTO obj)
        {
            return new Order()
            {
               
            };
        }
    }
}
