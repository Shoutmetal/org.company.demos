import {AppInsights} from 'services/application-insight';

export class Menu
{

    configureRouter(config, router){
        config.title= "Demo Architecture";
        config.addPipelineStep('modelbind', AppInsights);

        let reports = [
            { route: "order-report", moduleId: 'reports/order-report', name:"order-report", title:"Order Report", nav:true, icon:"icon-rocket", parentName:"reports"}
        ];

        let routes = [
            { route: "", moduleId: 'home/index', name:"home", title:"Home", nav:true, icon:"icon-home" },
            { route: "order-start-page", moduleId: 'order/order-start-page', name:"order-start-page", title:"Order", nav:true, icon:"icon-basket" },
            { route: "order-checkout", moduleId: 'order/order-checkout', name:"order-checkout", title:"Checkout", nav:true, icon:"icon-check"},
            { route: "order-cart-shop", moduleId: 'order/order-cart-shop', name:"order-cart-shop", title:"Cart Shop", nav:false},
            { route: "reports", moduleId: 'reports/report-main', name:"reports", title:"Reports", nav:true, icon:"icon-diamond", hasChilds:true, childs: reports}
        ];

        routes = routes.concat(reports);
        config.map(routes);

        this.router = router;

        this.router.navigateWithParams = (routeName, params) => {
            let routerParams = this.router.routes.find(x => x.name === routeName);
            routerParams.data = params;
            this.router.navigate(routeName);
        }

    }

}
