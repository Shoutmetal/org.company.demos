'use strict';

System.register([], function (_export, _context) {
    "use strict";

    function logger(message) {
        return function (target, name, descriptor) {
            var fn = descriptor.value;

            var newFn = function newFn() {
                console.log('starting %s', name);
                console.log(message || "no message");
                fn.apply(target, arguments);
                console.log('ending %s', name);

                r(function () {
                    console.log("all the content loaded");
                });

                function r(f) {
                    /in/.test(document.readyState) ? setTimeout('r(' + f + ')', 9) : f();
                }
            };

            descriptor.value = newFn;

            return descriptor;
        };
    }

    _export('logger', logger);

    return {
        setters: [],
        execute: function () {}
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi9kZWNvcmF0b3JzL2xvZ2dlci1kZWNvcmF0b3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBTyxhQUFTLE1BQVQsQ0FBZ0IsT0FBaEIsRUFDUDtBQUNJLGVBQU8sVUFBUyxNQUFULEVBQWlCLElBQWpCLEVBQXVCLFVBQXZCLEVBQ1A7QUFDSSxnQkFBSSxLQUFLLFdBQVcsS0FBcEI7O0FBRUEsZ0JBQUksUUFBUyxTQUFULEtBQVMsR0FBVztBQUNwQix3QkFBUSxHQUFSLENBQVksYUFBWixFQUEyQixJQUEzQjtBQUNBLHdCQUFRLEdBQVIsQ0FBWSxXQUFXLFlBQXZCO0FBQ0EsbUJBQUcsS0FBSCxDQUFTLE1BQVQsRUFBaUIsU0FBakI7QUFDQSx3QkFBUSxHQUFSLENBQVksV0FBWixFQUF5QixJQUF6Qjs7QUFFQSxrQkFBRSxZQUFVO0FBQ1IsNEJBQVEsR0FBUixDQUFZLHdCQUFaO0FBQ0gsaUJBRkQ7O0FBSUEseUJBQVMsQ0FBVCxDQUFXLENBQVgsRUFBYTtBQUFDLHlCQUFLLElBQUwsQ0FBVSxTQUFTLFVBQW5CLElBQStCLFdBQVcsT0FBSyxDQUFMLEdBQU8sR0FBbEIsRUFBc0IsQ0FBdEIsQ0FBL0IsR0FBd0QsR0FBeEQ7QUFBNEQ7QUFFN0UsYUFaRDs7QUFjQSx1QkFBVyxLQUFYLEdBQW1CLEtBQW5COztBQUVBLG1CQUFPLFVBQVA7QUFDSCxTQXJCRDtBQXNCSDs7c0JBeEJlLE0iLCJmaWxlIjoiY29tbW9uL2RlY29yYXRvcnMvbG9nZ2VyLWRlY29yYXRvci5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
