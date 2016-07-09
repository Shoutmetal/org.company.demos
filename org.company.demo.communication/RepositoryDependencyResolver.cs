using org.company.sales.domain.contracts.repository;
using org.company.sales.domain.generic;
using org.company.sales.repository;
using org.company.sales.repository.generic;
using SimpleInjector;
using System.Data.Entity;

namespace org.company.sales.communication
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
