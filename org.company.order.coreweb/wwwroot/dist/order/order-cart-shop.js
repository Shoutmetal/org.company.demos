'use strict';

System.register(['aurelia-dependency-injection', 'aurelia-validation', 'order/model', 'order/service'], function (_export, _context) {
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
        }, function (_orderModel) {
            Product = _orderModel.Product;
        }, function (_orderService) {
            Service = _orderService.Service;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyL29yZGVyLWNhcnQtc2hvcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBUSxrQiwrQkFBQSxNO0FBQVEsdUIsK0JBQUEsVzs7QUFDUixnQyxzQkFBQSxvQjs7QUFDQSxtQixlQUFBLE87O0FBQ0EsbUIsaUJBQUEsTzs7O29DQUdLLFksV0FEWixPQUFPLFlBQVksRUFBWixDQUFlLG9CQUFmLENBQVAsRUFBNkMsT0FBN0MsQztBQUdHLHNDQUFZLFVBQVosRUFBd0IsT0FBeEIsRUFBaUM7QUFBQTs7QUFDN0IseUJBQUssT0FBTCxHQUFlLE9BQWY7QUFDQSx5QkFBSyxJQUFMO0FBQ0g7O3VDQUVELEksbUJBQU07QUFBQTs7QUFDRix5QkFBSyxPQUFMLENBQWEsV0FBYixHQUEyQixJQUEzQixDQUFpQyxvQkFDakM7QUFDSSw0QkFBSSxRQUFRLEVBQVo7QUFDQSxpQ0FBUyxPQUFULENBQWlCLFVBQUMsSUFBRCxFQUFVO0FBQ3ZCLGtDQUFNLElBQU4sQ0FBVyxJQUFJLE9BQUosQ0FBWSxJQUFaLENBQVg7QUFDSCx5QkFGRDs7QUFJQSw4QkFBSyxRQUFMLEdBQWdCLEtBQWhCO0FBRUgscUJBVEQ7QUFVSCxpQiIsImZpbGUiOiJvcmRlci9vcmRlci1jYXJ0LXNob3AuanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
