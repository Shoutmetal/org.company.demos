import {inject} from 'aurelia-framework';
import {GenericService} from 'services/generic-service';

@inject(GenericService)
export class Service
{
    constructor(service){
        this.service = service;
    }

    save(order){
        return this.service.post("order/save", order).then(response => response);
    }

    getOrdersByClient(id){
        return this.service.get("order/orders/" + id).then(response => response );
    }

    getOrderById(id){
        return this.service.get("order/order/" + id).then(response => response );
    }   

    getProducts(){
        return this.service.get("order/products").then(response => response );
    } 

    getClientById(id){
        return this.service.get("client/client/"+ id).then(response => response );
    }

}