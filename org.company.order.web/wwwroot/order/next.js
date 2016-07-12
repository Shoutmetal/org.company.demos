import {inject} from 'aurelia-framework';
import {Service} from './service';

@inject(Service)
export class Next
{
    constructor(service){
        this.service = service;
        this.client = {}
    }

    activate(params, router){
        this.order = router.data;
        this.products = this.order.products;
        this.service.getClientById(this.order.clientId).then(response => { 
            this.client = response
            this.total = this.products.reduce( (sum, current) => { return sum + parseFloat(current.price) } , 0 );
        });
    }

    save(){
        this.service.saveOrder(this.order);
    }

}