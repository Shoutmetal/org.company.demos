import {inject, NewInstance} from 'aurelia-dependency-injection';  
import {ValidationController} from 'aurelia-validation';
import {Product} from './model';
import {Service} from './service';
import {Router} from 'aurelia-router';

@inject(NewInstance.of(ValidationController), Service, Router)
export class OrderPegeOne
{
    constructor(controller, service, router) {
        this.service = service;
        this.router = router;
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