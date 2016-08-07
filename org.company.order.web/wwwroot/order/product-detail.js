import {inject} from 'aurelia-framework';
import {Service} from './service';
import {Carousel} from 'common/components/carousel'

@inject(Service, Carousel)
export class ProductDetail
{
    constructor(service, carousel){
        this.product = {};
        this.service = service;
        this.carousel = carousel;
    }

    attached(){
        if(this.product.productId === this.first.productId)
            this.carousel.start();
    }

    add(){
        this.service.addToCart(this.product);
        parent.$.fancybox.close();
    }

    bind(context)
    {
        this.first = context.carousel.first;
    }

    activate(product){
        $.extend(this.product, product)
    }
}