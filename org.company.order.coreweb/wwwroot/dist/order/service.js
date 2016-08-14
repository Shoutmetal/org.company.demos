'use strict';

System.register(['aurelia-framework', 'services/generic-service', 'services/storage'], function (_export, _context) {
    "use strict";

    var inject, GenericService, Storage, _dec, _class, Service;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
        }, function (_servicesGenericService) {
            GenericService = _servicesGenericService.GenericService;
        }, function (_servicesStorage) {
            Storage = _servicesStorage.Storage;
        }],
        execute: function () {
            _export('Service', Service = (_dec = inject(GenericService, Storage), _dec(_class = function () {
                function Service(service, storage) {
                    _classCallCheck(this, Service);

                    this.service = service;
                    this.storage = storage;
                }

                Service.prototype.getOrdersByCustomerId = function getOrdersByCustomerId(id) {
                    return this.service.get("order/orders/" + id).then(function (response) {
                        return response;
                    });
                };

                Service.prototype.getOrderById = function getOrderById(id) {
                    return this.service.get("order/order/" + id).then(function (response) {
                        return response;
                    });
                };

                Service.prototype.getProducts = function getProducts(param) {
                    return this.service.get("order/products").then(function (response) {
                        return response;
                    });
                };

                Service.prototype.getCustomerById = function getCustomerById(id) {
                    return this.service.get("customer/customer/" + id).then(function (response) {
                        return response;
                    });
                };

                Service.prototype.saveOrder = function saveOrder(order) {
                    return this.service.post("order/save", order).then(function (response) {
                        return response;
                    });
                };

                Service.prototype.addToCart = function addToCart(product) {
                    var condition = function condition(prod) {
                        return prod.productId === product.productId;
                    };
                    var storageName = "cart";
                    var exists = this.storage.exists(storageName, condition);

                    if (!exists) this.storage.save(storageName, product);else this.storage.update(storageName, product, condition);
                };

                return Service;
            }()) || _class));

            _export('Service', Service);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyL3NlcnZpY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQVEsa0IscUJBQUEsTTs7QUFDQSwwQiwyQkFBQSxjOztBQUNBLG1CLG9CQUFBLE87OzsrQkFHSyxPLFdBRFosT0FBTyxjQUFQLEVBQXVCLE9BQXZCLEM7QUFHRyxpQ0FBWSxPQUFaLEVBQXFCLE9BQXJCLEVBQTZCO0FBQUE7O0FBQ3pCLHlCQUFLLE9BQUwsR0FBZSxPQUFmO0FBQ0EseUJBQUssT0FBTCxHQUFlLE9BQWY7QUFDSDs7a0NBRUQscUIsa0NBQXNCLEUsRUFBRztBQUNyQiwyQkFBTyxLQUFLLE9BQUwsQ0FBYSxHQUFiLENBQWlCLGtCQUFrQixFQUFuQyxFQUF1QyxJQUF2QyxDQUE0QztBQUFBLCtCQUFZLFFBQVo7QUFBQSxxQkFBNUMsQ0FBUDtBQUNILGlCOztrQ0FFRCxZLHlCQUFhLEUsRUFBRztBQUNaLDJCQUFPLEtBQUssT0FBTCxDQUFhLEdBQWIsQ0FBaUIsaUJBQWlCLEVBQWxDLEVBQXNDLElBQXRDLENBQTJDO0FBQUEsK0JBQVksUUFBWjtBQUFBLHFCQUEzQyxDQUFQO0FBQ0gsaUI7O2tDQUVELFcsd0JBQVksSyxFQUFNO0FBQ2QsMkJBQU8sS0FBSyxPQUFMLENBQWEsR0FBYixDQUFpQixnQkFBakIsRUFBbUMsSUFBbkMsQ0FBd0M7QUFBQSwrQkFBWSxRQUFaO0FBQUEscUJBQXhDLENBQVA7QUFDSCxpQjs7a0NBRUQsZSw0QkFBZ0IsRSxFQUFHO0FBQ2YsMkJBQU8sS0FBSyxPQUFMLENBQWEsR0FBYixDQUFpQix1QkFBc0IsRUFBdkMsRUFBMkMsSUFBM0MsQ0FBZ0Q7QUFBQSwrQkFBWSxRQUFaO0FBQUEscUJBQWhELENBQVA7QUFDSCxpQjs7a0NBRUQsUyxzQkFBVSxLLEVBQ1Y7QUFDSSwyQkFBTyxLQUFLLE9BQUwsQ0FBYSxJQUFiLENBQWtCLFlBQWxCLEVBQWdDLEtBQWhDLEVBQXVDLElBQXZDLENBQTZDO0FBQUEsK0JBQVksUUFBWjtBQUFBLHFCQUE3QyxDQUFQO0FBQ0gsaUI7O2tDQUVELFMsc0JBQVUsTyxFQUFRO0FBQ2Qsd0JBQUksWUFBWSxTQUFaLFNBQVksQ0FBQyxJQUFELEVBQVU7QUFBRSwrQkFBTyxLQUFLLFNBQUwsS0FBbUIsUUFBUSxTQUFsQztBQUE2QyxxQkFBekU7QUFDQSx3QkFBSSxjQUFjLE1BQWxCO0FBQ0Esd0JBQUksU0FBUyxLQUFLLE9BQUwsQ0FBYSxNQUFiLENBQW9CLFdBQXBCLEVBQWlDLFNBQWpDLENBQWI7O0FBRUEsd0JBQUcsQ0FBQyxNQUFKLEVBQ0ksS0FBSyxPQUFMLENBQWEsSUFBYixDQUFrQixXQUFsQixFQUErQixPQUEvQixFQURKLEtBR0ksS0FBSyxPQUFMLENBQWEsTUFBYixDQUFvQixXQUFwQixFQUFpQyxPQUFqQyxFQUEwQyxTQUExQztBQUNQLGlCIiwiZmlsZSI6Im9yZGVyL3NlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
