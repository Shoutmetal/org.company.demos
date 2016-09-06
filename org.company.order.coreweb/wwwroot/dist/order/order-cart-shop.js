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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyL29yZGVyLWNhcnQtc2hvcC5qcyJdLCJuYW1lcyI6WyJpbmplY3QiLCJOZXdJbnN0YW5jZSIsIlZhbGlkYXRpb25Db250cm9sbGVyIiwiUHJvZHVjdCIsIlNlcnZpY2UiLCJPcmRlclBlZ2VPbmUiLCJvZiIsImNvbnRyb2xsZXIiLCJzZXJ2aWNlIiwiaW5pdCIsImdldFByb2R1Y3RzIiwidGhlbiIsIml0ZW1zIiwicmVzcG9uc2UiLCJmb3JFYWNoIiwiaXRlbSIsInB1c2giLCJwcm9kdWN0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQVFBLGtCLCtCQUFBQSxNO0FBQVFDLHVCLCtCQUFBQSxXOztBQUNSQyxnQyxzQkFBQUEsb0I7O0FBQ0FDLG1CLGVBQUFBLE87O0FBQ0FDLG1CLGlCQUFBQSxPOzs7b0NBR0tDLFksV0FEWkwsT0FBT0MsWUFBWUssRUFBWixDQUFlSixvQkFBZixDQUFQLEVBQTZDRSxPQUE3QyxDO0FBR0csc0NBQVlHLFVBQVosRUFBd0JDLE9BQXhCLEVBQWlDO0FBQUE7O0FBQzdCLHlCQUFLQSxPQUFMLEdBQWVBLE9BQWY7QUFDQSx5QkFBS0MsSUFBTDtBQUNIOzt1Q0FFREEsSSxtQkFBTTtBQUFBOztBQUNGLHlCQUFLRCxPQUFMLENBQWFFLFdBQWIsR0FBMkJDLElBQTNCLENBQWlDLG9CQUNqQztBQUNJLDRCQUFJQyxRQUFRLEVBQVo7QUFDQUMsaUNBQVNDLE9BQVQsQ0FBaUIsVUFBQ0MsSUFBRCxFQUFVO0FBQ3ZCSCxrQ0FBTUksSUFBTixDQUFXLElBQUliLE9BQUosQ0FBWVksSUFBWixDQUFYO0FBQ0gseUJBRkQ7O0FBSUEsOEJBQUtFLFFBQUwsR0FBZ0JMLEtBQWhCO0FBRUgscUJBVEQ7QUFVSCxpQiIsImZpbGUiOiJvcmRlci9vcmRlci1jYXJ0LXNob3AuanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
