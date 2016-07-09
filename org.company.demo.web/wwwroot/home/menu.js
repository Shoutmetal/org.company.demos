export class Menu
{
    constructor(){
    
    }

    configureRouter(config, router){
        this.router = router;

        config.title= "Demo Architecture";

        config.map([
            { route: "", moduleId: 'home/index', name:"Home", title:"Home", nav:true },
            { route: "sales", moduleId: 'sales/index', name:"Sales", title:"Sales", nav:true },
            { route: "reports", moduleId: 'reports/index', name:"Reports", title:"Reports", nav:true }
        ])

    }
}