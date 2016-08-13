import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {Service} from './service';
import {Storage} from 'services/storage'

@inject(Service, Storage, EventAggregator)
export class ProductItem
{
    constructor(service, storage, event){
        this.service = service;
        this.storage = storage;
        this.event = event;
        this.condition = (prod) => { return prod.productId === this.product.productId };
        
    }

    attached(){
        this.isActive = this.storage.exists("cart",  this.condition );

        this.event.subscribe("storage:cart", () => {
            let exists = this.storage.exists("cart",  this.condition);
            this.isActive = exists ? true : false;
        })
    }

    activate(item){
        
        this.product = item;
    }

    add(){
        this.service.addToCart(this.product)
    }

}