using Microsoft.Extensions.DependencyInjection;
using org.company.order.query.domain.repository;
using org.company.order.query.repository;

namespace org.company.order.query.handler
{
    public class QueryRepositoryDependencyResolver
    {
        public static void RegisterServices(IServiceCollection services)
        {
            services.AddScoped<IProductRepository, ProductRepository>();
            services.AddScoped<IOrderRepository, OrderRepository>();

        }
    }
}
