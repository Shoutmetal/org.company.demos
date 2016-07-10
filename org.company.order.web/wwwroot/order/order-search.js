import {inject} from 'aurelia-framework';
import {Service} from './service';

@inject(Service)
export class OrderSearch
{
    constructor(service){
        this.service = service;
    }

    attached(){
        this.service.getOrdersByClient(1).then(response => { this.orders = response });

    }
}