import {customAttribute, inject} from 'aurelia-framework';
import 'jquery-slimscroll';

@customAttribute("slimscroll")
@inject(Element)
export class SlimScroll
{
    constructor(element){
        this.element = element;
    }

    attached(){
        var height;
        if ($(this.element).attr("data-height"))
            height = $(this.element).attr("data-height");
        else
            height = $(this.element).css('height');
            
        $(this.element).slimScroll({
            allowPageScroll: true, // allow page scroll when the element scroll is ended
            size: '7px',
            color: '#bbb',
            railColor: '#eaeaea',
            position:'right',
            height: height,
            alwaysVisible: true,
            railVisible: true,
            disableFadeOut: true
        });
      
    }
}