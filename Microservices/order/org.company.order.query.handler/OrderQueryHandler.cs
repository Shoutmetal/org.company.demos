using org.company.order.query.domain.repository;
using org.company.messaging;
using org.company.messages.queries;
using System;
using System.Collections.Generic;
using Domain = org.company.order.query.domain;
using AutoMapper;

namespace org.company.order.query.handler
{
    public class OrderQueryHandler : 
        IQueryStartHandler,
        IQueryHandler<Order>
    {


        private readonly IOrderRepository _orderRepository;
        private readonly IQueryServiceBus _bus;


        public OrderQueryHandler(
            IOrderRepository orderRepository,
            IQueryServiceBus bus)
        {
            _orderRepository = orderRepository;
            _bus = bus;

            Mapper.Initialize(cfg => {
                cfg.CreateMap<Domain.Order, Order>();
                cfg.CreateMap<Domain.Status, Status>();
                cfg.CreateMap<Domain.OrderDetail, OrderDetail>();
            });

        }

        public void start()
        {
            _bus.RespondAsync<Order>((msg) => GetList(msg));
            _bus.RespondSingleAsync<Order>((msg) => GetOne(msg));

        }

        public IEnumerable<Order> GetList(Order message)
        {
            var orders = _orderRepository.GetList(o => o.CustomerId == message.CustomerId);
            return (IList<Order>)Mapper.Map<IList<Order>>(orders);
        }

        public Order GetOne(Order message)
        {
            var order = _orderRepository.GetSingle(o => o.OrderId == message.OrderId);
            return (Order)Mapper.Map<Order>(order);
        }

        public IEnumerable<Order> GetAll()
        {
            throw new NotImplementedException();
        }


    }
}
