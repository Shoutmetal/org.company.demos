import {inject} from 'aurelia-framework';  

@inject(Element)
export class Menu
{
    constructor(element){
        this.element = element;
        this.current = null;
        this.selected = null;
        this.expanded = true;
    }

    configureRouter(config, router){
        this.router = router;
        config.title= "Demo Architecture";

        let reports = [
            { route: "order-report", moduleId: 'reports/order-report', name:"order-report", title:"Order Report", nav:true, icon:"icon-rocket", parentName:"reports"}
        ]

        let routes = [
            { route: "", moduleId: 'home/index', name:"home", title:"Home", nav:true, icon:"icon-home" },
            { route: "order-page-one", moduleId: 'order/order-page-one', name:"order-page-one", title:"Order", nav:true, icon:"icon-basket" },
            { route: "order-page-two", moduleId: 'order/order-page-two', name:"order-page-two", title:"Next", nav:false},
            { route: "reports", moduleId: 'reports/report-main', name:"reports", title:"Reports", nav:true, icon:"icon-diamond", hasChilds:true, childs: reports}
        ];

        routes = routes.concat(reports);
        config.map(routes);

        this.router.navigateWithParams = (routeName, params) => {
            let routerParams = this.router.routes.find(x => x.name === routeName);
            routerParams.data = params;
            this.router.navigate(routeName);
        }
    }

    attached(){
        let current = this.router.navigation.filter( item => item.isActive)[0];

        if(current.config.parentName){
            this.current = $(this.element).find("#" + current.config.parentName)
            this.current.addClass("start active open");
            this.current.find("span.arrow").addClass("open");
        }else{
            this.current = $(this.element).find("#" + current.config.name)
            this.current.addClass("start active");
        }


        if ($.cookie && $.cookie('sidebar_closed') === '1' && Metronic.getViewPort().width >= resBreakpointMd) {
            $('body').addClass('page-sidebar-closed');
            $('.page-sidebar-menu').addClass('page-sidebar-menu-closed');
        }
    }

    open(route){

        this.selected = this.selected || this.current;
        this.current = $(this.element).find("#" + route.config.name);


        if(route.config.hasChilds){

            let isOpen = this.current.hasClass("open");
            
            $(".page-sidebar-menu li").each(function(){
                $(this).removeClass("open") 
                $(this).find("ul").hide();
                $(this).find("span.arrow").removeClass("open");
            })

            if(isOpen) {
                this.current.removeClass("open") 
                this.current.find("ul").hide();
                this.current.find("span.arrow").removeClass("open");
            }
            else {
                this.current.addClass("open") 
                this.current.find("ul").show();
                this.current.find("span.arrow").addClass("open");
            }

            return true;
        }

        if((this.selected).is(this.current)) return true;

        this.selected.removeClass("start active open");
        this.selected.find(".arrow").removeClass("open");
        this.selected.find("ul").hide();
        this.current.addClass("start active");
        this.selected = this.current;

        return true;

    }

    openSub(route){
        this.selected.removeClass("start active open");
        this.selected.find(".arrow").removeClass("open");
        this.selected.find("ul").hide();

        this.selected = $(this.element).find("#" + route.config.name);
        this.selected.addClass("start active open");

        return true;
    }

    sliderToggle(){
        var body = $('body');
        var sidebar = $('.page-sidebar');
        var sidebarMenu = $('.page-sidebar-menu');
        $(".sidebar-search", sidebar).removeClass("open");

        if (body.hasClass("page-sidebar-closed")) {
            body.removeClass("page-sidebar-closed");
            sidebarMenu.removeClass("page-sidebar-menu-closed");
            if ($.cookie) {
                $.cookie('sidebar_closed', '0');
            }
        } else {
            body.addClass("page-sidebar-closed");
            sidebarMenu.addClass("page-sidebar-menu-closed");
            if (body.hasClass("page-sidebar-fixed")) {
                sidebarMenu.trigger("mouseleave");
            }
            if ($.cookie) {
                $.cookie('sidebar_closed', '1');
            }
        }

        $(window).trigger('resize');
    }

    getRoute(name){
        let current = this.router.navigation.filter( item => item.config.name == name)[0];

        return current;
    }
    
}