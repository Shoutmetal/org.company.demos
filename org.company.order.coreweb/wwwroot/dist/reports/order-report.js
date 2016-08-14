'use strict';

System.register(['aurelia-framework', './service'], function (_export, _context) {
    "use strict";

    var inject, Service, _dec, _class, OrderSearch;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
        }, function (_service) {
            Service = _service.Service;
        }],
        execute: function () {
            _export('OrderSearch', OrderSearch = (_dec = inject(Service), _dec(_class = function () {
                function OrderSearch(service) {
                    _classCallCheck(this, OrderSearch);

                    this.service = service;
                }

                OrderSearch.prototype.attached = function attached() {
                    var _this = this;

                    this.service.getOrdersByCustomerId(1).then(function (response) {
                        _this.orders = response.sort(function (a, b) {
                            return b.orderId - a.orderId;
                        });
                    });
                };

                return OrderSearch;
            }()) || _class));

            _export('OrderSearch', OrderSearch);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcG9ydHMvb3JkZXItcmVwb3J0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFRLGtCLHFCQUFBLE07O0FBQ0EsbUIsWUFBQSxPOzs7bUNBR0ssVyxXQURaLE9BQU8sT0FBUCxDO0FBR0cscUNBQVksT0FBWixFQUFvQjtBQUFBOztBQUNoQix5QkFBSyxPQUFMLEdBQWUsT0FBZjtBQUNIOztzQ0FFRCxRLHVCQUFVO0FBQUE7O0FBQ04seUJBQUssT0FBTCxDQUFhLHFCQUFiLENBQW1DLENBQW5DLEVBQXNDLElBQXRDLENBQTRDLG9CQUM1QztBQUNJLDhCQUFLLE1BQUwsR0FBYyxTQUFTLElBQVQsQ0FBYyxVQUFDLENBQUQsRUFBRyxDQUFIO0FBQUEsbUNBQVMsRUFBRSxPQUFGLEdBQVksRUFBRSxPQUF2QjtBQUFBLHlCQUFkLENBQWQ7QUFDSCxxQkFIRDtBQUtILGlCIiwiZmlsZSI6InJlcG9ydHMvb3JkZXItcmVwb3J0LmpzIiwic291cmNlUm9vdCI6Ii9zcmMifQ==
