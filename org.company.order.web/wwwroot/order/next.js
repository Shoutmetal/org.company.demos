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

        console.log(this.products)

        this.service.getClientById(params.order.clientId).then(response => { 

            this.client = response

            this.total = this.products.reduce( (sum, current) => { return sum + parseFloat(current.price) } , 0 );
        });

        
    }

    save(){
        
    }

}