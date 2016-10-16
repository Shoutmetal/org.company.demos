using Microsoft.Extensions.DependencyInjection;
using org.company.product.query.domain.repository;
using org.company.product.query.repository;

namespace org.company.product.query.repository.configuration
{
    public class QueryRepositoryDependencyResolver
    {
        public static void RegisterServices(IServiceCollection services)
        {
            services.AddScoped<IProductRepository, ProductRepository>();

        }
    }
}
