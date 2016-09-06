'use strict';

System.register(['aurelia-framework', 'aurelia-authentication', 'aurelia-dependency-injection'], function (_export, _context) {
    "use strict";

    var computedFrom, AuthService, Container, ServiceInterceptor;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_aureliaFramework) {
            computedFrom = _aureliaFramework.computedFrom;
        }, function (_aureliaAuthentication) {
            AuthService = _aureliaAuthentication.AuthService;
        }, function (_aureliaDependencyInjection) {
            Container = _aureliaDependencyInjection.Container;
        }],
        execute: function () {
            _export('ServiceInterceptor', ServiceInterceptor = function () {
                function ServiceInterceptor(serviceRefreshToken) {
                    _classCallCheck(this, ServiceInterceptor);

                    this.expires_in = 0;

                    var container = Container.instance;
                    this.authService = container.get(AuthService);
                    this.auth_object = this.authService.authentication.getResponseObject();
                    this.serviceRefreshToken = serviceRefreshToken;
                    this.serviceRefreshToken.configure({
                        expiresIn: this.auth_object.expires_in - 60
                    });

                    this.serviceRefreshToken.start();
                }

                ServiceInterceptor.prototype.request = function request(_request) {
                    return _request;
                };

                ServiceInterceptor.prototype.requestError = function requestError(error) {
                    throw error;
                };

                ServiceInterceptor.prototype.response = function response(_response) {

                    return _response;
                };

                ServiceInterceptor.prototype.responseError = function responseError(error) {
                    if (error.statusCode == 401) {}
                    throw error;
                };

                return ServiceInterceptor;
            }());

            _export('ServiceInterceptor', ServiceInterceptor);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3NlcnZpY2UtaW50ZXJjZXB0b3IuanMiXSwibmFtZXMiOlsiY29tcHV0ZWRGcm9tIiwiQXV0aFNlcnZpY2UiLCJDb250YWluZXIiLCJTZXJ2aWNlSW50ZXJjZXB0b3IiLCJzZXJ2aWNlUmVmcmVzaFRva2VuIiwiZXhwaXJlc19pbiIsImNvbnRhaW5lciIsImluc3RhbmNlIiwiYXV0aFNlcnZpY2UiLCJnZXQiLCJhdXRoX29iamVjdCIsImF1dGhlbnRpY2F0aW9uIiwiZ2V0UmVzcG9uc2VPYmplY3QiLCJjb25maWd1cmUiLCJleHBpcmVzSW4iLCJzdGFydCIsInJlcXVlc3QiLCJyZXF1ZXN0RXJyb3IiLCJlcnJvciIsInJlc3BvbnNlIiwicmVzcG9uc2VFcnJvciIsInN0YXR1c0NvZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFRQSx3QixxQkFBQUEsWTs7QUFDQUMsdUIsMEJBQUFBLFc7O0FBQ0FDLHFCLCtCQUFBQSxTOzs7MENBRUtDLGtCO0FBRVQsNENBQVlDLG1CQUFaLEVBQWdDO0FBQUE7O0FBQzVCLHlCQUFLQyxVQUFMLEdBQWtCLENBQWxCOztBQUVBLHdCQUFJQyxZQUFZSixVQUFVSyxRQUExQjtBQUNBLHlCQUFLQyxXQUFMLEdBQW1CRixVQUFVRyxHQUFWLENBQWNSLFdBQWQsQ0FBbkI7QUFDQSx5QkFBS1MsV0FBTCxHQUFtQixLQUFLRixXQUFMLENBQWlCRyxjQUFqQixDQUFnQ0MsaUJBQWhDLEVBQW5CO0FBQ0EseUJBQUtSLG1CQUFMLEdBQTJCQSxtQkFBM0I7QUFDQSx5QkFBS0EsbUJBQUwsQ0FBeUJTLFNBQXpCLENBQW1DO0FBQy9CQyxtQ0FBYSxLQUFLSixXQUFMLENBQWlCTCxVQUFqQixHQUE4QjtBQURaLHFCQUFuQzs7QUFJQSx5QkFBS0QsbUJBQUwsQ0FBeUJXLEtBQXpCO0FBQ0g7OzZDQUVEQyxPLG9CQUFRQSxRLEVBQVM7QUFDYiwyQkFBT0EsUUFBUDtBQUNILGlCOzs2Q0FFREMsWSx5QkFBYUMsSyxFQUFNO0FBQ2YsMEJBQU1BLEtBQU47QUFDSCxpQjs7NkNBRURDLFEscUJBQVNBLFMsRUFBVTs7QUFHZiwyQkFBT0EsU0FBUDtBQUNILGlCOzs2Q0FFREMsYSwwQkFBY0YsSyxFQUFNO0FBQ2hCLHdCQUFJQSxNQUFNRyxVQUFOLElBQW9CLEdBQXhCLEVBQTZCLENBRTVCO0FBQ0QsMEJBQU1ILEtBQU47QUFDSCxpQiIsImZpbGUiOiJzZXJ2aWNlcy9zZXJ2aWNlLWludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6Ii9zcmMifQ==
