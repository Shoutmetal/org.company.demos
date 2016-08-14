'use strict';

System.register(['services/spinner', 'aurelia-dependency-injection'], function (_export, _context) {
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
        setters: [function (_servicesSpinner) {
            Spinner = _servicesSpinner.Spinner;
        }, function (_aureliaDependencyInjection) {
            Container = _aureliaDependencyInjection.Container;
        }],
        execute: function () {}
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi9kZWNvcmF0b3JzL3NwaW5uZXItZGVjb3JhdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdPLGFBQVMsSUFBVCxHQUNQO0FBQ0ksZUFBTyxVQUFTLE1BQVQsRUFDUDtBQUNJLGdCQUFJLFlBQVksVUFBVSxRQUExQjtBQUNBLGdCQUFJLFVBQVUsVUFBVSxHQUFWLENBQWMsT0FBZCxDQUFkOztBQUVBLG9CQUFRLEVBQVI7O0FBRUEsb0JBQVEsWUFBVTtBQUNkLHdCQUFRLEdBQVI7QUFFSCxhQUhEOztBQUtBLHFCQUFTLE9BQVQsQ0FBaUIsQ0FBakIsRUFBbUI7QUFDZixxQkFBSyxJQUFMLENBQVUsU0FBUyxVQUFuQixJQUFpQyxXQUFXLGFBQVcsQ0FBWCxHQUFhLEdBQXhCLEVBQTRCLENBQTVCLENBQWpDLEdBQWtFLEdBQWxFO0FBQ0g7QUFDSixTQWZEO0FBZ0JIOztvQkFsQmUsSTs7OztBQUhSLG1CLG9CQUFBLE87O0FBQ0EscUIsK0JBQUEsUyIsImZpbGUiOiJjb21tb24vZGVjb3JhdG9ycy9zcGlubmVyLWRlY29yYXRvci5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
