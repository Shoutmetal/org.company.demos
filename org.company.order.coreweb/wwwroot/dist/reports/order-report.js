'use strict';

System.register(['aurelia-framework', 'reports/service'], function (_export, _context) {
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
        }, function (_reportsService) {
            Service = _reportsService.Service;
        }],
        execute: function () {
            _export('OrderSearch', OrderSearch = (_dec = inject(Service), _dec(_class = function () {
                function OrderSearch(service) {
                    _classCallCheck(this, OrderSearch);

                    this.service = service;
                    this.valueObject();
                }

                OrderSearch.prototype.valueObject = function valueObject() {
                    var _this = this;

                    var getOrders = function getOrders(user) {
                        var userid = user.userid;

                        return _this.service.getOrdersByCustomerId(userid);
                    };

                    var orderByDesc = function orderByDesc(orders) {
                        _this.orders = orders.sort(function (a, b) {
                            return b.orderId - a.orderId;
                        });
                    };

                    this.service.getUserProfile().then(getOrders).then(orderByDesc).catch(function (err) {
                        return console.log(err);
                    });
                };

                return OrderSearch;
            }()) || _class));

            _export('OrderSearch', OrderSearch);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcG9ydHMvb3JkZXItcmVwb3J0LmpzIl0sIm5hbWVzIjpbImluamVjdCIsIlNlcnZpY2UiLCJPcmRlclNlYXJjaCIsInNlcnZpY2UiLCJ2YWx1ZU9iamVjdCIsImdldE9yZGVycyIsInVzZXIiLCJ1c2VyaWQiLCJnZXRPcmRlcnNCeUN1c3RvbWVySWQiLCJvcmRlckJ5RGVzYyIsIm9yZGVycyIsInNvcnQiLCJhIiwiYiIsIm9yZGVySWQiLCJnZXRVc2VyUHJvZmlsZSIsInRoZW4iLCJjYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJlcnIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFRQSxrQixxQkFBQUEsTTs7QUFDQUMsbUIsbUJBQUFBLE87OzttQ0FHS0MsVyxXQURaRixPQUFPQyxPQUFQLEM7QUFHRyxxQ0FBWUUsT0FBWixFQUFvQjtBQUFBOztBQUNoQix5QkFBS0EsT0FBTCxHQUFlQSxPQUFmO0FBQ0EseUJBQUtDLFdBQUw7QUFDSDs7c0NBRURBLFcsMEJBQ0E7QUFBQTs7QUFDSSx3QkFBSUMsWUFBWSxTQUFaQSxTQUFZLENBQUNDLElBQUQsRUFBVTtBQUN0Qiw0QkFBSUMsU0FBU0QsS0FBS0MsTUFBbEI7O0FBRUEsK0JBQU8sTUFBS0osT0FBTCxDQUFhSyxxQkFBYixDQUFtQ0QsTUFBbkMsQ0FBUDtBQUNILHFCQUpEOztBQU1BLHdCQUFJRSxjQUFjLFNBQWRBLFdBQWMsQ0FBQ0MsTUFBRCxFQUFZO0FBQzFCLDhCQUFLQSxNQUFMLEdBQWNBLE9BQU9DLElBQVAsQ0FBWSxVQUFDQyxDQUFELEVBQUdDLENBQUg7QUFBQSxtQ0FBU0EsRUFBRUMsT0FBRixHQUFZRixFQUFFRSxPQUF2QjtBQUFBLHlCQUFaLENBQWQ7QUFDSCxxQkFGRDs7QUFLQSx5QkFBS1gsT0FBTCxDQUFhWSxjQUFiLEdBQ1FDLElBRFIsQ0FDYVgsU0FEYixFQUVRVyxJQUZSLENBRWFQLFdBRmIsRUFHUVEsS0FIUixDQUdlO0FBQUEsK0JBQU9DLFFBQVFDLEdBQVIsQ0FBWUMsR0FBWixDQUFQO0FBQUEscUJBSGY7QUFJSCxpQiIsImZpbGUiOiJyZXBvcnRzL29yZGVyLXJlcG9ydC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
