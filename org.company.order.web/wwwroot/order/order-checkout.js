import {inject} from 'aurelia-framework';
import {Storage} from 'services/storage';
import {Router} from 'aurelia-router'
import {Service} from './service';

@inject(Storage, Service, Router)
export class OrderCheckout
{
    constructor(storage, service, router){
        this.storage = storage;
        this.service = service;
        this.router = router;
        this.products = this.storage.get("cart");
        this.totalPrice = 0;
    }

    attached(){
        this.totalPrice =  this.products.reduce( (sum, current) => current.quantity * current.price + sum , 0);
    }

    confirm(){
        console.log(this.products)
    }

    cancel(){
        this.storage.clear("cart");
        this.router.navigate("order-start-page");
    }

}