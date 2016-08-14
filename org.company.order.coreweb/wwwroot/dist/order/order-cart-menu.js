'use strict';

System.register(['aurelia-framework', 'aurelia-event-aggregator', 'services/storage', 'aurelia-router'], function (_export, _context) {
    "use strict";

    var inject, computedFrom, EventAggregator, Storage, Router, _createClass, _dec, _dec2, _class, _desc, _value, _class2, CartMenu;

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
        }, function (_servicesStorage) {
            Storage = _servicesStorage.Storage;
        }, function (_aureliaRouter) {
            Router = _aureliaRouter.Router;
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

            _export('CartMenu', CartMenu = (_dec = inject(EventAggregator, Storage, Router), _dec2 = computedFrom("items"), _dec(_class = (_class2 = function () {
                function CartMenu(event, storage, router) {
                    _classCallCheck(this, CartMenu);

                    this.event = event;
                    this.storage = storage;
                    this.router = router;
                    this.items = this.storage.get("cart");
                }

                CartMenu.prototype.attached = function attached() {
                    var _this = this;

                    this.event.subscribe("storage:cart", function (items) {
                        _this.items = items;
                    });
                };

                CartMenu.prototype.delete = function _delete(id) {
                    this.storage.delete("cart", function (item) {
                        return item.productId === id;
                    });
                };

                CartMenu.prototype.checkout = function checkout() {
                    this.router.navigateWithParams("order-checkout", this.items);
                };

                CartMenu.prototype.cartshop = function cartshop() {
                    this.router.navigateWithParams("order-cart-shop", this.items);
                };

                _createClass(CartMenu, [{
                    key: 'totalPrice',
                    get: function get() {
                        var items = this.items;
                        return items.reduce(function (sum, current) {
                            return current.quantity * current.price + sum;
                        }, 0);
                    }
                }]);

                return CartMenu;
            }(), (_applyDecoratedDescriptor(_class2.prototype, 'totalPrice', [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, 'totalPrice'), _class2.prototype)), _class2)) || _class));

            _export('CartMenu', CartMenu);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyL29yZGVyLWNhcnQtbWVudS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFRLGtCLHFCQUFBLE07QUFBUSx3QixxQkFBQSxZOztBQUNSLDJCLDJCQUFBLGU7O0FBQ0EsbUIsb0JBQUEsTzs7QUFDQSxrQixrQkFBQSxNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0NBR0ssUSxXQURaLE9BQU8sZUFBUCxFQUF3QixPQUF4QixFQUFpQyxNQUFqQyxDLFVBaUJJLGFBQWEsT0FBYixDO0FBZEQsa0NBQVksS0FBWixFQUFtQixPQUFuQixFQUE0QixNQUE1QixFQUFtQztBQUFBOztBQUMvQix5QkFBSyxLQUFMLEdBQWEsS0FBYjtBQUNBLHlCQUFLLE9BQUwsR0FBZSxPQUFmO0FBQ0EseUJBQUssTUFBTCxHQUFjLE1BQWQ7QUFDQSx5QkFBSyxLQUFMLEdBQWEsS0FBSyxPQUFMLENBQWEsR0FBYixDQUFpQixNQUFqQixDQUFiO0FBQ0g7O21DQUVELFEsdUJBQ0E7QUFBQTs7QUFDSSx5QkFBSyxLQUFMLENBQVcsU0FBWCxDQUFxQixjQUFyQixFQUFxQyxVQUFDLEtBQUQsRUFBVztBQUM1Qyw4QkFBSyxLQUFMLEdBQWEsS0FBYjtBQUNILHFCQUZEO0FBR0gsaUI7O21DQVFELE0sb0JBQU8sRSxFQUFHO0FBQ04seUJBQUssT0FBTCxDQUFhLE1BQWIsQ0FBb0IsTUFBcEIsRUFBNEIsVUFBQyxJQUFELEVBQVU7QUFBRSwrQkFBTyxLQUFLLFNBQUwsS0FBbUIsRUFBMUI7QUFBOEIscUJBQXRFO0FBQ0gsaUI7O21DQUVELFEsdUJBQVU7QUFDTix5QkFBSyxNQUFMLENBQVksa0JBQVosQ0FBK0IsZ0JBQS9CLEVBQWlELEtBQUssS0FBdEQ7QUFFSCxpQjs7bUNBRUQsUSx1QkFBVTtBQUNOLHlCQUFLLE1BQUwsQ0FBWSxrQkFBWixDQUErQixpQkFBL0IsRUFBa0QsS0FBSyxLQUF2RDtBQUNILGlCOzs7O3dDQWhCZTtBQUNaLDRCQUFJLFFBQVEsS0FBSyxLQUFqQjtBQUNBLCtCQUFPLE1BQU0sTUFBTixDQUFjLFVBQUMsR0FBRCxFQUFNLE9BQU47QUFBQSxtQ0FBa0IsUUFBUSxRQUFSLEdBQW1CLFFBQVEsS0FBM0IsR0FBbUMsR0FBckQ7QUFBQSx5QkFBZCxFQUF5RSxDQUF6RSxDQUFQO0FBQ0giLCJmaWxlIjoib3JkZXIvb3JkZXItY2FydC1tZW51LmpzIiwic291cmNlUm9vdCI6Ii9zcmMifQ==
