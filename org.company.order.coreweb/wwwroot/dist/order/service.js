'use strict';

System.register(['aurelia-framework', 'services/service-generic', 'aurelia-authentication', 'services/service-storage'], function (_export, _context) {
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
        }, function (_servicesServiceGeneric) {
            GenericService = _servicesServiceGeneric.GenericService;
        }, function (_aureliaAuthentication) {
            AuthService = _aureliaAuthentication.AuthService;
        }, function (_servicesServiceStorage) {
            Storage = _servicesServiceStorage.Storage;
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
//# sourceMappingURL=data:application/json;base64,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
