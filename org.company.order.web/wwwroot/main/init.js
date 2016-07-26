export class Menu
{
    constructor(){
        
    }

    configureRouter(config, router){
        this.router = router;

        config.title= "Demo Architecture";

        config.map([
            { route: "", moduleId: 'home/index', name:"home", title:"Home", nav:true, icon:"icon-home" },
            { route: "order-page-one", moduleId: 'order/order-page-one', name:"order-page-one", title:"Order", nav:true, icon:"icon-basket" },
            { route: "order-page-two", moduleId: 'order/order-page-two', name:"order-page-two", title:"Next", nav:false },
            { route: "reports", moduleId: 'reports/report-main', name:"reports", title:"Reports", nav:true, icon:"icon-diamond", hasChilds:true },

            { route: "order-report", moduleId: 'reports/order-report', name:"order-report", title:"Order Report", nav:true, icon:"icon-rocket", parentName:"reports"}
        ]);

        this.router.navigation.forEach( item => {
            console.log(item)
            console.log("parent -> ", item.config.parent)
        })

        this.router.navigateWithParams = (routeName, params) => {
            let routerParams = this.router.routes.find(x => x.name === routeName);
            routerParams.data = params;
            this.router.navigate(routeName);
        }
    }

}