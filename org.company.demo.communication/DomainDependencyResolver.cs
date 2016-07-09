
using org.company.sales.domain.contracts.services;
using org.company.sales.domain.services;
using SimpleInjector;


namespace org.company.sales.communication
{
    public class DomainDependencyResolver
    {
        public static void RegisterServices(Container container)
        {
            container.RegisterSingleton<IProductService, ProductService>();
            
        }
    }
}
