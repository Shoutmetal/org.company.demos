import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router'
import {Service} from 'order/service';


@inject (Service, Router)
export class OrderCheckout
{
    constructor(service, router){
        this.service = service;
        this.router = router;
        this.products = this.service.getStorage("cart");
        this.totalPrice = 0;
        this.confirmed = false;
    }

    attached(){
        this.totalPrice =  this.products.reduce( (sum, current) => current.quantity * current.price + sum , 0);
        this.service.getUserProfile().then( user => { this.user = user; });
    }

    confirm(){
        let order = { orderId:0, orderNumber:"", customerId: this.user.userid , products: this.products};

        this.service.saveOrder(order).then((response) => {
            this.confirmed = response.isSuccess;
            if(response) this.service.cleanStorage("cart");
        })

    }

    cancel(){
        this.router.navigate("order-cart-shop");
    }

}