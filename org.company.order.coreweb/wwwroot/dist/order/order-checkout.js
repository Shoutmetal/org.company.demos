'use strict';

System.register(['aurelia-framework', 'aurelia-router', './service'], function (_export, _context) {
    "use strict";

    var inject, Router, Service, _dec, _class, OrderCheckout;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
        }, function (_aureliaRouter) {
            Router = _aureliaRouter.Router;
        }, function (_service) {
            Service = _service.Service;
        }],
        execute: function () {
            _export('OrderCheckout', OrderCheckout = (_dec = inject(Service, Router), _dec(_class = function () {
                function OrderCheckout(service, router) {
                    _classCallCheck(this, OrderCheckout);

                    this.service = service;
                    this.router = router;
                    this.products = this.service.getStorage("cart");
                    this.totalPrice = 0;
                    this.confirmed = false;
                }

                OrderCheckout.prototype.attached = function attached() {
                    var _this = this;

                    this.totalPrice = this.products.reduce(function (sum, current) {
                        return current.quantity * current.price + sum;
                    }, 0);
                    this.service.getUserProfile().then(function (user) {
                        _this.user = user;
                    });
                };

                OrderCheckout.prototype.confirm = function confirm() {
                    var _this2 = this;

                    var order = { orderId: 0, orderNumber: "", customerId: this.user.userid, products: this.products };

                    this.service.saveOrder(order).then(function (response) {
                        console.log(response);

                        _this2.confirmed = response;
                        if (response) _this2.service.cleanStorage("cart");
                    });
                };

                OrderCheckout.prototype.cancel = function cancel() {
                    this.router.navigate("order-cart-shop");
                };

                return OrderCheckout;
            }()) || _class));

            _export('OrderCheckout', OrderCheckout);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyL29yZGVyLWNoZWNrb3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFRLGtCLHFCQUFBLE07O0FBQ0Esa0Isa0JBQUEsTTs7QUFDQSxtQixZQUFBLE87OztxQ0FJSyxhLFdBRFosT0FBUSxPQUFSLEVBQWlCLE1BQWpCLEM7QUFHRyx1Q0FBWSxPQUFaLEVBQXFCLE1BQXJCLEVBQTRCO0FBQUE7O0FBQ3hCLHlCQUFLLE9BQUwsR0FBZSxPQUFmO0FBQ0EseUJBQUssTUFBTCxHQUFjLE1BQWQ7QUFDQSx5QkFBSyxRQUFMLEdBQWdCLEtBQUssT0FBTCxDQUFhLFVBQWIsQ0FBd0IsTUFBeEIsQ0FBaEI7QUFDQSx5QkFBSyxVQUFMLEdBQWtCLENBQWxCO0FBQ0EseUJBQUssU0FBTCxHQUFpQixLQUFqQjtBQUNIOzt3Q0FFRCxRLHVCQUFVO0FBQUE7O0FBQ04seUJBQUssVUFBTCxHQUFtQixLQUFLLFFBQUwsQ0FBYyxNQUFkLENBQXNCLFVBQUMsR0FBRCxFQUFNLE9BQU47QUFBQSwrQkFBa0IsUUFBUSxRQUFSLEdBQW1CLFFBQVEsS0FBM0IsR0FBbUMsR0FBckQ7QUFBQSxxQkFBdEIsRUFBaUYsQ0FBakYsQ0FBbkI7QUFDQSx5QkFBSyxPQUFMLENBQWEsY0FBYixHQUE4QixJQUE5QixDQUFvQyxnQkFBUTtBQUFFLDhCQUFLLElBQUwsR0FBWSxJQUFaO0FBQW1CLHFCQUFqRTtBQUNILGlCOzt3Q0FFRCxPLHNCQUFTO0FBQUE7O0FBQ0wsd0JBQUksUUFBUSxFQUFFLFNBQVEsQ0FBVixFQUFhLGFBQVksRUFBekIsRUFBNkIsWUFBWSxLQUFLLElBQUwsQ0FBVSxNQUFuRCxFQUE0RCxVQUFVLEtBQUssUUFBM0UsRUFBWjs7QUFFQSx5QkFBSyxPQUFMLENBQWEsU0FBYixDQUF1QixLQUF2QixFQUE4QixJQUE5QixDQUFtQyxVQUFDLFFBQUQsRUFBYztBQUM3QyxnQ0FBUSxHQUFSLENBQVksUUFBWjs7QUFFQSwrQkFBSyxTQUFMLEdBQWlCLFFBQWpCO0FBQ0EsNEJBQUcsUUFBSCxFQUFhLE9BQUssT0FBTCxDQUFhLFlBQWIsQ0FBMEIsTUFBMUI7QUFDaEIscUJBTEQ7QUFPSCxpQjs7d0NBRUQsTSxxQkFBUTtBQUNKLHlCQUFLLE1BQUwsQ0FBWSxRQUFaLENBQXFCLGlCQUFyQjtBQUNILGlCIiwiZmlsZSI6Im9yZGVyL29yZGVyLWNoZWNrb3V0LmpzIiwic291cmNlUm9vdCI6Ii9zcmMifQ==
