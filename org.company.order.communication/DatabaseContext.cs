using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using org.company.order.domain.generic;
using org.company.order.repository;
using org.company.order.repository.generic;
using System;

namespace org.company.order.communication
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
                    options.UseSqlServer(configuration.GetConnectionString("DemoDbContext"), action));


            services.AddScoped<IUnitOfWork, UnitOfWork>();
        }

    }
}
