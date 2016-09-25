using org.company.repository;
using org.company.order.contract.repository;
using Microsoft.Extensions.DependencyInjection;

namespace org.company.communication
{
    public class RepositoryDependencyResolver
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
