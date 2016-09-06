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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyL3Byb2R1Y3QtaXRlbS5qcyJdLCJuYW1lcyI6WyJpbmplY3QiLCJFdmVudEFnZ3JlZ2F0b3IiLCJTZXJ2aWNlIiwiUHJvZHVjdEl0ZW0iLCJzZXJ2aWNlIiwiZXZlbnQiLCJjb25kaXRpb24iLCJwcm9kIiwicHJvZHVjdElkIiwicHJvZHVjdCIsImF0dGFjaGVkIiwiaXNBY3RpdmUiLCJleGlzdFN0b3JhZ2UiLCJzdWJzY3JpYmUiLCJnZXRFdmVudE5hbWUiLCJleGlzdHMiLCJhY3RpdmF0ZSIsIml0ZW0iLCJhZGQiLCJhZGRUb0NhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFRQSxrQixxQkFBQUEsTTs7QUFDQUMsMkIsMkJBQUFBLGU7O0FBQ0FDLG1CLFlBQUFBLE87OzttQ0FHS0MsVyxXQURaSCxPQUFPRSxPQUFQLEVBQWdCRCxlQUFoQixDO0FBR0cscUNBQVlHLE9BQVosRUFBcUJDLEtBQXJCLEVBQTJCO0FBQUE7O0FBQUE7O0FBQ3ZCLHlCQUFLRCxPQUFMLEdBQWVBLE9BQWY7QUFDQSx5QkFBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0EseUJBQUtDLFNBQUwsR0FBaUIsVUFBQ0MsSUFBRCxFQUFVO0FBQUUsK0JBQU9BLEtBQUtDLFNBQUwsS0FBbUIsTUFBS0MsT0FBTCxDQUFhRCxTQUF2QztBQUFrRCxxQkFBL0U7QUFDSDs7c0NBRURFLFEsdUJBQVU7QUFBQTs7QUFDTix5QkFBS0MsUUFBTCxHQUFpQixLQUFLUCxPQUFMLENBQWFRLFlBQWIsQ0FBMEIsTUFBMUIsRUFBa0MsS0FBS04sU0FBdkMsQ0FBakI7O0FBRUEseUJBQUtELEtBQUwsQ0FBV1EsU0FBWCxDQUFxQixLQUFLVCxPQUFMLENBQWFVLFlBQWIsQ0FBMEIsTUFBMUIsQ0FBckIsRUFBd0QsWUFBTTtBQUMxRCw0QkFBSUMsU0FBUyxPQUFLWCxPQUFMLENBQWFRLFlBQWIsQ0FBMEIsTUFBMUIsRUFBa0MsT0FBS04sU0FBdkMsQ0FBYjtBQUNBLCtCQUFLSyxRQUFMLEdBQWdCSSxTQUFTLElBQVQsR0FBZ0IsS0FBaEM7QUFDSCxxQkFIRDtBQUlILGlCOztzQ0FFREMsUSxxQkFBU0MsSSxFQUFLOztBQUVWLHlCQUFLUixPQUFMLEdBQWVRLElBQWY7QUFDSCxpQjs7c0NBRURDLEcsa0JBQUs7QUFDRCx5QkFBS2QsT0FBTCxDQUFhZSxTQUFiLENBQXVCLEtBQUtWLE9BQTVCLEVBQXFDLE1BQXJDO0FBQ0gsaUIiLCJmaWxlIjoib3JkZXIvcHJvZHVjdC1pdGVtLmpzIiwic291cmNlUm9vdCI6Ii9zcmMifQ==
