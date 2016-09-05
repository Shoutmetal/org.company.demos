'use strict';

System.register(['aurelia-framework', 'aurelia-http-client', 'common/components/spinner', 'aurelia-authentication', 'services/service-interceptor'], function (_export, _context) {
    "use strict";

    var inject, HttpClient, Spinner, AuthService, ServiceInterceptor, _dec, _class, GenericService;

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
            _export('GenericService', GenericService = (_dec = inject(HttpClient, Spinner, AuthService), _dec(_class = function () {
                function GenericService(http, spinner, authService) {
                    var _this = this;

                    _classCallCheck(this, GenericService);

                    this.http = http;
                    this.spinner = spinner;
                    this.authService = authService;

                    this.http.configure(function (x) {
                        x.withBaseUrl(_this.authService.client.client.baseUrl + "/api/");
                        x.withHeader('Accept', 'application/json');
                        x.withHeader('Authorization', 'bearer ' + _this.authService.getAccessToken());
                        x.withInterceptor(new ServiceInterceptor());
                    });
                }

                GenericService.prototype.get = function get(url) {
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

                GenericService.prototype.post = function post(url, data) {
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

                return GenericService;
            }()) || _class));

            _export('GenericService', GenericService);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3NlcnZpY2UtZ2VuZXJpYy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBUSxrQixxQkFBQSxNOztBQUNBLHNCLHNCQUFBLFU7O0FBQ0EsbUIsNEJBQUEsTzs7QUFDQSx1QiwwQkFBQSxXOztBQUNBLDhCLCtCQUFBLGtCOzs7c0NBR0ssYyxXQURaLE9BQU8sVUFBUCxFQUFtQixPQUFuQixFQUE0QixXQUE1QixDO0FBR0csd0NBQVksSUFBWixFQUFrQixPQUFsQixFQUEyQixXQUEzQixFQUF1QztBQUFBOztBQUFBOztBQUNuQyx5QkFBSyxJQUFMLEdBQVksSUFBWjtBQUNBLHlCQUFLLE9BQUwsR0FBZSxPQUFmO0FBQ0EseUJBQUssV0FBTCxHQUFtQixXQUFuQjs7QUFFQSx5QkFBSyxJQUFMLENBQVUsU0FBVixDQUFvQixhQUFLO0FBQ3JCLDBCQUFFLFdBQUYsQ0FBZSxNQUFLLFdBQUwsQ0FBaUIsTUFBakIsQ0FBd0IsTUFBeEIsQ0FBK0IsT0FBL0IsR0FBeUMsT0FBeEQ7QUFDQSwwQkFBRSxVQUFGLENBQWEsUUFBYixFQUF1QixrQkFBdkI7QUFDQSwwQkFBRSxVQUFGLENBQWEsZUFBYixFQUE4QixZQUFZLE1BQUssV0FBTCxDQUFpQixjQUFqQixFQUExQztBQUNBLDBCQUFFLGVBQUYsQ0FBa0IsSUFBSSxrQkFBSixFQUFsQjtBQUNILHFCQUxEO0FBTUg7O3lDQUVELEcsZ0JBQUksRyxFQUFLO0FBQUE7O0FBQ0wseUJBQUssT0FBTCxDQUFhLEVBQWI7QUFDQSx3QkFBSSxPQUFPLEtBQUssSUFBaEI7QUFDQSx3QkFBSSxVQUFVLElBQUksT0FBSixDQUFZLFVBQUMsT0FBRCxFQUFVLE1BQVYsRUFBcUI7QUFDM0MsNkJBQUssYUFBTCxDQUFtQixHQUFuQixFQUNQLEtBRE8sR0FFUCxJQUZPLEdBR1AsSUFITyxDQUdGO0FBQUEsbUNBQVksUUFBUSxTQUFTLE9BQWpCLENBQVo7QUFBQSx5QkFIRSxFQUlQLElBSk8sQ0FJRCxZQUFLO0FBQUUsbUNBQUssT0FBTCxDQUFhLEdBQWI7QUFBb0IseUJBSjFCLEVBS00sZUFDRjtBQUNJLG1DQUFPLEdBQVA7QUFDQSxtQ0FBSyxPQUFMLENBQWEsR0FBYjtBQUVILHlCQVZMO0FBV0gscUJBWmEsQ0FBZDtBQWFBLDJCQUFPLE9BQVA7QUFDSCxpQjs7eUNBRUQsSSxpQkFBSyxHLEVBQUssSSxFQUFNO0FBQUE7O0FBQ1oseUJBQUssT0FBTCxDQUFhLEVBQWI7QUFDQSx3QkFBSSxPQUFPLEtBQUssSUFBaEI7QUFDQSx3QkFBSSxVQUFVLElBQUksT0FBSixDQUFZLFVBQUMsT0FBRCxFQUFVLE1BQVYsRUFBcUI7QUFDM0MsNkJBQUssYUFBTCxDQUFtQixHQUFuQixFQUNQLE1BRE8sR0FFUCxXQUZPLENBRUssSUFGTCxFQUdQLElBSE8sR0FJUCxJQUpPLENBSUY7QUFBQSxtQ0FBWSxRQUFRLFFBQVIsQ0FBWjtBQUFBLHlCQUpFLEVBS1AsSUFMTyxDQUtELFlBQUs7QUFBRSxtQ0FBSyxPQUFMLENBQWEsR0FBYjtBQUFvQix5QkFMMUIsRUFNTSxlQUNGO0FBQ0ksbUNBQU8sR0FBUDtBQUNBLG1DQUFLLE9BQUwsQ0FBYSxHQUFiO0FBRUgseUJBWEw7QUFZSCxxQkFiYSxDQUFkOztBQWVBLDJCQUFPLE9BQVA7QUFDSCxpQiIsImZpbGUiOiJzZXJ2aWNlcy9zZXJ2aWNlLWdlbmVyaWMuanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
