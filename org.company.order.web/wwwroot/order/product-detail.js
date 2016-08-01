import {inject} from 'aurelia-framework';
import {Service} from './service';

@inject(Service)
export class ProductDetail
{
    constructor(service){
        this.service = service;
    }

    add(){
        this.service.addToCart(this);
    }

    activate(product){
        $.extend(this, product)
    }

}