using org.company.sales.application;
using SimpleInjector;

namespace org.company.sales.communication
{
    public class ApplicationDependencyResolver
    {
        public static void RegisterServices(Container container)
        {
            container.RegisterSingleton<ISalesService, SalesService>();
        }
    }
}
