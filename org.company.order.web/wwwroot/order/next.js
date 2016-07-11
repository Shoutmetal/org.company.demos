import {inject} from 'aurelia-framework';
import {Service} from './service';

@inject(Service)
export class Next
{
    constructor(service){
        this.service = service;
        this.orders = [];
        this.client = {}
    }

    activate(params){

        this.products = params.order.products;

        this.service.getOrdersByClient(params.order.clientId).then(response => { 
            this.orders = response 
            this.client = this.orders[0].client;

            this.total = this.products.reduce( (sum, current) => { return sum + current } , 0 );
        });

        
    }

    save(){
        
    }

}