using org.company.order.application.contracts;
using org.company.order.application.implementation;
using SimpleInjector;

namespace org.company.order.communication
{
    public class ApplicationDependencyResolver
    {
        public static void RegisterServices(Container container)
        {
            container.Register<IProductService, ProductsService>(Lifestyle.Scoped);
            container.Register<IOrderService, OrderService>(Lifestyle.Scoped);
            container.Register<ICustomerService, CustomerService>(Lifestyle.Scoped);
        }
    }
}
