'use strict';

System.register(['aurelia-framework', 'aurelia-event-aggregator', 'aurelia-router', 'order/service'], function (_export, _context) {
    "use strict";

    var inject, computedFrom, EventAggregator, Router, Service, _createClass, _dec, _dec2, _class, _desc, _value, _class2, OrderCartMenu;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
        var desc = {};
        Object['ke' + 'ys'](descriptor).forEach(function (key) {
            desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;

        if ('value' in desc || desc.initializer) {
            desc.writable = true;
        }

        desc = decorators.slice().reverse().reduce(function (desc, decorator) {
            return decorator(target, property, desc) || desc;
        }, desc);

        if (context && desc.initializer !== void 0) {
            desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
            desc.initializer = undefined;
        }

        if (desc.initializer === void 0) {
            Object['define' + 'Property'](target, property, desc);
            desc = null;
        }

        return desc;
    }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
            computedFrom = _aureliaFramework.computedFrom;
        }, function (_aureliaEventAggregator) {
            EventAggregator = _aureliaEventAggregator.EventAggregator;
        }, function (_aureliaRouter) {
            Router = _aureliaRouter.Router;
        }, function (_orderService) {
            Service = _orderService.Service;
        }],
        execute: function () {
            _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            _export('OrderCartMenu', OrderCartMenu = (_dec = inject(EventAggregator, Router, Service), _dec2 = computedFrom("items"), _dec(_class = (_class2 = function () {
                function OrderCartMenu(event, router, service) {
                    _classCallCheck(this, OrderCartMenu);

                    this.event = event;
                    this.router = router;
                    this.service = service;
                    this.items = this.service.getStorage("cart");
                }

                OrderCartMenu.prototype.attached = function attached() {
                    var _this = this;

                    this.event.subscribe(this.service.getEventName("cart"), function (items) {
                        _this.items = items;
                    });
                };

                OrderCartMenu.prototype.delete = function _delete(id) {
                    this.service.deleteStorage("cart", function (item) {
                        return item.productId === id;
                    });
                };

                OrderCartMenu.prototype.checkout = function checkout() {
                    this.router.navigateWithParams("order-checkout", this.items);
                };

                OrderCartMenu.prototype.cartshop = function cartshop() {
                    this.router.navigateWithParams("order-cart-shop", this.items);
                };

                _createClass(OrderCartMenu, [{
                    key: 'totalPrice',
                    get: function get() {
                        var items = this.items;
                        return items.reduce(function (sum, current) {
                            return current.quantity * current.price + sum;
                        }, 0);
                    }
                }]);

                return OrderCartMenu;
            }(), (_applyDecoratedDescriptor(_class2.prototype, 'totalPrice', [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, 'totalPrice'), _class2.prototype)), _class2)) || _class));

            _export('OrderCartMenu', OrderCartMenu);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyL29yZGVyLWNhcnQtbWVudS5qcyJdLCJuYW1lcyI6WyJpbmplY3QiLCJjb21wdXRlZEZyb20iLCJFdmVudEFnZ3JlZ2F0b3IiLCJSb3V0ZXIiLCJTZXJ2aWNlIiwiT3JkZXJDYXJ0TWVudSIsImV2ZW50Iiwicm91dGVyIiwic2VydmljZSIsIml0ZW1zIiwiZ2V0U3RvcmFnZSIsImF0dGFjaGVkIiwic3Vic2NyaWJlIiwiZ2V0RXZlbnROYW1lIiwiZGVsZXRlIiwiaWQiLCJkZWxldGVTdG9yYWdlIiwiaXRlbSIsInByb2R1Y3RJZCIsImNoZWNrb3V0IiwibmF2aWdhdGVXaXRoUGFyYW1zIiwiY2FydHNob3AiLCJyZWR1Y2UiLCJzdW0iLCJjdXJyZW50IiwicXVhbnRpdHkiLCJwcmljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBUUEsa0IscUJBQUFBLE07QUFBUUMsd0IscUJBQUFBLFk7O0FBQ1JDLDJCLDJCQUFBQSxlOztBQUNBQyxrQixrQkFBQUEsTTs7QUFDQUMsbUIsaUJBQUFBLE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQ0FHS0MsYSxXQURaTCxPQUFPRSxlQUFQLEVBQXdCQyxNQUF4QixFQUFnQ0MsT0FBaEMsQyxVQWlCSUgsYUFBYSxPQUFiLEM7QUFkRCx1Q0FBWUssS0FBWixFQUFtQkMsTUFBbkIsRUFBMkJDLE9BQTNCLEVBQW1DO0FBQUE7O0FBQy9CLHlCQUFLRixLQUFMLEdBQWFBLEtBQWI7QUFDQSx5QkFBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0EseUJBQUtDLE9BQUwsR0FBZUEsT0FBZjtBQUNBLHlCQUFLQyxLQUFMLEdBQWEsS0FBS0QsT0FBTCxDQUFhRSxVQUFiLENBQXdCLE1BQXhCLENBQWI7QUFDSDs7d0NBRURDLFEsdUJBQ0E7QUFBQTs7QUFDSSx5QkFBS0wsS0FBTCxDQUFXTSxTQUFYLENBQXFCLEtBQUtKLE9BQUwsQ0FBYUssWUFBYixDQUEwQixNQUExQixDQUFyQixFQUF3RCxVQUFDSixLQUFELEVBQVc7QUFDL0QsOEJBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNILHFCQUZEO0FBR0gsaUI7O3dDQVFESyxNLG9CQUFPQyxFLEVBQUc7QUFDTix5QkFBS1AsT0FBTCxDQUFhUSxhQUFiLENBQTJCLE1BQTNCLEVBQW1DLFVBQUNDLElBQUQsRUFBVTtBQUFFLCtCQUFPQSxLQUFLQyxTQUFMLEtBQW1CSCxFQUExQjtBQUE4QixxQkFBN0U7QUFFSCxpQjs7d0NBRURJLFEsdUJBQVU7QUFDTix5QkFBS1osTUFBTCxDQUFZYSxrQkFBWixDQUErQixnQkFBL0IsRUFBaUQsS0FBS1gsS0FBdEQ7QUFFSCxpQjs7d0NBRURZLFEsdUJBQVU7QUFDTix5QkFBS2QsTUFBTCxDQUFZYSxrQkFBWixDQUErQixpQkFBL0IsRUFBa0QsS0FBS1gsS0FBdkQ7QUFDSCxpQjs7Ozt3Q0FqQmU7QUFDWiw0QkFBSUEsUUFBUSxLQUFLQSxLQUFqQjtBQUNBLCtCQUFPQSxNQUFNYSxNQUFOLENBQWMsVUFBQ0MsR0FBRCxFQUFNQyxPQUFOO0FBQUEsbUNBQWtCQSxRQUFRQyxRQUFSLEdBQW1CRCxRQUFRRSxLQUEzQixHQUFtQ0gsR0FBckQ7QUFBQSx5QkFBZCxFQUF5RSxDQUF6RSxDQUFQO0FBQ0giLCJmaWxlIjoib3JkZXIvb3JkZXItY2FydC1tZW51LmpzIiwic291cmNlUm9vdCI6Ii9zcmMifQ==
