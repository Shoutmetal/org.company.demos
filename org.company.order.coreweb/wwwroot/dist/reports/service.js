'use strict';

System.register(['aurelia-framework', 'services/generic-service', 'aurelia-authentication'], function (_export, _context) {
    "use strict";

    var inject, GenericService, AuthService, _dec, _class, Service;

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
        }],
        execute: function () {
            _export('Service', Service = (_dec = inject(GenericService, AuthService), _dec(_class = function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcG9ydHMvc2VydmljZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBUSxrQixxQkFBQSxNOztBQUNBLDBCLDJCQUFBLGM7O0FBQ0EsdUIsMEJBQUEsVzs7OytCQUdLLE8sV0FEWixPQUFPLGNBQVAsRUFBdUIsV0FBdkIsQztBQUdHLGlDQUFZLE9BQVosRUFBcUIsV0FBckIsRUFBaUM7QUFBQTs7QUFDN0IseUJBQUssT0FBTCxHQUFlLE9BQWY7QUFDQSx5QkFBSyxXQUFMLEdBQW1CLFdBQW5CO0FBQ0g7O2tDQUVELHFCLGtDQUFzQixFLEVBQUc7QUFDckIsMkJBQU8sS0FBSyxPQUFMLENBQWEsR0FBYixDQUFpQixrQkFBa0IsRUFBbkMsRUFBdUMsSUFBdkMsQ0FBNEM7QUFBQSwrQkFBWSxRQUFaO0FBQUEscUJBQTVDLENBQVA7QUFDSCxpQjs7a0NBRUQsYyw2QkFBZ0I7QUFDWiwyQkFBTyxLQUFLLFdBQUwsQ0FBaUIsS0FBakIsR0FBeUIsSUFBekIsQ0FBK0I7QUFBQSwrQkFBWSxRQUFaO0FBQUEscUJBQS9CLENBQVA7QUFDSCxpQiIsImZpbGUiOiJyZXBvcnRzL3NlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
