﻿using org.company.order.repository;
using org.company.order.domain.contracts.repository;
using org.company.order.domain.generic;
using org.company.order.repository.generic;
using SimpleInjector;
using System.Data.Entity;

namespace org.company.order.communication
{
    public class RepositoryDependencyResolver
    {
        public static void RegisterServices(Container container)
        {
            container.Register<DbContext, DemoDbContext>(Lifestyle.Singleton);
            container.Register<IUnitOfWork, UnitOfWork>(Lifestyle.Singleton);

            container.RegisterSingleton<IProductRepository, ProductRepository>();
            container.RegisterSingleton<IOrderRepository, OrderRepository>();
        }
    }
}