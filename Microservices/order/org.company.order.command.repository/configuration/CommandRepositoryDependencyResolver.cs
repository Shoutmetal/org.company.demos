﻿
using Microsoft.Extensions.DependencyInjection;
using org.company.order.command.domain;
using org.company.order.command.repository;

namespace org.company.order.command.repository.configuration
{
    public class CommandRepositoryDependencyResolver
    {
        public static void RegisterServices(IServiceCollection services)
        {
            services.AddScoped<IOrderRepository, OrderRepository>();
            services.AddScoped<IOrderDetailRepository, OrderDetailRepository>();

        }
    }
}
