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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcG9ydHMvb3JkZXItcmVwb3J0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFRLGtCLHFCQUFBLE07O0FBQ0EsbUIsWUFBQSxPOzs7bUNBR0ssVyxXQURaLE9BQU8sT0FBUCxDO0FBR0cscUNBQVksT0FBWixFQUFvQjtBQUFBOztBQUNoQix5QkFBSyxPQUFMLEdBQWUsT0FBZjtBQUNBLHlCQUFLLFdBQUw7QUFDSDs7c0NBRUQsVywwQkFDQTtBQUFBOztBQUNJLHdCQUFJLFlBQVksU0FBWixTQUFZLENBQUMsSUFBRCxFQUFVO0FBQ3RCLDRCQUFJLFNBQVMsS0FBSyxNQUFsQjs7QUFFQSwrQkFBTyxNQUFLLE9BQUwsQ0FBYSxxQkFBYixDQUFtQyxNQUFuQyxDQUFQO0FBQ0gscUJBSkQ7O0FBTUEsd0JBQUksY0FBYyxTQUFkLFdBQWMsQ0FBQyxNQUFELEVBQVk7QUFDMUIsOEJBQUssTUFBTCxHQUFjLE9BQU8sSUFBUCxDQUFZLFVBQUMsQ0FBRCxFQUFHLENBQUg7QUFBQSxtQ0FBUyxFQUFFLE9BQUYsR0FBWSxFQUFFLE9BQXZCO0FBQUEseUJBQVosQ0FBZDtBQUNILHFCQUZEOztBQUtBLHlCQUFLLE9BQUwsQ0FBYSxjQUFiLEdBQ1EsSUFEUixDQUNhLFNBRGIsRUFFUSxJQUZSLENBRWEsV0FGYixFQUdRLEtBSFIsQ0FHZTtBQUFBLCtCQUFPLFFBQVEsR0FBUixDQUFZLEdBQVosQ0FBUDtBQUFBLHFCQUhmO0FBSUgsaUIiLCJmaWxlIjoicmVwb3J0cy9vcmRlci1yZXBvcnQuanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
