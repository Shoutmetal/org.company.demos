import {required} from 'aurelia-validatejs' 
import {validateTrigger} from 'aurelia-validation';
import {ValidationController} from 'aurelia-validation';
import {Container} from 'aurelia-dependency-injection';

export class Product
{
    @required 
    productId = 0;

    @required 
    name = "";

    @required 
    price = 0.0;

    @required 
    imageUrl = ""

    @required 
    description = "";

    @required 
    quantity = 1;

    constructor(product) {
        $.extend(this, product);

        let container = Container.instance;
        let controller = container.registerTransient(ValidationController);

        this.controller = controller;
        this.controller.validateTrigger = validateTrigger.change;  
    }

    add(){
        localStorage.setItem("cart_store", JSON.stringify(this));
    }


}
