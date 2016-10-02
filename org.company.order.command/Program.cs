using RawRabbit;
using RawRabbit.vNext;
using System;
using Microsoft.Extensions.Configuration;
using System.IO;
using Microsoft.Extensions.DependencyInjection;
using org.company.order.messages;

namespace org.company.order.command
{
    public class Program
    {

        public static void Main(string[] args)
        {
            var startup = new Startup();
            var services = new ServiceCollection();
            var provider = startup.ConfigureServices(services);

            var service = provider.GetService<IOrderHandler>();

            service.start();

        }

    }
}
