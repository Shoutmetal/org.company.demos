
using Microsoft.Extensions.DependencyInjection;
using org.company.order.command.domain;
using org.company.order.command.repository;

namespace org.company.order.commandHandler.configuration
{
    public class CommandRepositoryDependencyResolver
    {
        public static void RegisterServices(IServiceCollection services)
        {
            services.AddScoped<IProductRepository, ProductRepository>();
            services.AddScoped<IOrderRepository, OrderRepository>();
            services.AddScoped<IOrderDetailRepository, OrderDetailRepository>();
            services.AddScoped<IInventoryRepository, InventoryRepository>();
        }
    }
}
