import {inject, NewInstance} from 'aurelia-dependency-injection';  
import {ValidationController} from 'aurelia-validation';
import {Order, Product} from './model';
import {Service} from './service';
import {Router} from 'aurelia-router';


@inject(NewInstance.of(ValidationController), Service, Router)
export class Index
{
    constructor(controller, service, router) {
        this.order = new Product(controller);
        this.service = service;
        this.router = router;
        this.orderProducts = [];
        this.errorMessage = false;
        
    }

    attached(){
        this.service.getProducts().then( response => { this.products = response });
    }

    next(){
        if(!this.orderProducts.length) { 
            this.errorMessage = true;
            return;
        }
        this.errorMessage = false;
        let order = new Order(1, this.orderProducts);
        this.router.navigateWithParams("order-page-two", order);
    }

    addProduct(){
        if(!this.order.controller.validate().length){
            let product = this.products.filter(p => p.productId == this.order.productId)[0];
            product.quantity = this.order.quantity;
            this.orderProducts.push(product);
            this.clean();
        }
    }

    clean(){
        this.order.productId = "";
        this.order.quantity = "";
    }
}