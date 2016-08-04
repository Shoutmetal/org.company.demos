import {bindable, computedFrom} from 'aurelia-framework'
import 'owl.carousel';

@bindable({name:"items"})
@bindable({name:"path"})
export class Carousel
{
    detached()
    {
        $(this.carousel).trigger('destroy.owl.carousel');
    }

    start(){

        $(this.carousel).trigger('destroy.owl.carousel');
        $(this.carousel).owlCarousel({
            nav: true,
            items: 5,
            onInitialized: this.callback,
            responsive:{
                0:   { items:1 },
                480: { items:2 },
                700: { items:3 },
                992: { items:4 },
                1200:{ items:5 }
            }

        });
        
    }

    @computedFrom('items')
    get first(){
        return this.items[0]
    }

    @computedFrom('items')
    get last(){
        return this.items[this.items.length - 1];
    }
}