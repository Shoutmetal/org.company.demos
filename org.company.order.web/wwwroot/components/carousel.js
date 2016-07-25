import 'owl.carousel';
import 'jquery-zoom';
import 'bootstrap-touchspin'

export class Carousel
{
    constructor(){
       
    }

    attached(){
        $(".owl-carousel5").owlCarousel({
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

        $('.product-main-image').zoom({url: $('.product-main-image img').attr('data-BigImgSrc')});

        $(".product-quantity .form-control").TouchSpin({
            buttondown_class: "btn quantity-down",
            buttonup_class: "btn quantity-up"
        });
        $(".quantity-down").html("<i class='fa fa-angle-down'></i>");
        $(".quantity-up").html("<i class='fa fa-angle-up'></i>");

        if (!jQuery.fancybox) {
            return;
        }
        
        jQuery(".fancybox-fast-view").fancybox();

        if (jQuery(".fancybox-button").size() > 0) {            
            jQuery(".fancybox-button").fancybox({
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

            $('.fancybox-video').fancybox({
                type: 'iframe'
            });
        }
    }
}