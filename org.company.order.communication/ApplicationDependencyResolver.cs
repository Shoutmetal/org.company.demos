using org.company.order.application.contracts;
using org.company.order.application.implementation;
using SimpleInjector;

namespace org.company.order.communication
{
    public class ApplicationDependencyResolver
    {
        public static void RegisterServices(Container container)
        {
            container.RegisterSingleton<ISalesService, SalesService>();
        }
    }
}
