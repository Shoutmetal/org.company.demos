import {GenericService} from 'services/generic-service';
import {Container} from 'aurelia-dependency-injection';

export function action(settings)
{

    return function(target, name, descriptor)
    {
        let fn = descriptor.value;

        let newFn  = function() {
           
            fn.apply(target, arguments);
            let container = Container.instance;
            let service = container.get(GenericService);

        };

        descriptor.value = newFn;

        return descriptor;
    }
}

export function controller(controllerName)
{
    return function(target){
       
    }
}

