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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi9kZWNvcmF0b3JzL2xvZ2dlci1kZWNvcmF0b3IuanMiXSwibmFtZXMiOlsibG9nZ2VyIiwibWVzc2FnZSIsInRhcmdldCIsIm5hbWUiLCJkZXNjcmlwdG9yIiwiZm4iLCJ2YWx1ZSIsIm5ld0ZuIiwiY29uc29sZSIsImxvZyIsImFwcGx5IiwiYXJndW1lbnRzIiwiciIsImYiLCJ0ZXN0IiwiZG9jdW1lbnQiLCJyZWFkeVN0YXRlIiwic2V0VGltZW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBTyxhQUFTQSxNQUFULENBQWdCQyxPQUFoQixFQUNQO0FBQ0ksZUFBTyxVQUFTQyxNQUFULEVBQWlCQyxJQUFqQixFQUF1QkMsVUFBdkIsRUFDUDtBQUNJLGdCQUFJQyxLQUFLRCxXQUFXRSxLQUFwQjs7QUFFQSxnQkFBSUMsUUFBUyxTQUFUQSxLQUFTLEdBQVc7QUFDcEJDLHdCQUFRQyxHQUFSLENBQVksYUFBWixFQUEyQk4sSUFBM0I7QUFDQUssd0JBQVFDLEdBQVIsQ0FBWVIsV0FBVyxZQUF2QjtBQUNBSSxtQkFBR0ssS0FBSCxDQUFTUixNQUFULEVBQWlCUyxTQUFqQjtBQUNBSCx3QkFBUUMsR0FBUixDQUFZLFdBQVosRUFBeUJOLElBQXpCOztBQUVBUyxrQkFBRSxZQUFVO0FBQ1JKLDRCQUFRQyxHQUFSLENBQVksd0JBQVo7QUFDSCxpQkFGRDs7QUFJQSx5QkFBU0csQ0FBVCxDQUFXQyxDQUFYLEVBQWE7QUFBQyx5QkFBS0MsSUFBTCxDQUFVQyxTQUFTQyxVQUFuQixJQUErQkMsV0FBVyxPQUFLSixDQUFMLEdBQU8sR0FBbEIsRUFBc0IsQ0FBdEIsQ0FBL0IsR0FBd0RBLEdBQXhEO0FBQTREO0FBRTdFLGFBWkQ7O0FBY0FULHVCQUFXRSxLQUFYLEdBQW1CQyxLQUFuQjs7QUFFQSxtQkFBT0gsVUFBUDtBQUNILFNBckJEO0FBc0JIOztzQkF4QmVKLE0iLCJmaWxlIjoiY29tbW9uL2RlY29yYXRvcnMvbG9nZ2VyLWRlY29yYXRvci5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
