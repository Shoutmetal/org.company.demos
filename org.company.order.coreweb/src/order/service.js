import {inject} from 'aurelia-framework';
import {GenericService} from 'services/service-generic';
import {AuthService} from 'aurelia-authentication';
import {Storage} from 'services/service-storage';

@inject(GenericService, Storage, AuthService)
export class Service
{
    constructor(service, storage, authService){
        this.service = service;
        this.storage = storage;
        this.authService = authService;
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

    addToCart(product, storageName){
        let condition = (prod) => { return prod.productId === product.productId };
        let exists = this.storage.exists(storageName, condition);

        if(!exists)
            this.storage.save(storageName, product);
        else
            this.storage.update(storageName, product, condition);
    }

    existStorage(name, condition){
        return this.storage.exists(name, condition);
    }

    cleanStorage(name){
        this.storage.clear(name);
    }

    getStorage(name){
        return this.storage.getStorage(name);
    }

    deleteStorage(name, condition){
        this.storage.delete(name, condition);
    }

    getEventName(key){
        return this.storage.getEventName(key)
    }

    getUserProfile(){
        return this.authService.getMe().then( response => response );
    }

}