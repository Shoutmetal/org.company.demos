export class Menu
{
    constructor(){
    
    }

    configureRouter(config, router){
        this.router = router;

        config.title= "Demo Architecture";

        config.map([
            { route: "", moduleId: 'home/index', name:"home", title:"Home", nav:true, icon:"icon-home" },
            { route: "order", moduleId: 'order/index', name:"order", title:"Order", nav:true, icon:"icon-basket" },
            { route: "order-next", moduleId: 'order/next', name:"order-next", title:"Next", nav:false },
            { route: "order-search", moduleId: 'order/order-search', name:"order-search", title:"Search", nav:true, icon:"icon-rocket" },
            { route: "reports", moduleId: 'reports/index', name:"reports", title:"Reports", nav:true, icon:"icon-diamond" }
        ]);

        console.log(this.router.navigation)

        this.router.navigateWithParams = (routeName, params) => {
            let routerParams = this.router.routes.find(x => x.name === routeName);
            routerParams.data = params;
            this.router.navigate(routeName);
        }
    }


}