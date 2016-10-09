using System;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using org.company.inventory.command.repository.context;
using Microsoft.EntityFrameworkCore;
using org.company.inventory.command.domain.generic;
using org.company.inventory.command.repository.generic;

namespace org.company.inventory.command.repository.configuration
{
    public class CommandContext
    {

        public static void RegisterServices(IServiceCollection services, IConfigurationRoot configuration)
        {
            Action<SqlServerDbContextOptionsBuilder> action = (options) =>
            {
                //options.UseRelationalNulls();
                
            };

            services
             .AddDbContext<CommandDbContext>(options =>
                    options.UseSqlServer(configuration.GetConnectionString("InventoryDbContext"), action), ServiceLifetime.Scoped);



            services.AddScoped<IUnitOfWork, UnitOfWork>();
        }

    }
}
