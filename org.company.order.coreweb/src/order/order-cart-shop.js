import {inject, NewInstance} from 'aurelia-dependency-injection';  
import {ValidationController} from 'aurelia-validation';
import {Product} from 'order/model';
import {Service} from 'order/service';

@inject(NewInstance.of(ValidationController), Service)
export class OrderPegeOne
{
    constructor(controller, service) {
        this.service = service;
        this.init();
    }

    init(){
        this.service.getProducts().then( response => 
        { 
            let items = [];
            response.forEach((item) => {
                items.push(new Product(item))
            });

            this.products = items;
           
        });
    }
}