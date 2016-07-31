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

