import {bindable} from 'aurelia-framework'

@bindable("name")
@bindable("imageUrl")
export class FancyboxImageView
{
    attached(){
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
}