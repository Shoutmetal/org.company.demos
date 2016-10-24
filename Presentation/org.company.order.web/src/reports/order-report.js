import {inject} from 'aurelia-framework';
import {Service} from 'reports/service';

@inject(Service)
export class OrderSearch
{
    constructor(service){
        this.service = service;
        this.valueObject();
    }

    valueObject()
    {
        let getOrders = (user) => {
            let userid = user.userid;

            return this.service.getOrdersByCustomerId(userid);
        }

        let orderByDesc = (orders) => {
            console.log(orders);
            this.orders = orders.sort((a,b) => b.orderId - a.orderId );
        }

        this.service.getUserProfile()
               .then(getOrders)
               .then(orderByDesc)
               .catch( err => console.log(err))
    }

    

    
}