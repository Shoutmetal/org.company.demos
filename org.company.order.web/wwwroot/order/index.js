import {inject, NewInstance} from 'aurelia-dependency-injection';  
import {ValidationController} from 'aurelia-validation';
import {Order} from './order';

@inject(NewInstance.of(ValidationController))
export class Index
{
    constructor(controller) {
        this.order = new Order(controller);
    }

    save(){
        let errors = this.order.controller.validate();
        console.log(errors);
    }
}