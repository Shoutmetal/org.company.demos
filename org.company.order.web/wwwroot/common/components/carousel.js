import {inject, bindable, TaskQueue} from 'aurelia-framework'
import 'owl.carousel';

@bindable({name:"items"})
@bindable({name:"path"})
@inject(TaskQueue)
export class Carousel
{
    constructor(taskQueue){
        this.taskQueue = taskQueue;
    }

    attached(){
        setTimeout(()=> {
            this.startCarousel();
        }, 1000)

    }

    startCarousel(){

        $(this.carousel).owlCarousel({
            nav: true,
            items: 5,
            responsive:{
                0:   { items:1 },
                480: { items:2 },
                700: { items:3 },
                992: { items:4 },
                1200:{ items:5 }
            }
        });


    }


}