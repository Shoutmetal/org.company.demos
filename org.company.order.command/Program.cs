using Microsoft.Extensions.DependencyInjection;
using org.company.order.handler;

namespace org.company.order.command
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
