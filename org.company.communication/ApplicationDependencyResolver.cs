using Microsoft.Extensions.DependencyInjection;
using org.company.order.application.contracts;
using org.company.order.application.implementation;

namespace org.company.communication
{
    public class ApplicationDependencyResolver
    {
        public static void RegisterServices(IServiceCollection services)
        {
            services.AddScoped<IOrderService, OrderService>();
 
        }
    }
}
