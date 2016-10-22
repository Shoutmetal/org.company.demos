using Microsoft.Extensions.DependencyInjection;
using org.company.messaging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace org.company.inventory.application
{
    public class Program
    {
        public static void Main(string[] args)
        {
            Console.WriteLine("----------------------------------");
            Console.WriteLine("MICROSERVICE: INVENTORY");
            Console.WriteLine("----------------------------------");
            var startup = new Startup();
            var services = new ServiceCollection();
            var provider = startup.ConfigureServices(services);

            var service = provider.GetService<ICommandStartHandler>();

            service.start();

        }
    }
}
