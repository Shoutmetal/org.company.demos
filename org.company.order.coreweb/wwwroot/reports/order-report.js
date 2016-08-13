import {inject} from 'aurelia-framework';
import {Service} from './service';

@inject(Service)
export class OrderSearch
{
    constructor(service){
        this.service = service;
    }

    attached(){
        this.service.getOrdersByCustomerId(1).then( response => 
        { 
            this.orders = response.sort((a,b) => b.orderId - a.orderId ) ;
        });

    }
}