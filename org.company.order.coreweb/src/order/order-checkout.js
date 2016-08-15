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
        this.confirmed = false;
    }

    attached(){
        this.totalPrice =  this.products.reduce( (sum, current) => current.quantity * current.price + sum , 0);
    }

    confirm(){
        let order = { orderId:0, orderNumber:"", customerId: 1,  products: this.products};

       // for(let i = 0; i<10;i++)
        this.service.saveOrder(order).then((response) => {
            this.confirmed = response;
            if(response) this.storage.clear("cart");
        })

    }

    cancel(){
        this.router.navigate("order-cart-shop");
    }

}