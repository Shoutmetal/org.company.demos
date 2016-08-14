'use strict';

System.register(['aurelia-dependency-injection', 'aurelia-validation', './model', './service'], function (_export, _context) {
    "use strict";

    var inject, NewInstance, ValidationController, Product, Service, _dec, _class, OrderPegeOne;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_aureliaDependencyInjection) {
            inject = _aureliaDependencyInjection.inject;
            NewInstance = _aureliaDependencyInjection.NewInstance;
        }, function (_aureliaValidation) {
            ValidationController = _aureliaValidation.ValidationController;
        }, function (_model) {
            Product = _model.Product;
        }, function (_service) {
            Service = _service.Service;
        }],
        execute: function () {
            _export('OrderPegeOne', OrderPegeOne = (_dec = inject(NewInstance.of(ValidationController), Service), _dec(_class = function () {
                function OrderPegeOne(controller, service) {
                    _classCallCheck(this, OrderPegeOne);

                    this.service = service;
                    this.init();
                }

                OrderPegeOne.prototype.init = function init() {
                    var _this = this;

                    this.service.getProducts().then(function (response) {
                        var items = [];
                        response.forEach(function (item) {
                            items.push(new Product(item));
                        });

                        _this.products = items;
                    });
                };

                return OrderPegeOne;
            }()) || _class));

            _export('OrderPegeOne', OrderPegeOne);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyL29yZGVyLWNhcnQtc2hvcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBUSxrQiwrQkFBQSxNO0FBQVEsdUIsK0JBQUEsVzs7QUFDUixnQyxzQkFBQSxvQjs7QUFDQSxtQixVQUFBLE87O0FBQ0EsbUIsWUFBQSxPOzs7b0NBR0ssWSxXQURaLE9BQU8sWUFBWSxFQUFaLENBQWUsb0JBQWYsQ0FBUCxFQUE2QyxPQUE3QyxDO0FBR0csc0NBQVksVUFBWixFQUF3QixPQUF4QixFQUFpQztBQUFBOztBQUM3Qix5QkFBSyxPQUFMLEdBQWUsT0FBZjtBQUNBLHlCQUFLLElBQUw7QUFDSDs7dUNBRUQsSSxtQkFBTTtBQUFBOztBQUNGLHlCQUFLLE9BQUwsQ0FBYSxXQUFiLEdBQTJCLElBQTNCLENBQWlDLG9CQUNqQztBQUNJLDRCQUFJLFFBQVEsRUFBWjtBQUNBLGlDQUFTLE9BQVQsQ0FBaUIsVUFBQyxJQUFELEVBQVU7QUFDdkIsa0NBQU0sSUFBTixDQUFXLElBQUksT0FBSixDQUFZLElBQVosQ0FBWDtBQUNILHlCQUZEOztBQUlBLDhCQUFLLFFBQUwsR0FBZ0IsS0FBaEI7QUFFSCxxQkFURDtBQVVILGlCIiwiZmlsZSI6Im9yZGVyL29yZGVyLWNhcnQtc2hvcC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
