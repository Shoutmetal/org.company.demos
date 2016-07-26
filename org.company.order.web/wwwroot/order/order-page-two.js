import {inject} from 'aurelia-framework';
import {Service} from './service';

@inject(Service)
export class Next
{
    constructor(service){
        this.service = service;
        this.customer = {}
    }

    activate(params, router){
        this.order = router.data;
        this.products = this.order.products;
        this.service.getCustomerById(this.order.customerId).then(response => { 
            this.customer = response
            this.total = this.products.reduce( (sum, current) => { return sum + parseFloat(current.price) } , 0 );
        });
    }

    save(){
        this.service.saveOrder(this.order).then((response) => {
            
            console.log("save successful -> ", response)

        });
    }

}