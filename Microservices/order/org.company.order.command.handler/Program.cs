using Microsoft.Extensions.DependencyInjection;
using org.company.messaging;

namespace org.company.order.command.handler
{
    public class Program
    {

        public static void Main(string[] args)
        {
            var startup = new Startup();
            var services = new ServiceCollection();
            var provider = startup.ConfigureServices(services);

            var service = provider.GetService<IStartHandler>();

            service.start();

        }

    }
}
