
using org.company.demo.domain.services;
using SimpleInjector;


namespace org.company.demo.communication
{
    public class DomainDependencyResolver
    {
        public static void RegisterServices(Container container)
        {
            container.RegisterSingleton<IProductService, ProductService>();
            
        }
    }
}
