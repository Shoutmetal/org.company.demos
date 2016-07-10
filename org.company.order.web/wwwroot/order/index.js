import {inject, NewInstance} from 'aurelia-dependency-injection';  
import {ValidationController} from 'aurelia-validation';
import {Order} from './order-model';
import {Service} from './service';

@inject(NewInstance.of(ValidationController), Service)
export class Index
{
    constructor(controller, service) {
        this.order = new Order(controller);
        this.service = service;
    }

    attached(){
        this.service.getProducts().then( response => { this.products = response });
    }

    save(){
        let errors = this.order.controller.validate();
        console.log(errors);
    }
}