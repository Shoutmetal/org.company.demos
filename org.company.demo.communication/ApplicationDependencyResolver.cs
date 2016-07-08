using org.company.demo.application;
using SimpleInjector;

namespace org.company.demo.communication
{
    public class ApplicationDependencyResolver
    {
        public static void RegisterServices(Container container)
        {
            container.RegisterSingleton<ISalesService, SalesService>();
        }
    }
}
