export function logger(message)
{
    return function(target, name, descriptor)
    {
        let fn = descriptor.value;

        let newFn  = function() {
            console.log('starting %s', name);
            console.log(message || "no message");
            fn.apply(target, arguments);
            console.log('ending %s', name);
           
            r(function(){
                console.log("all the content loaded")
            });

            function r(f){/in/.test(document.readyState)?setTimeout('r('+f+')',9):f()}

        };

        descriptor.value = newFn;

        return descriptor;
    }
}

export function loader(isActivate)
{
    return function(target){
        let loader =isActivate ? function(){
            console.log("loading...");

            r(function(){
                console.log("done!")
            });

            function r(f){/in/.test(document.readyState)?setTimeout('r('+f+')',9):f()}
        }() : '';
    }
}