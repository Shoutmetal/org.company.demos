
using Microsoft.Extensions.DependencyInjection;
using org.company.inventory.command.domain;

namespace org.company.inventory.command.repository.configuration
{
    public class CommandRepositoryDependencyResolver
    {
        public static void RegisterServices(IServiceCollection services)
        {
            services.AddScoped<IInventoryRepository, InventoryRepository>();
        }
    }
}
