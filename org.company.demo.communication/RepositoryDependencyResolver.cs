using org.company.demo.domain.contracts;
using org.company.demo.domain.core;
using org.company.demo.repository;
using org.company.demo.repository.core;
using SimpleInjector;
using System.Data.Entity;

namespace org.company.demo.communication
{
    public class RepositoryDependencyResolver
    {
        public static void RegisterServices(Container container)
        {
            container.Register<DbContext, DemoDbContext>(Lifestyle.Singleton);
            container.Register<IUnitOfWork, UnitOfWork>(Lifestyle.Singleton);

            container.RegisterSingleton<IProductRepository, ProductRepository>();
            container.RegisterSingleton<IProductTypeRepository, ProductTypeRepository>();
        }
    }
}
