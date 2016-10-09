'use strict';

System.register(['aurelia-framework', 'services/service-custom-http', 'aurelia-authentication', 'services/service-storage'], function (_export, _context) {
    "use strict";

    var inject, CustomHttp, AuthService, Storage, _dec, _class, Service;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
        }, function (_servicesServiceCustomHttp) {
            CustomHttp = _servicesServiceCustomHttp.CustomHttp;
        }, function (_aureliaAuthentication) {
            AuthService = _aureliaAuthentication.AuthService;
        }, function (_servicesServiceStorage) {
            Storage = _servicesServiceStorage.Storage;
        }],
        execute: function () {
            _export('Service', Service = (_dec = inject(CustomHttp, Storage, AuthService), _dec(_class = function () {
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
                    return this.service.get("product/products").then(function (response) {
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

                Service.prototype.addToCart = function addToCart(product, storageName) {
                    var condition = function condition(prod) {
                        return prod.productId === product.productId;
                    };
                    var exists = this.storage.exists(storageName, condition);

                    if (!exists) this.storage.save(storageName, product);else this.storage.update(storageName, product, condition);
                };

                Service.prototype.existStorage = function existStorage(name, condition) {
                    return this.storage.exists(name, condition);
                };

                Service.prototype.cleanStorage = function cleanStorage(name) {
                    this.storage.clear(name);
                };

                Service.prototype.getStorage = function getStorage(name) {
                    return this.storage.getStorage(name);
                };

                Service.prototype.deleteStorage = function deleteStorage(name, condition) {
                    this.storage.delete(name, condition);
                };

                Service.prototype.getEventName = function getEventName(key) {
                    return this.storage.getEventName(key);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyL3NlcnZpY2UuanMiXSwibmFtZXMiOlsiaW5qZWN0IiwiQ3VzdG9tSHR0cCIsIkF1dGhTZXJ2aWNlIiwiU3RvcmFnZSIsIlNlcnZpY2UiLCJzZXJ2aWNlIiwic3RvcmFnZSIsImF1dGhTZXJ2aWNlIiwiZ2V0T3JkZXJzQnlDdXN0b21lcklkIiwiaWQiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJnZXRPcmRlckJ5SWQiLCJnZXRQcm9kdWN0cyIsInBhcmFtIiwiZ2V0Q3VzdG9tZXJCeUlkIiwic2F2ZU9yZGVyIiwib3JkZXIiLCJwb3N0IiwiYWRkVG9DYXJ0IiwicHJvZHVjdCIsInN0b3JhZ2VOYW1lIiwiY29uZGl0aW9uIiwicHJvZCIsInByb2R1Y3RJZCIsImV4aXN0cyIsInNhdmUiLCJ1cGRhdGUiLCJleGlzdFN0b3JhZ2UiLCJuYW1lIiwiY2xlYW5TdG9yYWdlIiwiY2xlYXIiLCJnZXRTdG9yYWdlIiwiZGVsZXRlU3RvcmFnZSIsImRlbGV0ZSIsImdldEV2ZW50TmFtZSIsImtleSIsImdldFVzZXJQcm9maWxlIiwiZ2V0TWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFRQSxrQixxQkFBQUEsTTs7QUFDQUMsc0IsOEJBQUFBLFU7O0FBQ0FDLHVCLDBCQUFBQSxXOztBQUNBQyxtQiwyQkFBQUEsTzs7OytCQUdLQyxPLFdBRFpKLE9BQU9DLFVBQVAsRUFBbUJFLE9BQW5CLEVBQTRCRCxXQUE1QixDO0FBR0csaUNBQVlHLE9BQVosRUFBcUJDLE9BQXJCLEVBQThCQyxXQUE5QixFQUEwQztBQUFBOztBQUN0Qyx5QkFBS0YsT0FBTCxHQUFlQSxPQUFmO0FBQ0EseUJBQUtDLE9BQUwsR0FBZUEsT0FBZjtBQUNBLHlCQUFLQyxXQUFMLEdBQW1CQSxXQUFuQjtBQUNIOztrQ0FFREMscUIsa0NBQXNCQyxFLEVBQUc7QUFDckIsMkJBQU8sS0FBS0osT0FBTCxDQUFhSyxHQUFiLENBQWlCLGtCQUFrQkQsRUFBbkMsRUFBdUNFLElBQXZDLENB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
