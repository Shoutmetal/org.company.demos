import {inject} from 'aurelia-framework';
import {Service} from './service';
import {Carousel} from 'common/components/carousel'

@inject(Service, Carousel)
export class ProductDetail
{
    constructor(service, carousel){
        this.service = service;
        this.carousel = carousel;
    }

    attached(){
        if(this.productId === this.first.productId)
            this.carousel.start();
    }

    add(){
        this.service.addToCart(this);
    }

    bind(context)
    {
        this.first = context.carousel.first;
    }

    activate(product){
        $.extend(this, product)
    }

}