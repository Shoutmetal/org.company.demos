import {required} from 'aurelia-validatejs' 
import {validateTrigger} from 'aurelia-validation';
import {ValidationController} from 'aurelia-validation';
import {Container} from 'aurelia-dependency-injection';
import {computedFrom} from 'aurelia-framework'

export class Product
{
    @required 
    productId = 0;

    @required 
    name = "";

    @required 
    description = "";

    @required 
    price = 0.0;

    @required 
    imageUrl = ""

    productTypeId = 0

    @required 
    quantity = 1;;

    inventories = [];

    constructor(product) {
        
        $.extend(this, product);

        let container = Container.instance;
        let controller = container.registerTransient(ValidationController);

        this.controller = controller;
        this.controller.validateTrigger = validateTrigger.change;  
    }

}
