'use strict';

System.register(['aurelia-framework', 'services/storage', 'aurelia-router', './service'], function (_export, _context) {
    "use strict";

    var inject, Storage, Router, Service, _dec, _class, OrderCheckout;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
        }, function (_servicesStorage) {
            Storage = _servicesStorage.Storage;
        }, function (_aureliaRouter) {
            Router = _aureliaRouter.Router;
        }, function (_service) {
            Service = _service.Service;
        }],
        execute: function () {
            _export('OrderCheckout', OrderCheckout = (_dec = inject(Storage, Service, Router), _dec(_class = function () {
                function OrderCheckout(storage, service, router) {
                    _classCallCheck(this, OrderCheckout);

                    this.storage = storage;
                    this.service = service;
                    this.router = router;
                    this.products = this.storage.get("cart");
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
                        _this2.confirmed = response;
                        if (response) _this2.storage.clear("cart");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyL29yZGVyLWNoZWNrb3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFRLGtCLHFCQUFBLE07O0FBQ0EsbUIsb0JBQUEsTzs7QUFDQSxrQixrQkFBQSxNOztBQUNBLG1CLFlBQUEsTzs7O3FDQUlLLGEsV0FEWixPQUFPLE9BQVAsRUFBZ0IsT0FBaEIsRUFBeUIsTUFBekIsQztBQUdHLHVDQUFZLE9BQVosRUFBcUIsT0FBckIsRUFBOEIsTUFBOUIsRUFBcUM7QUFBQTs7QUFDakMseUJBQUssT0FBTCxHQUFlLE9BQWY7QUFDQSx5QkFBSyxPQUFMLEdBQWUsT0FBZjtBQUNBLHlCQUFLLE1BQUwsR0FBYyxNQUFkO0FBQ0EseUJBQUssUUFBTCxHQUFnQixLQUFLLE9BQUwsQ0FBYSxHQUFiLENBQWlCLE1BQWpCLENBQWhCO0FBQ0EseUJBQUssVUFBTCxHQUFrQixDQUFsQjtBQUNBLHlCQUFLLFNBQUwsR0FBaUIsS0FBakI7QUFDSDs7d0NBRUQsUSx1QkFBVTtBQUFBOztBQUNOLHlCQUFLLFVBQUwsR0FBbUIsS0FBSyxRQUFMLENBQWMsTUFBZCxDQUFzQixVQUFDLEdBQUQsRUFBTSxPQUFOO0FBQUEsK0JBQWtCLFFBQVEsUUFBUixHQUFtQixRQUFRLEtBQTNCLEdBQW1DLEdBQXJEO0FBQUEscUJBQXRCLEVBQWlGLENBQWpGLENBQW5CO0FBQ0EseUJBQUssT0FBTCxDQUFhLGNBQWIsR0FBOEIsSUFBOUIsQ0FBb0MsZ0JBQVE7QUFBRSw4QkFBSyxJQUFMLEdBQVksSUFBWjtBQUFtQixxQkFBakU7QUFDSCxpQjs7d0NBRUQsTyxzQkFBUztBQUFBOztBQUNMLHdCQUFJLFFBQVEsRUFBRSxTQUFRLENBQVYsRUFBYSxhQUFZLEVBQXpCLEVBQTZCLFlBQVksS0FBSyxJQUFMLENBQVUsTUFBbkQsRUFBNEQsVUFBVSxLQUFLLFFBQTNFLEVBQVo7O0FBRUEseUJBQUssT0FBTCxDQUFhLFNBQWIsQ0FBdUIsS0FBdkIsRUFBOEIsSUFBOUIsQ0FBbUMsVUFBQyxRQUFELEVBQWM7QUFDN0MsK0JBQUssU0FBTCxHQUFpQixRQUFqQjtBQUNBLDRCQUFHLFFBQUgsRUFBYSxPQUFLLE9BQUwsQ0FBYSxLQUFiLENBQW1CLE1BQW5CO0FBQ2hCLHFCQUhEO0FBS0gsaUI7O3dDQUVELE0scUJBQVE7QUFDSix5QkFBSyxNQUFMLENBQVksUUFBWixDQUFxQixpQkFBckI7QUFDSCxpQiIsImZpbGUiOiJvcmRlci9vcmRlci1jaGVja291dC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
