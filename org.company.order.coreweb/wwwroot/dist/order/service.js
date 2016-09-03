'use strict';

System.register(['aurelia-framework', 'services/generic-service', 'aurelia-authentication', 'services/storage'], function (_export, _context) {
    "use strict";

    var inject, GenericService, AuthService, Storage, _dec, _class, Service;

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
        }, function (_aureliaAuthentication) {
            AuthService = _aureliaAuthentication.AuthService;
        }, function (_servicesStorage) {
            Storage = _servicesStorage.Storage;
        }],
        execute: function () {
            _export('Service', Service = (_dec = inject(GenericService, Storage, AuthService), _dec(_class = function () {
                function Service(service, storage, authService) {
                    _classCallCheck(this, Service);

                    this.service = service;
                    this.storage = storage;
                    this.authService = authService;
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

                Service.prototype.getUserProfile = function getUserProfile() {
                    return this.authService.getMe().then(function (response) {
                        return response;
                    });
                };

                return Service;
            }()) || _class));

            _export('Service', Service);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyL3NlcnZpY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQVEsa0IscUJBQUEsTTs7QUFDQSwwQiwyQkFBQSxjOztBQUNBLHVCLDBCQUFBLFc7O0FBQ0EsbUIsb0JBQUEsTzs7OytCQUdLLE8sV0FEWixPQUFPLGNBQVAsRUFBdUIsT0FBdkIsRUFBZ0MsV0FBaEMsQztBQUdHLGlDQUFZLE9BQVosRUFBcUIsT0FBckIsRUFBOEIsV0FBOUIsRUFBMEM7QUFBQTs7QUFDdEMseUJBQUssT0FBTCxHQUFlLE9BQWY7QUFDQSx5QkFBSyxPQUFMLEdBQWUsT0FBZjtBQUNBLHlCQUFLLFdBQUwsR0FBbUIsV0FBbkI7QUFDSDs7a0NBRUQscUIsa0NBQXNCLEUsRUFBRztBQUNyQiwyQkFBTyxLQUFLLE9BQUwsQ0FBYSxHQUFiLENBQWlCLGtCQUFrQixFQUFuQyxFQUF1QyxJQUF2QyxDQUE0QztBQUFBLCtCQUFZLFFBQVo7QUFBQSxxQkFBNUMsQ0FBUDtBQUNILGlCOztrQ0FFRCxZLHlCQUFhLEUsRUFBRztBQUNaLDJCQUFPLEtBQUssT0FBTCxDQUFhLEdBQWIsQ0FBaUIsaUJBQWlCLEVBQWxDLEVBQXNDLElBQXRDLENBQTJDO0FBQUEsK0JBQVksUUFBWjtBQUFBLHFCQUEzQyxDQUFQO0FBQ0gsaUI7O2tDQUVELFcsd0JBQVksSyxFQUFNO0FBQ2QsMkJBQU8sS0FBSyxPQUFMLENBQWEsR0FBYixDQUFpQixnQkFBakIsRUFBbUMsSUFBbkMsQ0FBd0M7QUFBQSwrQkFBWSxRQUFaO0FBQUEscUJBQXhDLENBQVA7QUFDSCxpQjs7a0NBRUQsZSw0QkFBZ0IsRSxFQUFHO0FBQ2YsMkJBQU8sS0FBSyxPQUFMLENBQWEsR0FBYixDQUFpQix1QkFBc0IsRUFBdkMsRUFBMkMsSUFBM0MsQ0FBZ0Q7QUFBQSwrQkFBWSxRQUFaO0FBQUEscUJBQWhELENBQVA7QUFDSCxpQjs7a0NBRUQsUyxzQkFBVSxLLEVBQ1Y7QUFDSSwyQkFBTyxLQUFLLE9BQUwsQ0FBYSxJQUFiLENBQWtCLFlBQWxCLEVBQWdDLEtBQWhDLEVBQXVDLElBQXZDLENBQTZDO0FBQUEsK0JBQVksUUFBWjtBQUFBLHFCQUE3QyxDQUFQO0FBQ0gsaUI7O2tDQUVELFMsc0JBQVUsTyxFQUFRO0FBQ2Qsd0JBQUksWUFBWSxTQUFaLFNBQVksQ0FBQyxJQUFELEVBQVU7QUFBRSwrQkFBTyxLQUFLLFNBQUwsS0FBbUIsUUFBUSxTQUFsQztBQUE2QyxxQkFBekU7QUFDQSx3QkFBSSxjQUFjLE1BQWxCO0FBQ0Esd0JBQUksU0FBUyxLQUFLLE9BQUwsQ0FBYSxNQUFiLENBQW9CLFdBQXBCLEVBQWlDLFNBQWpDLENBQWI7O0FBRUEsd0JBQUcsQ0FBQyxNQUFKLEVBQ0ksS0FBSyxPQUFMLENBQWEsSUFBYixDQUFrQixXQUFsQixFQUErQixPQUEvQixFQURKLEtBR0ksS0FBSyxPQUFMLENBQWEsTUFBYixDQUFvQixXQUFwQixFQUFpQyxPQUFqQyxFQUEwQyxTQUExQztBQUNQLGlCOztrQ0FFRCxjLDZCQUFnQjtBQUNaLDJCQUFPLEtBQUssV0FBTCxDQUFpQixLQUFqQixHQUF5QixJQUF6QixDQUErQjtBQUFBLCtCQUFZLFFBQVo7QUFBQSxxQkFBL0IsQ0FBUDtBQUNILGlCIiwiZmlsZSI6Im9yZGVyL3NlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
