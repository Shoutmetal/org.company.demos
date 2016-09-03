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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcG9ydHMvb3JkZXItcmVwb3J0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFRLGtCLHFCQUFBLE07O0FBQ0EsbUIsbUJBQUEsTzs7O21DQUdLLFcsV0FEWixPQUFPLE9BQVAsQztBQUdHLHFDQUFZLE9BQVosRUFBb0I7QUFBQTs7QUFDaEIseUJBQUssT0FBTCxHQUFlLE9BQWY7QUFDQSx5QkFBSyxXQUFMO0FBQ0g7O3NDQUVELFcsMEJBQ0E7QUFBQTs7QUFDSSx3QkFBSSxZQUFZLFNBQVosU0FBWSxDQUFDLElBQUQsRUFBVTtBQUN0Qiw0QkFBSSxTQUFTLEtBQUssTUFBbEI7O0FBRUEsK0JBQU8sTUFBSyxPQUFMLENBQWEscUJBQWIsQ0FBbUMsTUFBbkMsQ0FBUDtBQUNILHFCQUpEOztBQU1BLHdCQUFJLGNBQWMsU0FBZCxXQUFjLENBQUMsTUFBRCxFQUFZO0FBQzFCLDhCQUFLLE1BQUwsR0FBYyxPQUFPLElBQVAsQ0FBWSxVQUFDLENBQUQsRUFBRyxDQUFIO0FBQUEsbUNBQVMsRUFBRSxPQUFGLEdBQVksRUFBRSxPQUF2QjtBQUFBLHlCQUFaLENBQWQ7QUFDSCxxQkFGRDs7QUFLQSx5QkFBSyxPQUFMLENBQWEsY0FBYixHQUNRLElBRFIsQ0FDYSxTQURiLEVBRVEsSUFGUixDQUVhLFdBRmIsRUFHUSxLQUhSLENBR2U7QUFBQSwrQkFBTyxRQUFRLEdBQVIsQ0FBWSxHQUFaLENBQVA7QUFBQSxxQkFIZjtBQUlILGlCIiwiZmlsZSI6InJlcG9ydHMvb3JkZXItcmVwb3J0LmpzIiwic291cmNlUm9vdCI6Ii9zcmMifQ==
