import {inject, computedFrom} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {Router} from 'aurelia-router';
import {Service} from 'order/service'

@inject(EventAggregator, Router, Service)
export class OrderCartMenu
{
    constructor(event, router, service){
        this.event = event;
        this.router = router;
        this.service = service;
        this.items = this.service.getStorage("cart");
    }

    attached()
    {
        this.event.subscribe(this.service.getEventName("cart"), (items) => {
            this.items = items;
        });
    }

    @computedFrom("items")
    get totalPrice(){
        let items = this.items;
        return items.reduce( (sum, current) => current.quantity * current.price + sum , 0);
    }

    delete(id){
        this.service.deleteStorage("cart", (item) => { return item.productId === id })
      
    }

    checkout(){
        this.router.navigateWithParams("order-checkout", this.items);
        
    }

    cartshop(){
        this.router.navigateWithParams("order-cart-shop", this.items);
    }
  
}