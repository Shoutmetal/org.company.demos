import {AppInsights} from 'services/application-insight';

export class Menu
{

    configureRouter(config, router){
        config.title= "Demo Architecture";
        config.addPipelineStep('modelbind', AppInsights);

        let reports = [
            { route: "order-report", moduleId: 'reports/order-report', name:"order-report", title:"Order Report", nav:true, icon:"icon-pie-chart", parentName:"reports"}
        ];

        let order = [
            { route: "order-start-page", moduleId: 'order/order-start-page', name:"order-start-page", title:"Cart Shop", nav:true, icon:"icon-basket", parentName:"order" },
            { route: "order-checkout", moduleId: 'order/order-checkout', name:"order-checkout", title:"Checkout", nav:true, icon:"icon-check", parentName:"order"},
            { route: "order-cart-shop", moduleId: 'order/order-cart-shop', name:"order-cart-shop", title:"Cart Details", nav:true, icon:"icon-bag", parentName:"order"}
        ]

        let routes = [
            { route: "", moduleId: 'home/index', name:"home", title:"Home", nav:true, icon:"icon-home" },
            { route: "order", moduleId: 'reports/report-main', name:"order", title:"Order", nav:true, icon:"icon-handbag", hasChilds:true, childs: order},
            { route: "reports", moduleId: 'reports/report-main', name:"reports", title:"Reports", nav:true, icon:"icon-chart", hasChilds:true, childs: reports}
        ];

        routes = routes.concat(reports);
        routes = routes.concat(order);
        config.map(routes);

        this.router = router;

        this.router.navigateWithParams = (routeName, params) => {
            let routerParams = this.router.routes.find(x => x.name === routeName);
            routerParams.data = params;
            this.router.navigate(routeName);
        }

    }

}
