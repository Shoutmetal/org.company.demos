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

}