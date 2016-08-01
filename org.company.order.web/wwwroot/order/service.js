import {inject} from 'aurelia-framework';
import {GenericService} from 'services/generic-service';

@inject(GenericService)
export class Service
{
    constructor(service){
        this.service = service;
        localStorage.setItem("cart_store", "[]")
    }

    getOrdersByCustomerId(id){
        return this.service.get("order/orders/" + id).then(response => response );
    }

    getOrderById(id){
        return this.service.get("order/order/" + id).then(response => response );
    }   

    getProducts(param){
        return this.service.get("order/products").then(response => response );
    } 

    getCustomerById(id){
        return this.service.get("customer/customer/"+ id).then(response => response );
    }

    saveOrder(order)
    {
        return this.service.post("order/save", order).then( response => response );
    }

    addToCart(product){

        let storage = localStorage.getItem("cart_store")
        let cartShopStorage = JSON.parse(storage);
        let exists = cartShopStorage.filter(p => p.productId === product.productId);

        if(exists.length) return;

        cartShopStorage.push(product)
        localStorage.setItem("cart_store", JSON.stringify(cartShopStorage));
    }

}