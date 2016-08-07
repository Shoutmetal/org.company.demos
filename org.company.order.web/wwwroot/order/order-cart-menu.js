import {inject, computedFrom} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {Storage} from 'services/storage'
import {Router} from 'aurelia-router';

@inject(EventAggregator, Storage, Router)
export class CartMenu
{
    constructor(event, storage, router){
        this.event = event;
        this.storage = storage;
        this.router = router;
        this.items = this.storage.get("cart");
    }

    attached()
    {
        this.event.subscribe("storage:cart", (items) => {
            this.items = items;
        });
    }

    @computedFrom("items")
    get totalPrice(){
        let items = this.items;
        return items.reduce( (sum, current) => current.quantity * current.price + sum , 0);
    }

    delete(id){
        this.storage.delete("cart", (item) => { return item.productId === id })
    }

    checkout(){
        this.router.navigateWithParams("order-checkout", this.items);
        
    }

    cartshop(){
        this.router.navigateWithParams("order-cart-shop", this.items);
    }
  
}