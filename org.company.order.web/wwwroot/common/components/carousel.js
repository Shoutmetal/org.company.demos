import 'owl.carousel';
import 'jquery-zoom';


export class Carousel
{

    activate(items){
        this.products = items;
    }

    attached(){
        this.startCarousel();
        this.startFancybox();
    }

    startCarousel(){
        $(this.carousel).owlCarousel({
            pagination: false,
            navigation: true,
            items: 5,
            addClassActive: true,
            itemsCustom : [
                [0, 1],
                [320, 1],
                [480, 2],
                [660, 2],
                [700, 3],
                [768, 3],
                [992, 4],
                [1024, 4],
                [1200, 5],
                [1400, 5],
                [1600, 5]
            ],
        });
    }

    startFancybox(){
        $(".fancybox-fast-view").fancybox();
    
        $(".fancybox-button").fancybox({
            groupAttr: 'data-rel',
            prevEffect: 'none',
            nextEffect: 'none',
            closeBtn: true,
            helpers: {
                title: {
                    type: 'inside'
                }
            }
        });
    }


    detail(product){
        this.item = product;
    }
}