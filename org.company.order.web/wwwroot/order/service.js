import {inject} from 'aurelia-framework';
import {GenericService} from 'services/generic-service';

@inject(GenericService)
export class Service
{
    constructor(service){
        this.service = service;
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
}