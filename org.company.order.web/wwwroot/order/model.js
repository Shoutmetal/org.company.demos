import {inject, NewInstance} from 'aurelia-dependency-injection';  
import {required, length} from 'aurelia-validatejs' 
import {validateTrigger} from 'aurelia-validation';

export class Product
{

    @required 
    productId = "";

    @required 
    quantity = "";

    constructor(controller) {

        this.controller = controller;
        this.controller.validateTrigger = validateTrigger.change;  
    }
}


export class Order
{
    constructor(customerId, products){
        this.customerId = customerId;
        this.products = products;
    }
}