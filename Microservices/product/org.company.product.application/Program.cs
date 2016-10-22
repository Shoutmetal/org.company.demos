using Microsoft.Extensions.DependencyInjection;
using org.company.messaging;
using System;

namespace org.company.product.application
{
    public class Program
    {
        public static void Main(string[] args)
        {
            Console.WriteLine("----------------------------------");
            Console.WriteLine("MICROSERVICE: PRODUCT");
            Console.WriteLine("----------------------------------");
            var startup = new Startup();
            var services = new ServiceCollection();
            var provider = startup.ConfigureServices(services);

            var queryHandler = provider.GetService<IQueryStartHandler>();

            queryHandler.start();
        }
    }
}
