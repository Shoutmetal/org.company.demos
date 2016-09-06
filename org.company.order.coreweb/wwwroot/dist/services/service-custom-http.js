'use strict';

System.register(['aurelia-framework', 'aurelia-http-client', 'common/components/spinner', 'aurelia-authentication', 'services/service-interceptor', 'services/service-refresh-token'], function (_export, _context) {
    "use strict";

    var inject, HttpClient, Spinner, AuthService, ServiceInterceptor, ServiceRefreshToken, _dec, _class, CustomHttp;

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
        }, function (_servicesServiceRefreshToken) {
            ServiceRefreshToken = _servicesServiceRefreshToken.ServiceRefreshToken;
        }],
        execute: function () {
            _export('CustomHttp', CustomHttp = (_dec = inject(HttpClient, Spinner, AuthService, ServiceRefreshToken), _dec(_class = function () {
                function CustomHttp(http, spinner, authService, serviceRefreshToken) {
                    var _this = this;

                    _classCallCheck(this, CustomHttp);

                    this.http = http;
                    this.spinner = spinner;
                    this.authService = authService;

                    this.http.configure(function (x) {
                        x.withBaseUrl(_this.authService.client.client.baseUrl + "/api/");
                        x.withHeader('Accept', 'application/json');
                        x.withHeader('Authorization', 'bearer ' + _this.authService.getAccessToken());
                        x.withInterceptor(new ServiceInterceptor(serviceRefreshToken));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3NlcnZpY2UtY3VzdG9tLWh0dHAuanMiXSwibmFtZXMiOlsiaW5qZWN0IiwiSHR0cENsaWVudCIsIlNwaW5uZXIiLCJBdXRoU2VydmljZSIsIlNlcnZpY2VJbnRlcmNlcHRvciIsIlNlcnZpY2VSZWZyZXNoVG9rZW4iLCJDdXN0b21IdHRwIiwiaHR0cCIsInNwaW5uZXIiLCJhdXRoU2VydmljZSIsInNlcnZpY2VSZWZyZXNoVG9rZW4iLCJjb25maWd1cmUiLCJ4Iiwid2l0aEJhc2VVcmwiLCJjbGllbnQiLCJiYXNlVXJsIiwid2l0aEhlYWRlciIsImdldEFjY2Vzc1Rva2VuIiwid2l0aEludGVyY2VwdG9yIiwiZ2V0IiwidXJsIiwib24iLCJwcm9taXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJjcmVhdGVSZXF1ZXN0IiwiYXNHZXQiLCJzZW5kIiwidGhlbiIsInJlc3BvbnNlIiwiY29udGVudCIsIm9mZiIsImVyciIsInBvc3QiLCJkYXRhIiwiYXNQb3N0Iiwid2l0aENvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFRQSxrQixxQkFBQUEsTTs7QUFDQUMsc0Isc0JBQUFBLFU7O0FBQ0FDLG1CLDRCQUFBQSxPOztBQUNBQyx1QiwwQkFBQUEsVzs7QUFDQUMsOEIsK0JBQUFBLGtCOztBQUNBQywrQixnQ0FBQUEsbUI7OztrQ0FHS0MsVSxXQURaTixPQUFPQyxVQUFQLEVBQW1CQyxPQUFuQixFQUE0QkMsV0FBNUIsRUFBeUNFLG1CQUF6QyxDO0FBR0csb0NBQVlFLElBQVosRUFBa0JDLE9BQWxCLEVBQTJCQyxXQUEzQixFQUF3Q0MsbUJBQXhDLEVBQTREO0FBQUE7O0FBQUE7O0FBQ3hELHlCQUFLSCxJQUFMLEdBQVlBLElBQVo7QUFDQSx5QkFBS0MsT0FBTCxHQUFlQSxPQUFmO0FBQ0EseUJBQUtDLFdBQUwsR0FBbUJBLFdBQW5COztBQUVBLHlCQUFLRixJQUFMLENBQVVJLFNBQVYsQ0FBb0IsYUFBSztBQUNyQkMsMEJBQUVDLFdBQUYsQ0FBZSxNQUFLSixXQUFMLENBQWlCSyxNQUFqQixDQUF3QkEsTUFBeEIsQ0FBK0JDLE9BQS9CLEdBQXlDLE9BQXhEO0FBQ0FILDBCQUFFSSxVQUFGLENBQWEsUUFBYixFQUF1QixrQkFBdkI7QUFDQUosMEJBQUVJLFVBQUYsQ0FBYSxlQUFiLEVBQThCLFlBQVksTUFBS1AsV0FBTCxDQUFpQlEsY0FBakIsRUFBMUM7QUFDQUwsMEJBQUVNLGVBQUYsQ0FBa0IsSUFBSWQsa0JBQUosQ0FBdUJNLG1CQUF2QixDQUFsQjtBQUNILHFCQUxEO0FBTUg7O3FDQUVEUyxHLGdCQUFJQyxHLEVBQUs7QUFBQTs7QUFDTCx5QkFBS1osT0FBTCxDQUFhYSxFQUFiO0FBQ0Esd0JBQUlkLE9BQU8sS0FBS0EsSUFBaEI7QUFDQSx3QkFBSWUsVUFBVSxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQzNDbEIsNkJBQUttQixhQUFMLENBQW1CTixHQUFuQixFQUNQTyxLQURPLEdBRVBDLElBRk8sR0FHUEMsSUFITyxDQUdGO0FBQUEsbUNBQVlMLFFBQVFNLFNBQVNDLE9BQWpCLENBQVo7QUFBQSx5QkFIRSxFQUlQRixJQUpPLENBSUQsWUFBSztBQUFFLG1DQUFLckIsT0FBTCxDQUFhd0IsR0FBYjtBQUFvQix5QkFKMUIsRUFLTSxlQUNGO0FBQ0lQLG1DQUFPUSxHQUFQO0FBQ0EsbUNBQUt6QixPQUFMLENBQWF3QixHQUFiO0FBRUgseUJBVkw7QUFXSCxxQkFaYSxDQUFkO0FBYUEsMkJBQU9WLE9BQVA7QUFDSCxpQjs7cUNBRURZLEksaUJBQUtkLEcsRUFBS2UsSSxFQUFNO0FBQUE7O0FBQ1oseUJBQUszQixPQUFMLENBQWFhLEVBQWI7QUFDQSx3QkFBSWQsT0FBTyxLQUFLQSxJQUFoQjtBQUNBLHdCQUFJZSxVQUFVLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDM0NsQiw2QkFBS21CLGFBQUwsQ0FBbUJOLEdBQW5CLEVBQ1BnQixNQURPLEdBRVBDLFdBRk8sQ0FFS0YsSUFGTCxFQUdQUCxJQUhPLEdBSVBDLElBSk8sQ0FJRjtBQUFBLG1DQUFZTCxRQUFRTSxRQUFSLENBQVo7QUFBQSx5QkFKRSxFQUtQRCxJQUxPLENBS0QsWUFBSztBQUFFLG1DQUFLckIsT0FBTCxDQUFhd0IsR0FBYjtBQUFvQix5QkFMMUIsRUFNTSxlQUNGO0FBQ0lQLG1DQUFPUSxHQUFQO0FBQ0EsbUNBQUt6QixPQUFMLENBQWF3QixHQUFiO0FBRUgseUJBWEw7QUFZSCxxQkFiYSxDQUFkOztBQWVBLDJCQUFPVixPQUFQO0FBQ0gsaUIiLCJmaWxlIjoic2VydmljZXMvc2VydmljZS1jdXN0b20taHR0cC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
