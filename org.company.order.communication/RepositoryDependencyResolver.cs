using org.company.order.repository;
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
            

            container.Register<DbContext, DemoDbContext>(Lifestyle.Scoped);
            container.Register<IUnitOfWork, UnitOfWork>(Lifestyle.Scoped);

            container.Register<IProductRepository, ProductRepository>(Lifestyle.Scoped);
            container.Register<IOrderRepository, OrderRepository>(Lifestyle.Scoped);
            container.Register<ICustomerRepository, CustomerRepository>(Lifestyle.Scoped);
            container.Register<IOrderDetailRepository, OrderDetailRepository>(Lifestyle.Scoped);
            container.Register<IInventoryRepository, InventoryRepository>(Lifestyle.Scoped);
        }
    }
}
