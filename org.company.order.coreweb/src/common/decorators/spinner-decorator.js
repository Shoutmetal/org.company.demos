import {Spinner} from 'common/components/spinner';
import {Container} from 'aurelia-dependency-injection';

export function spin()
{
    return function(target)
    {
        let container = Container.instance;
        let spinner = container.get(Spinner);

        spinner.on();

        isReady(function(){
            spinner.off();
            
        });

        function isReady(f){
            /in/.test(document.readyState) ? setTimeout('isReady('+f+')',9) : f()
        }
    }
}
