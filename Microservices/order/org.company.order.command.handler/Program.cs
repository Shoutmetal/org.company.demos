using Microsoft.Extensions.DependencyInjection;
using org.company.messaging;
using System;

namespace org.company.order.command.handler
{
    public class Program
    {

        public static void Main(string[] args)
        {
            Console.WriteLine("----------------------------------");
            Console.WriteLine("Microservicios: Order");
            Console.WriteLine("----------------------------------");
            var startup = new Startup();
            var services = new ServiceCollection();
            var provider = startup.ConfigureServices(services);

            var service = provider.GetService<IStartHandler>();

            service.start();

        }

    }
}
