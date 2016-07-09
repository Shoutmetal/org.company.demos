[assembly: WebActivator.PostApplicationStartMethod(typeof(org.company.order.service.App_Start.SimpleInjectorWebApiInitializer), "Initialize")]

namespace org.company.order.service.App_Start
{
    using System.Web.Http;
    using SimpleInjector;
    using SimpleInjector.Integration.WebApi;
    using communication;

    public static class SimpleInjectorWebApiInitializer
    {
        /// <summary>Initialize the container and register it as Web API Dependency Resolver.</summary>
        public static void Initialize()
        {
            var container = new Container();
            container.Options.DefaultScopedLifestyle = new WebApiRequestLifestyle();
            
            InitializeContainer(container);

            container.RegisterWebApiControllers(GlobalConfiguration.Configuration);
       
            container.Verify();
            
            GlobalConfiguration.Configuration.DependencyResolver =
                new SimpleInjectorWebApiDependencyResolver(container);
        }
     
        private static void InitializeContainer(Container container)
        {
            RepositoryDependencyResolver.RegisterServices(container);
            DomainDependencyResolver.RegisterServices(container);
            ApplicationDependencyResolver.RegisterServices(container);

        }
    }
}