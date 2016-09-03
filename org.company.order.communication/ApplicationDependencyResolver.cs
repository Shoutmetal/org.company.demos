using Microsoft.Extensions.DependencyInjection;
using org.company.order.application.contracts;
using org.company.order.application.implementation;

namespace org.company.order.communication
{
    public class ApplicationDependencyResolver
    {
        public static void RegisterServices(IServiceCollection services)
        {
            services.AddScoped<IOrderService, OrderService>();
 
        }
    }
}
