import {customAttribute, inject, bindingMode} from 'aurelia-framework';

@customAttribute('focus', bindingMode.twoWay)
@inject(Element)
export class Carousel
{
    constructor(element) {
        this.element = element;
    }
}