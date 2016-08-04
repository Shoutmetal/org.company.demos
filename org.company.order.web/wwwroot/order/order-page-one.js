import {inject, NewInstance} from 'aurelia-dependency-injection';  
import {ValidationController} from 'aurelia-validation';
import {Product} from './model';
import {Service} from './service';
import {Router} from 'aurelia-router';
import {Carousel} from 'common/components/carousel'

@inject(NewInstance.of(ValidationController), Service, Router, Carousel)
export class OrderPegeOne
{
    constructor(controller, service, router, carousel) {
        this.service = service;
        this.router = router;
        this.carousel = carousel;
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

    attached(){
        this.carousel.start();
    }
}