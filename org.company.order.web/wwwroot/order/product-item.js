import {inject} from 'aurelia-framework';
import {Service} from './service';

@inject(Service)
export class ProductItem
{
    constructor(service){
        this.service = service;
    }

    activate(item){
        this.product = item;
    }

    add(){
        this.service.addToCart(this.product)
    }

}