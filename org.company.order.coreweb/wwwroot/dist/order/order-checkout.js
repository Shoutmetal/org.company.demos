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
                    this.totalPrice = this.products.reduce(function (sum, current) {
                        return current.quantity * current.price + sum;
                    }, 0);
                };

                OrderCheckout.prototype.confirm = function confirm() {
                    var _this = this;

                    var order = { orderId: 0, orderNumber: "", customerId: 1, products: this.products };

                    this.service.saveOrder(order).then(function (response) {
                        _this.confirmed = response;
                        if (response) _this.storage.clear("cart");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyL29yZGVyLWNoZWNrb3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFRLGtCLHFCQUFBLE07O0FBQ0EsbUIsb0JBQUEsTzs7QUFDQSxrQixrQkFBQSxNOztBQUNBLG1CLFlBQUEsTzs7O3FDQUdLLGEsV0FEWixPQUFPLE9BQVAsRUFBZ0IsT0FBaEIsRUFBeUIsTUFBekIsQztBQUdHLHVDQUFZLE9BQVosRUFBcUIsT0FBckIsRUFBOEIsTUFBOUIsRUFBcUM7QUFBQTs7QUFDakMseUJBQUssT0FBTCxHQUFlLE9BQWY7QUFDQSx5QkFBSyxPQUFMLEdBQWUsT0FBZjtBQUNBLHlCQUFLLE1BQUwsR0FBYyxNQUFkO0FBQ0EseUJBQUssUUFBTCxHQUFnQixLQUFLLE9BQUwsQ0FBYSxHQUFiLENBQWlCLE1BQWpCLENBQWhCO0FBQ0EseUJBQUssVUFBTCxHQUFrQixDQUFsQjtBQUNBLHlCQUFLLFNBQUwsR0FBaUIsS0FBakI7QUFDSDs7d0NBRUQsUSx1QkFBVTtBQUNOLHlCQUFLLFVBQUwsR0FBbUIsS0FBSyxRQUFMLENBQWMsTUFBZCxDQUFzQixVQUFDLEdBQUQsRUFBTSxPQUFOO0FBQUEsK0JBQWtCLFFBQVEsUUFBUixHQUFtQixRQUFRLEtBQTNCLEdBQW1DLEdBQXJEO0FBQUEscUJBQXRCLEVBQWlGLENBQWpGLENBQW5CO0FBQ0gsaUI7O3dDQUVELE8sc0JBQVM7QUFBQTs7QUFDTCx3QkFBSSxRQUFRLEVBQUUsU0FBUSxDQUFWLEVBQWEsYUFBWSxFQUF6QixFQUE2QixZQUFZLENBQXpDLEVBQTZDLFVBQVUsS0FBSyxRQUE1RCxFQUFaOztBQUdBLHlCQUFLLE9BQUwsQ0FBYSxTQUFiLENBQXVCLEtBQXZCLEVBQThCLElBQTlCLENBQW1DLFVBQUMsUUFBRCxFQUFjO0FBQzdDLDhCQUFLLFNBQUwsR0FBaUIsUUFBakI7QUFDQSw0QkFBRyxRQUFILEVBQWEsTUFBSyxPQUFMLENBQWEsS0FBYixDQUFtQixNQUFuQjtBQUNoQixxQkFIRDtBQUtILGlCOzt3Q0FFRCxNLHFCQUFRO0FBQ0oseUJBQUssTUFBTCxDQUFZLFFBQVosQ0FBcUIsaUJBQXJCO0FBQ0gsaUIiLCJmaWxlIjoib3JkZXIvb3JkZXItY2hlY2tvdXQuanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
