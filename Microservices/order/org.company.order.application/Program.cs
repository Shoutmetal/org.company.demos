using Microsoft.Extensions.DependencyInjection;
using org.company.messaging;
using org.company.order.command.handler;
using System;

namespace org.company.order.application
{
    public class Program
    {
        public static void Main(string[] args)
        {
            Console.WriteLine("----------------------------------");
            Console.WriteLine("MICROSERVICE: ORDER");
            Console.WriteLine("----------------------------------");
            var startup = new Startup();
            var services = new ServiceCollection();
            var provider = startup.ConfigureServices(services);

            var commandHandler = provider.GetService<ICommandStartHandler>();
            var queryHandler = provider.GetService<IQueryStartHandler>();

            commandHandler.start();
            queryHandler.start();
        }
    }
}
