'use strict';

System.register(['aurelia-framework', 'services/service-custom-http', 'aurelia-authentication'], function (_export, _context) {
    "use strict";

    var inject, CustomHttp, AuthService, _dec, _class, Service;

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
        }],
        execute: function () {
            _export('Service', Service = (_dec = inject(CustomHttp, AuthService), _dec(_class = function () {
                function Service(service, authService) {
                    _classCallCheck(this, Service);

                    this.service = service;
                    this.authService = authService;
                }

                Service.prototype.getOrdersByCustomerId = function getOrdersByCustomerId(id) {
                    return this.service.get("order/orders/" + id).then(function (response) {
                        return response;
                    });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcG9ydHMvc2VydmljZS5qcyJdLCJuYW1lcyI6WyJpbmplY3QiLCJDdXN0b21IdHRwIiwiQXV0aFNlcnZpY2UiLCJTZXJ2aWNlIiwic2VydmljZSIsImF1dGhTZXJ2aWNlIiwiZ2V0T3JkZXJzQnlDdXN0b21lcklkIiwiaWQiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJnZXRVc2VyUHJvZmlsZSIsImdldE1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBUUEsa0IscUJBQUFBLE07O0FBQ0FDLHNCLDhCQUFBQSxVOztBQUNBQyx1QiwwQkFBQUEsVzs7OytCQUdLQyxPLFdBRFpILE9BQU9DLFVBQVAsRUFBbUJDLFdBQW5CLEM7QUFHRyxpQ0FBWUUsT0FBWixFQUFxQkMsV0FBckIsRUFBaUM7QUFBQTs7QUFDN0IseUJBQUtELE9BQUwsR0FBZUEsT0FBZjtBQUNBLHlCQUFLQyxXQUFMLEdBQW1CQSxXQUFuQjtBQUNIOztrQ0FFREMscUIsa0NBQXNCQyxFLEVBQUc7QUFDckIsMkJBQU8sS0FBS0gsT0FBTCxDQUFhSSxHQUFiLENBQWlCLGtCQUFrQkQsRUFBbkMsRUFBdUNFLElBQXZDLENBQTRDO0FBQUEsK0JBQVlDLFFBQVo7QUFBQSxxQkFBNUMsQ0FBUDtBQUNILGlCOztrQ0FFREMsYyw2QkFBZ0I7QUFDWiwyQkFBTyxLQUFLTixXQUFMLENBQWlCTyxLQUFqQixHQUF5QkgsSUFBekIsQ0FBK0I7QUFBQSwrQkFBWUMsUUFBWjtBQUFBLHFCQUEvQixDQUFQO0FBQ0gsaUIiLCJmaWxlIjoicmVwb3J0cy9zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii9zcmMifQ==
