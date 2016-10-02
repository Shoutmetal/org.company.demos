using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using org.company.order.contract.generic;
using org.company.repository;
using org.company.repository.generic;
using System;

namespace org.company.communication
{
    public class DatabaseContext
    {

        public static void RegisterServices(IServiceCollection services, IConfigurationRoot configuration)
        {
            Action<SqlServerDbContextOptionsBuilder> action = (options) =>
            {
                //options.UseRelationalNulls();
                
            };

            services
             .AddDbContext<DemoDbContext>(options =>
                    options.UseSqlServer(configuration.GetConnectionString("DemoDbContext"), action), ServiceLifetime.Scoped);


            services.AddScoped<IUnitOfWork, UnitOfWork>();
        }

    }
}
