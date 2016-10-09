using System.IO;
using Microsoft.AspNetCore.Hosting;

namespace org.company.order.web
{
    public class Program
    {
        public static void Main(string[] args)
      {
            var host = new WebHostBuilder()
                .UseKestrel()
                .UseContentRoot(Directory.GetCurrentDirectory())
                .UseIISIntegration()
                .UseStartup<Startup>()
                .Build();

            host.Run();
        }
    }
}
