import {bindable, bindingMode} from 'aurelia-framework';

let count = 1;

@bindable({ name: "spin"})
export class Spinner {

    on(){
        count++
        this.calculate()
    }

    off(){
        count--
        this.calculate()
    }

    spinChanged(spin){
        if(spin)
            count++
        else
            count--

        this.calculate()
    }

    calculate(){
        if(count === 0)
            $("#spinner").hide();
        else
            $("#spinner").is(":visible") ? '' : $("#spinner").show();
    }


}