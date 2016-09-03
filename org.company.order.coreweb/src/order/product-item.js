import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {Service} from './service';

@inject(Service, EventAggregator)
export class ProductItem
{
    constructor(service, event){
        this.service = service;
        this.event = event;
        this.condition = (prod) => { return prod.productId === this.product.productId };
    }

    attached(){
        this.isActive =  this.service.existStorage("cart", this.condition)

        this.event.subscribe(this.service.getEventName("cart"), () => {
            let exists = this.service.existStorage("cart", this.condition)
            this.isActive = exists ? true : false;
        })
    }

    activate(item){
        
        this.product = item;
    }

    add(){
        this.service.addToCart(this.product, "cart")
    }

}