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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyL29yZGVyLWNhcnQtbWVudS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFRLGtCLHFCQUFBLE07QUFBUSx3QixxQkFBQSxZOztBQUNSLDJCLDJCQUFBLGU7O0FBQ0Esa0Isa0JBQUEsTTs7QUFDQSxtQixpQkFBQSxPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUNBR0ssYSxXQURaLE9BQU8sZUFBUCxFQUF3QixNQUF4QixFQUFnQyxPQUFoQyxDLFVBaUJJLGFBQWEsT0FBYixDO0FBZEQsdUNBQVksS0FBWixFQUFtQixNQUFuQixFQUEyQixPQUEzQixFQUFtQztBQUFBOztBQUMvQix5QkFBSyxLQUFMLEdBQWEsS0FBYjtBQUNBLHlCQUFLLE1BQUwsR0FBYyxNQUFkO0FBQ0EseUJBQUssT0FBTCxHQUFlLE9BQWY7QUFDQSx5QkFBSyxLQUFMLEdBQWEsS0FBSyxPQUFMLENBQWEsVUFBYixDQUF3QixNQUF4QixDQUFiO0FBQ0g7O3dDQUVELFEsdUJBQ0E7QUFBQTs7QUFDSSx5QkFBSyxLQUFMLENBQVcsU0FBWCxDQUFxQixLQUFLLE9BQUwsQ0FBYSxZQUFiLENBQTBCLE1BQTFCLENBQXJCLEVBQXdELFVBQUMsS0FBRCxFQUFXO0FBQy9ELDhCQUFLLEtBQUwsR0FBYSxLQUFiO0FBQ0gscUJBRkQ7QUFHSCxpQjs7d0NBUUQsTSxvQkFBTyxFLEVBQUc7QUFDTix5QkFBSyxPQUFMLENBQWEsYUFBYixDQUEyQixNQUEzQixFQUFtQyxVQUFDLElBQUQsRUFBVTtBQUFFLCtCQUFPLEtBQUssU0FBTCxLQUFtQixFQUExQjtBQUE4QixxQkFBN0U7QUFFSCxpQjs7d0NBRUQsUSx1QkFBVTtBQUNOLHlCQUFLLE1BQUwsQ0FBWSxrQkFBWixDQUErQixnQkFBL0IsRUFBaUQsS0FBSyxLQUF0RDtBQUVILGlCOzt3Q0FFRCxRLHVCQUFVO0FBQ04seUJBQUssTUFBTCxDQUFZLGtCQUFaLENBQStCLGlCQUEvQixFQUFrRCxLQUFLLEtBQXZEO0FBQ0gsaUI7Ozs7d0NBakJlO0FBQ1osNEJBQUksUUFBUSxLQUFLLEtBQWpCO0FBQ0EsK0JBQU8sTUFBTSxNQUFOLENBQWMsVUFBQyxHQUFELEVBQU0sT0FBTjtBQUFBLG1DQUFrQixRQUFRLFFBQVIsR0FBbUIsUUFBUSxLQUEzQixHQUFtQyxHQUFyRDtBQUFBLHlCQUFkLEVBQXlFLENBQXpFLENBQVA7QUFDSCIsImZpbGUiOiJvcmRlci9vcmRlci1jYXJ0LW1lbnUuanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
