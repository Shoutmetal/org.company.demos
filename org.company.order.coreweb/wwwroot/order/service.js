import {inject} from 'aurelia-framework';
import {GenericService} from 'services/generic-service';
import {Storage} from 'services/storage';

@inject(GenericService, Storage)
export class Service
{
    constructor(service, storage){
        this.service = service;
        this.storage = storage;
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
        let condition = (prod) => { return prod.productId === product.productId };
        let storageName = "cart";
        let exists = this.storage.exists(storageName, condition);

        if(!exists)
            this.storage.save(storageName, product);
        else
            this.storage.update(storageName, product, condition);
    }

}