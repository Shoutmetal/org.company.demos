export class Menu
{
    constructor(){
    
    }

    configureRouter(config, router){
        this.router = router;

        config.title= "Demo Architecture";

        config.map([
            { route: "", moduleId: 'home/index', name:"home", title:"Home", nav:true },
            { route: "order", moduleId: 'order/index', name:"order", title:"Order", nav:true },
            { route: "order-next", moduleId: 'order/next', name:"order-next", title:"Next", nav:false, params:{} },
            { route: "order-search", moduleId: 'order/order-search', name:"order-search", title:"Search", nav:true },
            { route: "reports", moduleId: 'reports/index', name:"reports", title:"Reports", nav:true }
        ])

    }
}