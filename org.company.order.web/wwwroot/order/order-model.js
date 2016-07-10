import {inject, NewInstance} from 'aurelia-dependency-injection';  
import {required, email} from 'aurelia-validatejs' 
import {validateTrigger} from 'aurelia-validation';

export class Order
{
    @required number = "";
    @required productId = "";
    @required quantity = "";


    constructor(controller) {
        this.products = [];
        this.controller = controller;
        this.controller.validateTrigger = validateTrigger.change;  
    }
}