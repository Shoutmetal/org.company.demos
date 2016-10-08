
using Microsoft.Extensions.DependencyInjection;
using org.company.order.query.domain.command;
using org.company.order.command.repository.command;

namespace org.company.communication
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
