using Microsoft.Extensions.DependencyInjection;
using org.company.order.query.domain.query;
using org.company.order.command.repository.query;

namespace org.company.order.communication
{
    public class QueryRepositoryDependencyResolver
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
