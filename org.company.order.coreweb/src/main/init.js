import {AppInsights} from 'services/application-insight';
import {AuthenticateStep} from 'aurelia-authentication';


export class Menu
{

    configureRouter(config, router){
        config.title= "Demo Architecture";
        config.addPipelineStep('authorize', AuthenticateStep);
        config.addPipelineStep('modelbind', AppInsights);

        let reports = [
            { route: "order-report", moduleId: 'reports/order-report', name:"order-report", title:"Order Report", nav:true, icon:"icon-pie-chart", parentName:"reports"}
        ];

        let order = [
            { route: "order-cart-shop", moduleId: 'order/order-cart-shop', name:"order-cart-shop", title:"Cart Shop", nav:true, icon:"icon-basket", parentName:"order" },
            { route: "order-cart-detail", moduleId: 'order/order-cart-detail', name:"order-cart-detail", title:"Cart Detail", nav:true, icon:"icon-bag", parentName:"order"},
            { route: "order-checkout", moduleId: 'order/order-checkout', name:"order-checkout", title:"Checkout", nav:true, icon:"icon-check", parentName:"order"}
        ]

        let demoInfo = [
         { route: "general-information", moduleId: 'demo/general-information', name:"general-information", title:"General Information", nav:true, icon:"icon-paper-plane", parentName:"demo" }
        ]

        let routes = [
            { route: "", moduleId: 'home/index', name:"home", title:"Home", nav:true, icon:"icon-home" },
            { route: "order", moduleId: 'home/index', name:"order", title:"Order", nav:true, icon:"icon-handbag", hasChilds:true, childs: order},
            { route: "reports", moduleId: 'home/index', name:"reports", title:"Reports", nav:true, icon:"icon-chart", hasChilds:true, childs: reports},
            { route: "demo", moduleId: 'home/index', name:"demo", title:"About Demo", nav:true, icon:"icon-info", hasChilds:true, childs: demoInfo}
        ];

        routes = routes.concat(reports);
        routes = routes.concat(order);
        routes = routes.concat(demoInfo);
        config.map(routes);

        this.router = router;

        this.router.navigateWithParams = (routeName, params) => {
            let routerParams = this.router.routes.find(x => x.name === routeName);
            routerParams.data = params;
            this.router.navigate(routeName);
        }

    }

}
