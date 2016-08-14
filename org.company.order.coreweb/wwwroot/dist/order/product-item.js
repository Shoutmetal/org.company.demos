'use strict';

System.register(['aurelia-framework', 'aurelia-event-aggregator', './service', 'services/storage'], function (_export, _context) {
    "use strict";

    var inject, EventAggregator, Service, Storage, _dec, _class, ProductItem;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
        }, function (_aureliaEventAggregator) {
            EventAggregator = _aureliaEventAggregator.EventAggregator;
        }, function (_service) {
            Service = _service.Service;
        }, function (_servicesStorage) {
            Storage = _servicesStorage.Storage;
        }],
        execute: function () {
            _export('ProductItem', ProductItem = (_dec = inject(Service, Storage, EventAggregator), _dec(_class = function () {
                function ProductItem(service, storage, event) {
                    var _this = this;

                    _classCallCheck(this, ProductItem);

                    this.service = service;
                    this.storage = storage;
                    this.event = event;
                    this.condition = function (prod) {
                        return prod.productId === _this.product.productId;
                    };
                }

                ProductItem.prototype.attached = function attached() {
                    var _this2 = this;

                    this.isActive = this.storage.exists("cart", this.condition);

                    this.event.subscribe("storage:cart", function () {
                        var exists = _this2.storage.exists("cart", _this2.condition);
                        _this2.isActive = exists ? true : false;
                    });
                };

                ProductItem.prototype.activate = function activate(item) {

                    this.product = item;
                };

                ProductItem.prototype.add = function add() {
                    this.service.addToCart(this.product);
                };

                return ProductItem;
            }()) || _class));

            _export('ProductItem', ProductItem);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyL3Byb2R1Y3QtaXRlbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBUSxrQixxQkFBQSxNOztBQUNBLDJCLDJCQUFBLGU7O0FBQ0EsbUIsWUFBQSxPOztBQUNBLG1CLG9CQUFBLE87OzttQ0FHSyxXLFdBRFosT0FBTyxPQUFQLEVBQWdCLE9BQWhCLEVBQXlCLGVBQXpCLEM7QUFHRyxxQ0FBWSxPQUFaLEVBQXFCLE9BQXJCLEVBQThCLEtBQTlCLEVBQW9DO0FBQUE7O0FBQUE7O0FBQ2hDLHlCQUFLLE9BQUwsR0FBZSxPQUFmO0FBQ0EseUJBQUssT0FBTCxHQUFlLE9BQWY7QUFDQSx5QkFBSyxLQUFMLEdBQWEsS0FBYjtBQUNBLHlCQUFLLFNBQUwsR0FBaUIsVUFBQyxJQUFELEVBQVU7QUFBRSwrQkFBTyxLQUFLLFNBQUwsS0FBbUIsTUFBSyxPQUFMLENBQWEsU0FBdkM7QUFBa0QscUJBQS9FO0FBRUg7O3NDQUVELFEsdUJBQVU7QUFBQTs7QUFDTix5QkFBSyxRQUFMLEdBQWdCLEtBQUssT0FBTCxDQUFhLE1BQWIsQ0FBb0IsTUFBcEIsRUFBNkIsS0FBSyxTQUFsQyxDQUFoQjs7QUFFQSx5QkFBSyxLQUFMLENBQVcsU0FBWCxDQUFxQixjQUFyQixFQUFxQyxZQUFNO0FBQ3ZDLDRCQUFJLFNBQVMsT0FBSyxPQUFMLENBQWEsTUFBYixDQUFvQixNQUFwQixFQUE2QixPQUFLLFNBQWxDLENBQWI7QUFDQSwrQkFBSyxRQUFMLEdBQWdCLFNBQVMsSUFBVCxHQUFnQixLQUFoQztBQUNILHFCQUhEO0FBSUgsaUI7O3NDQUVELFEscUJBQVMsSSxFQUFLOztBQUVWLHlCQUFLLE9BQUwsR0FBZSxJQUFmO0FBQ0gsaUI7O3NDQUVELEcsa0JBQUs7QUFDRCx5QkFBSyxPQUFMLENBQWEsU0FBYixDQUF1QixLQUFLLE9BQTVCO0FBQ0gsaUIiLCJmaWxlIjoib3JkZXIvcHJvZHVjdC1pdGVtLmpzIiwic291cmNlUm9vdCI6Ii9zcmMifQ==
