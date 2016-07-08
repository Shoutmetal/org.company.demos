export class Menu
{
    constructor(){
    
    }

    configureRouter(config, router){
        this.router = router;

        config.title= "Demo Architecture";

        config.map([
            { route: "demo/index", moduleId: 'demo/index', name:"Menu", title:"Menu", nav:true }
        ])

    }
}