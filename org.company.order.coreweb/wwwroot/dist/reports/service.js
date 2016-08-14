'use strict';

System.register(['aurelia-framework', 'services/generic-service'], function (_export, _context) {
    "use strict";

    var inject, GenericService, _dec, _class, Service;

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
        }],
        execute: function () {
            _export('Service', Service = (_dec = inject(GenericService), _dec(_class = function () {
                function Service(service) {
                    _classCallCheck(this, Service);

                    this.service = service;
                }

                Service.prototype.getOrdersByCustomerId = function getOrdersByCustomerId(id) {
                    return this.service.get("order/orders/" + id).then(function (response) {
                        return response;
                    });
                };

                return Service;
            }()) || _class));

            _export('Service', Service);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcG9ydHMvc2VydmljZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBUSxrQixxQkFBQSxNOztBQUNBLDBCLDJCQUFBLGM7OzsrQkFHSyxPLFdBRFosT0FBTyxjQUFQLEM7QUFHRyxpQ0FBWSxPQUFaLEVBQW9CO0FBQUE7O0FBQ2hCLHlCQUFLLE9BQUwsR0FBZSxPQUFmO0FBQ0g7O2tDQUVELHFCLGtDQUFzQixFLEVBQUc7QUFDckIsMkJBQU8sS0FBSyxPQUFMLENBQWEsR0FBYixDQUFpQixrQkFBa0IsRUFBbkMsRUFBdUMsSUFBdkMsQ0FBNEM7QUFBQSwrQkFBWSxRQUFaO0FBQUEscUJBQTVDLENBQVA7QUFDSCxpQiIsImZpbGUiOiJyZXBvcnRzL3NlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
