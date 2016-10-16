using Microsoft.Extensions.DependencyInjection;
using System;
using Microsoft.Extensions.Configuration;
using org.company.order.query.repository.context;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;

namespace org.company.order.query.repository.configuration
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
                    options.UseSqlServer(configuration.GetConnectionString("OrderDbContext"), action), ServiceLifetime.Scoped);
        }
    }
}
