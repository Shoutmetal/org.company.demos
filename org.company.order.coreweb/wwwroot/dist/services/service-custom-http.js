'use strict';

System.register(['aurelia-framework', 'aurelia-http-client', 'common/components/spinner', 'aurelia-authentication', 'services/service-interceptor'], function (_export, _context) {
    "use strict";

    var inject, HttpClient, Spinner, AuthService, ServiceInterceptor, _dec, _class, CustomHttp;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
        }, function (_aureliaHttpClient) {
            HttpClient = _aureliaHttpClient.HttpClient;
        }, function (_commonComponentsSpinner) {
            Spinner = _commonComponentsSpinner.Spinner;
        }, function (_aureliaAuthentication) {
            AuthService = _aureliaAuthentication.AuthService;
        }, function (_servicesServiceInterceptor) {
            ServiceInterceptor = _servicesServiceInterceptor.ServiceInterceptor;
        }],
        execute: function () {
            _export('CustomHttp', CustomHttp = (_dec = inject(HttpClient, Spinner, AuthService), _dec(_class = function () {
                function CustomHttp(http, spinner, authService) {
                    var _this = this;

                    _classCallCheck(this, CustomHttp);

                    this.http = http;
                    this.spinner = spinner;
                    this.authService = authService;

                    this.http.configure(function (x) {
                        x.withBaseUrl(_this.authService.client.client.baseUrl + "/api/");
                        x.withHeader('Content-Type', 'application/json');
                        x.withHeader('Authorization', 'bearer ' + _this.authService.getAccessToken());
                    });
                }

                CustomHttp.prototype.get = function get(url) {
                    var _this2 = this;

                    this.spinner.on();
                    var http = this.http;
                    var promise = new Promise(function (resolve, reject) {
                        http.createRequest(url).asGet().send().then(function (response) {
                            return resolve(response.content);
                        }).then(function () {
                            _this2.spinner.off();
                        }, function (err) {
                            reject(err);
                            _this2.spinner.off();
                        });
                    });
                    return promise;
                };

                CustomHttp.prototype.post = function post(url, data) {
                    var _this3 = this;

                    this.spinner.on();
                    var http = this.http;
                    var promise = new Promise(function (resolve, reject) {
                        http.createRequest(url).asPost().withContent(data).send().then(function (response) {
                            return resolve(response);
                        }).then(function () {
                            _this3.spinner.off();
                        }, function (err) {
                            reject(err);
                            _this3.spinner.off();
                        });
                    });

                    return promise;
                };

                return CustomHttp;
            }()) || _class));

            _export('CustomHttp', CustomHttp);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3NlcnZpY2UtY3VzdG9tLWh0dHAuanMiXSwibmFtZXMiOlsiaW5qZWN0IiwiSHR0cENsaWVudCIsIlNwaW5uZXIiLCJBdXRoU2VydmljZSIsIlNlcnZpY2VJbnRlcmNlcHRvciIsIkN1c3RvbUh0dHAiLCJodHRwIiwic3Bpbm5lciIsImF1dGhTZXJ2aWNlIiwiY29uZmlndXJlIiwieCIsIndpdGhCYXNlVXJsIiwiY2xpZW50IiwiYmFzZVVybCIsIndpdGhIZWFkZXIiLCJnZXRBY2Nlc3NUb2tlbiIsImdldCIsInVybCIsIm9uIiwicHJvbWlzZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiY3JlYXRlUmVxdWVzdCIsImFzR2V0Iiwic2VuZCIsInRoZW4iLCJyZXNwb25zZSIsImNvbnRlbnQiLCJvZmYiLCJlcnIiLCJwb3N0IiwiZGF0YSIsImFzUG9zdCIsIndpdGhDb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBUUEsa0IscUJBQUFBLE07O0FBQ0FDLHNCLHNCQUFBQSxVOztBQUNBQyxtQiw0QkFBQUEsTzs7QUFDQUMsdUIsMEJBQUFBLFc7O0FBQ0FDLDhCLCtCQUFBQSxrQjs7O2tDQUlLQyxVLFdBRFpMLE9BQU9DLFVBQVAsRUFBbUJDLE9BQW5CLEVBQTRCQyxXQUE1QixDO0FBR0csb0NBQVlHLElBQVosRUFBa0JDLE9BQWxCLEVBQTJCQyxXQUEzQixFQUF1QztBQUFBOztBQUFBOztBQUNuQyx5QkFBS0YsSUFBTCxHQUFZQSxJQUFaO0FBQ0EseUJBQUtDLE9BQUwsR0FBZUEsT0FBZjtBQUNBLHlCQUFLQyxXQUFMLEdBQW1CQSxXQUFuQjs7QUFFQSx5QkFBS0YsSUFBTCxDQUFVRyxTQUFWLENBQW9CLGFBQUs7QUFDckJDLDBCQUFFQyxXQUFGLENBQWUsTUFBS0gsV0FBTCxDQUFpQkksTUFBakIsQ0FBd0JBLE1BQXhCLENBQStCQyxPQUEvQixHQUF5QyxPQUF4RDtBQUNBSCwwQkFBRUksVUFBRixDQUFhLGNBQWIsRUFBNkIsa0JBQTdCO0FBQ0FKLDBCQUFFSSxVQUFGLENBQWEsZUFBYixFQUE4QixZQUFZLE1BQUtOLFdBQUwsQ0FBaUJPLGNBQWpCLEVBQTFDO0FBRUgscUJBTEQ7QUFNSDs7cUNBRURDLEcsZ0JBQUlDLEcsRUFBSztBQUFBOztBQUNMLHlCQUFLVixPQUFMLENBQWFXLEVBQWI7QUFDQSx3QkFBSVosT0FBTyxLQUFLQSxJQUFoQjtBQUNBLHdCQUFJYSxVQUFVLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDM0NoQiw2QkFBS2lCLGFBQUwsQ0FBbUJOLEdBQW5CLEVBQ1BPLEtBRE8sR0FFUEMsSUFGTyxHQUdQQyxJQUhPLENBR0Y7QUFBQSxtQ0FBWUwsUUFBUU0sU0FBU0MsT0FBakIsQ0FBWjtBQUFBLHlCQUhFLEVBSVBGLElBSk8sQ0FJRCxZQUFLO0FBQUUsbUNBQUtuQixPQUFMLENBQWFzQixHQUFiO0FBQW9CLHlCQUoxQixFQUtNLGVBQ0Y7QUFDSVAsbUNBQU9RLEdBQVA7QUFDQSxtQ0FBS3ZCLE9BQUwsQ0FBYXNCLEdBQWI7QUFFSCx5QkFWTDtBQVdILHFCQVphLENBQWQ7QUFhQSwyQkFBT1YsT0FBUDtBQUNILGlCOztxQ0FFRFksSSxpQkFBS2QsRyxFQUFLZSxJLEVBQU07QUFBQTs7QUFDWix5QkFBS3pCLE9BQUwsQ0FBYVcsRUFBYjtBQUNBLHdCQUFJWixPQUFPLEtBQUtBLElBQWhCO0FBQ0Esd0JBQUlhLFVBQVUsSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUMzQ2hCLDZCQUFLaUIsYUFBTCxDQUFtQk4sR0FBbkIsRUFDUGdCLE1BRE8sR0FFUEMsV0FGTyxDQUVLRixJQUZMLEVBR1BQLElBSE8sR0FJUEMsSUFKTyxDQUlGO0FBQUEsbUNBQVlMLFFBQVFNLFFBQVIsQ0FBWjtBQUFBLHlCQUpFLEVBS1BELElBTE8sQ0FLRCxZQUFLO0FBQUUsbUNBQUtuQixPQUFMLENBQWFzQixHQUFiO0FBQW9CLHlCQUwxQixFQU1NLGVBQ0Y7QUFDSVAsbUNBQU9RLEdBQVA7QUFDQSxtQ0FBS3ZCLE9BQUwsQ0FBYXNCLEdBQWI7QUFFSCx5QkFYTDtBQVlILHFCQWJhLENBQWQ7O0FBZUEsMkJBQU9WLE9BQVA7QUFDSCxpQiIsImZpbGUiOiJzZXJ2aWNlcy9zZXJ2aWNlLWN1c3RvbS1odHRwLmpzIiwic291cmNlUm9vdCI6Ii9zcmMifQ==
