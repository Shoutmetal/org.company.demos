import {inject} from 'aurelia-framework';  
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(Element, EventAggregator)
export class NavBar
{
    constructor(element, event){
        this.element = element;
        this.event = event;
        this.current = null;
        this.selected = null;
        this.expanded = true;
        this.route = null;
    }

    activate(router){
        this.router = router;
    }

    attached(){
        this.defaultRoute();
        this.cookieMenu();

        this.event.subscribe("router:navigation:success", (result) => {

            if(this.route && !this.route.config.parentName){
                let route = this.route

                this.selected = this.selected || this.current;
                this.current = $(this.element).find("#" + route.config.name);

                if((this.selected).is(this.current)) return true;

                this.selected.removeClass("start active open");
                this.selected.find(".arrow").removeClass("open");
                this.selected.find("ul").hide();
                this.current.addClass("start active");
                this.selected = this.current;
            }

        }); 
    }

    defaultRoute(){
        let current = this.router.navigation.filter( item => item.isActive)[0];

        if(current.config.parentName){
            this.current = $(this.element).find("#" + current.config.parentName)
            this.current.addClass("start active open");
            this.current.find("span.arrow").addClass("open");
        }else{
            this.current = $(this.element).find("#" + current.config.name)
            this.current.addClass("start active");
        }
    }

    cookieMenu(){

        let isClosed = sessionStorage.getItem("sidebar_closed")

        if (isClosed === '1' ) {
            $('body').addClass('page-sidebar-closed');
            $('.page-sidebar-menu').addClass('page-sidebar-menu-closed');
        }
    }

    open(route){
        this.route = route;

        if(route.config.hasChilds){

            this.selected = this.selected || this.current;
            this.current = $(this.element).find("#" + route.config.name);

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

        }

        return true;
    }

    openSub(route){
        this.route = route;

        if((this.selected).is(this.current)) return true;

        this.selected.removeClass("start active open");
        this.selected.find(".arrow").removeClass("open");
        this.selected.find("ul").hide();

        this.selected = $(this.element).find("#" + route.config.parentName);
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
            sessionStorage.setItem("sidebar_closed", "0")
        } else {
            body.addClass("page-sidebar-closed");
            sidebarMenu.addClass("page-sidebar-menu-closed");
            if (body.hasClass("page-sidebar-fixed")) {
                sidebarMenu.trigger("mouseleave");
            }
            sessionStorage.setItem("sidebar_closed", "1")
        }

        $(window).trigger('resize');
    }

    getRoute(name){
        let current = this.router.navigation.filter( item => item.config.name == name)[0];

        return current;
    }
}