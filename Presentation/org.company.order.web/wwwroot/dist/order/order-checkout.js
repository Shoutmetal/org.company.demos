'use strict';

System.register(['aurelia-framework', 'aurelia-router', 'order/service'], function (_export, _context) {
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
        }, function (_orderService) {
            Service = _orderService.Service;
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
                        _this2.confirmed = response.isSuccess;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyL29yZGVyLWNoZWNrb3V0LmpzIl0sIm5hbWVzIjpbImluamVjdCIsIlJvdXRlciIsIlNlcnZpY2UiLCJPcmRlckNoZWNrb3V0Iiwic2VydmljZSIsInJvdXRlciIsInByb2R1Y3RzIiwiZ2V0U3RvcmFnZSIsInRvdGFsUHJpY2UiLCJjb25maXJtZWQiLCJhdHRhY2hlZCIsInJlZHVjZSIsInN1bSIsImN1cnJlbnQiLCJxdWFudGl0eSIsInByaWNlIiwiZ2V0VXNlclByb2ZpbGUiLCJ0aGVuIiwidXNlciIsImNvbmZpcm0iLCJvcmRlciIsIm9yZGVySWQiLCJvcmRlck51bWJlciIsImN1c3RvbWVySWQiLCJ1c2VyaWQiLCJzYXZlT3JkZXIiLCJyZXNwb25zZSIsImlzU3VjY2VzcyIsImNsZWFuU3RvcmFnZSIsImNhbmNlbCIsIm5hdmlnYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBUUEsa0IscUJBQUFBLE07O0FBQ0FDLGtCLGtCQUFBQSxNOztBQUNBQyxtQixpQkFBQUEsTzs7O3FDQUlLQyxhLFdBRFpILE9BQVFFLE9BQVIsRUFBaUJELE1BQWpCLEM7QUFHRyx1Q0FBWUcsT0FBWixFQUFxQkMsTUFBckIsRUFBNEI7QUFBQTs7QUFDeEIseUJBQUtELE9BQUwsR0FBZUEsT0FBZjtBQUNBLHlCQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDQSx5QkFBS0MsUUFBTCxHQUFnQixLQUFLRixPQUFMLENBQWFHLFVBQWIsQ0FBd0IsTUFBeEIsQ0FBaEI7QUFDQSx5QkFBS0MsVUFBTCxHQUFrQixDQUFsQjtBQUNBLHlCQUFLQyxTQUFMLEdBQWlCLEtBQWpCO0FBQ0g7O3dDQUVEQyxRLHVCQUFVO0FBQUE7O0FBQ04seUJBQUtGLFVBQUwsR0FBbUIsS0FBS0YsUUFBTCxDQUFjSyxNQUFkLENBQXNCLFVBQUNDLEdBQUQsRUFBTUMsT0FBTjtBQUFBLCtCQUFrQkEsUUFBUUMsUUFBUixHQUFtQkQsUUFBUUUsS0FBM0IsR0FBbUNILEdBQXJEO0FBQUEscUJBQXRCLEVBQWlGLENBQWpGLENBQW5CO0FBQ0EseUJBQUtSLE9BQUwsQ0FBYVksY0FBYixHQUE4QkMsSUFBOUIsQ0FBb0MsZ0JBQVE7QUFBRSw4QkFBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQW1CLHFCQUFqRTtBQUNILGlCOzt3Q0FFREMsTyxzQkFBUztBQUFBOztBQUNMLHdCQUFJQyxRQUFRLEVBQUVDLFNBQVEsQ0FBVixFQUFhQyxhQUFZLEVBQXpCLEVBQTZCQyxZQUFZLEtBQUtMLElBQUwsQ0FBVU0sTUFBbkQsRUFBNERsQixVQUFVLEtBQUtBLFFBQTNFLEVBQVo7O0FBRUEseUJBQUtGLE9BQUwsQ0FBYXFCLFNBQWIsQ0FBdUJMLEtBQXZCLEVBQThCSCxJQUE5QixDQUFtQyxVQUFDUyxRQUFELEVBQWM7QUFDN0MsK0JBQUtqQixTQUFMLEdBQWlCaUIsU0FBU0MsU0FBMUI7QUFDQSw0QkFBR0QsUUFBSCxFQUFhLE9BQUt0QixPQUFMLENBQWF3QixZQUFiLENBQTBCLE1BQTFCO0FBQ2hCLHFCQUhEO0FBS0gsaUI7O3dDQUVEQyxNLHFCQUFRO0FBQ0oseUJBQUt4QixNQUFMLENBQVl5QixRQUFaLENBQXFCLGlCQUFyQjtBQUNILGlCIiwiZmlsZSI6Im9yZGVyL29yZGVyLWNoZWNrb3V0LmpzIiwic291cmNlUm9vdCI6Ii9zcmMifQ==
