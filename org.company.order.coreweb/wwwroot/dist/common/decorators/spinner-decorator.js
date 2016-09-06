'use strict';

System.register(['common/components/spinner', 'aurelia-dependency-injection'], function (_export, _context) {
    "use strict";

    var Spinner, Container;
    function spin() {
        return function (target) {
            var container = Container.instance;
            var spinner = container.get(Spinner);

            spinner.on();

            isReady(function () {
                spinner.off();
            });

            function isReady(f) {
                /in/.test(document.readyState) ? setTimeout('isReady(' + f + ')', 9) : f();
            }
        };
    }

    _export('spin', spin);

    return {
        setters: [function (_commonComponentsSpinner) {
            Spinner = _commonComponentsSpinner.Spinner;
        }, function (_aureliaDependencyInjection) {
            Container = _aureliaDependencyInjection.Container;
        }],
        execute: function () {}
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi9kZWNvcmF0b3JzL3NwaW5uZXItZGVjb3JhdG9yLmpzIl0sIm5hbWVzIjpbInNwaW4iLCJ0YXJnZXQiLCJjb250YWluZXIiLCJDb250YWluZXIiLCJpbnN0YW5jZSIsInNwaW5uZXIiLCJnZXQiLCJTcGlubmVyIiwib24iLCJpc1JlYWR5Iiwib2ZmIiwiZiIsInRlc3QiLCJkb2N1bWVudCIsInJlYWR5U3RhdGUiLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFHTyxhQUFTQSxJQUFULEdBQ1A7QUFDSSxlQUFPLFVBQVNDLE1BQVQsRUFDUDtBQUNJLGdCQUFJQyxZQUFZQyxVQUFVQyxRQUExQjtBQUNBLGdCQUFJQyxVQUFVSCxVQUFVSSxHQUFWLENBQWNDLE9BQWQsQ0FBZDs7QUFFQUYsb0JBQVFHLEVBQVI7O0FBRUFDLG9CQUFRLFlBQVU7QUFDZEosd0JBQVFLLEdBQVI7QUFFSCxhQUhEOztBQUtBLHFCQUFTRCxPQUFULENBQWlCRSxDQUFqQixFQUFtQjtBQUNmLHFCQUFLQyxJQUFMLENBQVVDLFNBQVNDLFVBQW5CLElBQWlDQyxXQUFXLGFBQVdKLENBQVgsR0FBYSxHQUF4QixFQUE0QixDQUE1QixDQUFqQyxHQUFrRUEsR0FBbEU7QUFDSDtBQUNKLFNBZkQ7QUFnQkg7O29CQWxCZVgsSTs7OztBQUhSTyxtQiw0QkFBQUEsTzs7QUFDQUoscUIsK0JBQUFBLFMiLCJmaWxlIjoiY29tbW9uL2RlY29yYXRvcnMvc3Bpbm5lci1kZWNvcmF0b3IuanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
