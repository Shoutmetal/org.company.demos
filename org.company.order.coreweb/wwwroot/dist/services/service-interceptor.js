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
                function ServiceInterceptor() {
                    _classCallCheck(this, ServiceInterceptor);

                    this.expires_in = 0;

                    var container = Container.instance;
                    this.authService = container.get(AuthService);
                    this.auth_object = this.authService.authentication.getResponseObject();
                }

                ServiceInterceptor.prototype.request = function request(_request) {
                    return _request;
                };

                ServiceInterceptor.prototype.requestError = function requestError(error) {
                    throw error;
                };

                ServiceInterceptor.prototype.response = function response(_response) {
                    this.expires_in = this.auth_object.expires_in;

                    this.calculate();

                    return _response;
                };

                ServiceInterceptor.prototype.responseError = function responseError(error) {
                    if (error.statusCode == 401) {

                        var container = Container.instance;
                        var auth = container.get(AuthService);
                        auth.logout();

                        window.location.href = "/";
                    }
                    throw error;
                };

                ServiceInterceptor.prototype.calculate = function calculate() {};

                return ServiceInterceptor;
            }());

            _export('ServiceInterceptor', ServiceInterceptor);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3NlcnZpY2UtaW50ZXJjZXB0b3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQVEsd0IscUJBQUEsWTs7QUFDQSx1QiwwQkFBQSxXOztBQUNBLHFCLCtCQUFBLFM7OzswQ0FFSyxrQjtBQUdULDhDQUFhO0FBQUE7O0FBQ1QseUJBQUssVUFBTCxHQUFrQixDQUFsQjs7QUFFQSx3QkFBSSxZQUFZLFVBQVUsUUFBMUI7QUFDQSx5QkFBSyxXQUFMLEdBQW1CLFVBQVUsR0FBVixDQUFjLFdBQWQsQ0FBbkI7QUFDQSx5QkFBSyxXQUFMLEdBQW1CLEtBQUssV0FBTCxDQUFpQixjQUFqQixDQUFnQyxpQkFBaEMsRUFBbkI7QUFDSDs7NkNBRUQsTyxvQkFBUSxRLEVBQVM7QUFDYiwyQkFBTyxRQUFQO0FBQ0gsaUI7OzZDQUVELFkseUJBQWEsSyxFQUFNO0FBQ2YsMEJBQU0sS0FBTjtBQUNILGlCOzs2Q0FFRCxRLHFCQUFTLFMsRUFBVTtBQUNmLHlCQUFLLFVBQUwsR0FBa0IsS0FBSyxXQUFMLENBQWlCLFVBQW5DOztBQUVBLHlCQUFLLFNBQUw7O0FBRUEsMkJBQU8sU0FBUDtBQUNILGlCOzs2Q0FFRCxhLDBCQUFjLEssRUFBTTtBQUNoQix3QkFBSSxNQUFNLFVBQU4sSUFBb0IsR0FBeEIsRUFBNkI7O0FBRXpCLDRCQUFJLFlBQVksVUFBVSxRQUExQjtBQUNBLDRCQUFJLE9BQU8sVUFBVSxHQUFWLENBQWMsV0FBZCxDQUFYO0FBQ0EsNkJBQUssTUFBTDs7QUFFQSwrQkFBTyxRQUFQLENBQWdCLElBQWhCLEdBQXVCLEdBQXZCO0FBQ0g7QUFDRCwwQkFBTSxLQUFOO0FBQ0gsaUI7OzZDQUVELFMsd0JBQVcsQ0FLVixDIiwiZmlsZSI6InNlcnZpY2VzL3NlcnZpY2UtaW50ZXJjZXB0b3IuanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
