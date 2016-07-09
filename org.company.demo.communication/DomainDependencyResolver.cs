
using org.company.order.domain.contracts.services;
using org.company.order.domain.services;
using SimpleInjector;


namespace org.company.order.communication
{
    public class DomainDependencyResolver
    {
        public static void RegisterServices(Container container)
        {
            container.RegisterSingleton<IProductService, ProductService>();
            
        }
    }
}
