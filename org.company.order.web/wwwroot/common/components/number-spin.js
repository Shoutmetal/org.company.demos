import 'bootstrap-touchspin';
import {bindable, bindingMode} from 'aurelia-framework';

@bindable({ name: "value", defaultBindingMode: bindingMode.twoWay})
export class NumberSpin
{

    attached(){
        this.start();

        let self = this;

        $(this.quantity).on("change",(element) => {
            self.value = element.target.value;
        });
    }

    start(){
        $(this.quantity).TouchSpin({
            buttondown_class: "btn quantity-down",
            buttonup_class: "btn quantity-up"
        });
        $(".quantity-down").html("<i class='fa fa-angle-down'></i>");
        $(".quantity-up").html("<i class='fa fa-angle-up'></i>");
    }

}