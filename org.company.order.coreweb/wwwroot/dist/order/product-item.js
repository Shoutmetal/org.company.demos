'use strict';

System.register(['aurelia-framework', 'aurelia-event-aggregator', './service'], function (_export, _context) {
    "use strict";

    var inject, EventAggregator, Service, _dec, _class, ProductItem;

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
        }],
        execute: function () {
            _export('ProductItem', ProductItem = (_dec = inject(Service, EventAggregator), _dec(_class = function () {
                function ProductItem(service, event) {
                    var _this = this;

                    _classCallCheck(this, ProductItem);

                    this.service = service;
                    this.event = event;
                    this.condition = function (prod) {
                        return prod.productId === _this.product.productId;
                    };
                }

                ProductItem.prototype.attached = function attached() {
                    var _this2 = this;

                    this.isActive = this.service.existStorage("cart", this.condition);

                    this.event.subscribe(this.service.getEventName("cart"), function () {
                        var exists = _this2.service.existStorage("cart", _this2.condition);
                        _this2.isActive = exists ? true : false;
                    });
                };

                ProductItem.prototype.activate = function activate(item) {

                    this.product = item;
                };

                ProductItem.prototype.add = function add() {
                    this.service.addToCart(this.product, "cart");
                };

                return ProductItem;
            }()) || _class));

            _export('ProductItem', ProductItem);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyL3Byb2R1Y3QtaXRlbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBUSxrQixxQkFBQSxNOztBQUNBLDJCLDJCQUFBLGU7O0FBQ0EsbUIsWUFBQSxPOzs7bUNBR0ssVyxXQURaLE9BQU8sT0FBUCxFQUFnQixlQUFoQixDO0FBR0cscUNBQVksT0FBWixFQUFxQixLQUFyQixFQUEyQjtBQUFBOztBQUFBOztBQUN2Qix5QkFBSyxPQUFMLEdBQWUsT0FBZjtBQUNBLHlCQUFLLEtBQUwsR0FBYSxLQUFiO0FBQ0EseUJBQUssU0FBTCxHQUFpQixVQUFDLElBQUQsRUFBVTtBQUFFLCtCQUFPLEtBQUssU0FBTCxLQUFtQixNQUFLLE9BQUwsQ0FBYSxTQUF2QztBQUFrRCxxQkFBL0U7QUFDSDs7c0NBRUQsUSx1QkFBVTtBQUFBOztBQUNOLHlCQUFLLFFBQUwsR0FBaUIsS0FBSyxPQUFMLENBQWEsWUFBYixDQUEwQixNQUExQixFQUFrQyxLQUFLLFNBQXZDLENBQWpCOztBQUVBLHlCQUFLLEtBQUwsQ0FBVyxTQUFYLENBQXFCLEtBQUssT0FBTCxDQUFhLFlBQWIsQ0FBMEIsTUFBMUIsQ0FBckIsRUFBd0QsWUFBTTtBQUMxRCw0QkFBSSxTQUFTLE9BQUssT0FBTCxDQUFhLFlBQWIsQ0FBMEIsTUFBMUIsRUFBa0MsT0FBSyxTQUF2QyxDQUFiO0FBQ0EsK0JBQUssUUFBTCxHQUFnQixTQUFTLElBQVQsR0FBZ0IsS0FBaEM7QUFDSCxxQkFIRDtBQUlILGlCOztzQ0FFRCxRLHFCQUFTLEksRUFBSzs7QUFFVix5QkFBSyxPQUFMLEdBQWUsSUFBZjtBQUNILGlCOztzQ0FFRCxHLGtCQUFLO0FBQ0QseUJBQUssT0FBTCxDQUFhLFNBQWIsQ0FBdUIsS0FBSyxPQUE1QixFQUFxQyxNQUFyQztBQUNILGlCIiwiZmlsZSI6Im9yZGVyL3Byb2R1Y3QtaXRlbS5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
