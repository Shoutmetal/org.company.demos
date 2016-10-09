import {bindable, bindingMode} from 'aurelia-framework';

@bindable("name")
@bindable("path")
@bindable("target")
@bindable({ name: "model", defaultBindingMode: bindingMode.twoWay})
export class FancyboxDetailView
{
    attached(){
        $(".fancybox-fast-view").fancybox();
    }
}