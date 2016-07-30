import 'bootstrap-touchspin';
import {bindable, bindingMode} from 'aurelia-framework';

@bindable({ name: "value", defaultBindingMode: bindingMode.twoWay})
export class NumberSpin
{

    attached(){
        this.startTouchSpin();
        this.numberChanged();
    }

    numberChanged(){
        let self = this;

        $(this.productQuantity).change((element) => {
            self.value = element.target.value;
        });
    }

    startTouchSpin(){
        $(this.productQuantity).TouchSpin({
            buttondown_class: "btn quantity-down",
            buttonup_class: "btn quantity-up"
        });
        $(".quantity-down").html("<i class='fa fa-angle-down'></i>");
        $(".quantity-up").html("<i class='fa fa-angle-up'></i>");
    }

}