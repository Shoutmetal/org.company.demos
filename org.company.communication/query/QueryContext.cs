using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using org.company.order.repository.context;
using System;

namespace org.company.order.communication
{
    public class QueryContext
    {
        public static void RegisterServices(IServiceCollection services, IConfigurationRoot configuration)
        {
            Action<SqlServerDbContextOptionsBuilder> action = (options) =>
            {
                //options.UseRelationalNulls();

            };

            services
             .AddDbContext<QueryDbContext>(options =>
                    options.UseSqlServer(configuration.GetConnectionString("DemoDbContext"), action), ServiceLifetime.Scoped);
        }
    }
}
