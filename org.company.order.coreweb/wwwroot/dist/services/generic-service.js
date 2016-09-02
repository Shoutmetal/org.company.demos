'use strict';

System.register(['aurelia-framework', 'aurelia-http-client', 'aurelia-configuration', 'services/spinner', 'aurelia-authentication'], function (_export, _context) {
    "use strict";

    var inject, HttpClient, Configure, Spinner, AuthService, _dec, _class, GenericService;

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
        }, function (_aureliaConfiguration) {
            Configure = _aureliaConfiguration.Configure;
        }, function (_servicesSpinner) {
            Spinner = _servicesSpinner.Spinner;
        }, function (_aureliaAuthentication) {
            AuthService = _aureliaAuthentication.AuthService;
        }],
        execute: function () {
            _export('GenericService', GenericService = (_dec = inject(HttpClient, Configure, Spinner, AuthService), _dec(_class = function () {
                function GenericService(http, config, spinner, authService) {
                    var _this = this;

                    _classCallCheck(this, GenericService);

                    this.http = http;
                    this.config = config;
                    this.spinner = spinner;
                    this.authService = authService;
                    this.isDevEnvironment = window.location.hostname == "localhost";

                    this.http.configure(function (x) {
                        x.withBaseUrl(_this.isDevEnvironment ? _this.config.get('baseUrl') : _this.config.get('productionBaseUrl'));
                        x.withHeader('Accept', 'application/json');
                        x.withHeader('Authorization', 'bearer ' + _this.authService.getAccessToken());
                    });
                }

                GenericService.prototype.get = function get(url) {
                    var _this2 = this;

                    this.spinner.on();
                    var http = this.http;
                    var promise = new Promise(function (resolve, reject) {
                        http.createRequest(url).asGet().send().then(function (response) {
                            resolve(response.content);
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
                            resolve(response.isSuccess);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2dlbmVyaWMtc2VydmljZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBUSxrQixxQkFBQSxNOztBQUNBLHNCLHNCQUFBLFU7O0FBQ0EscUIseUJBQUEsUzs7QUFDQSxtQixvQkFBQSxPOztBQUNBLHVCLDBCQUFBLFc7OztzQ0FHSyxjLFdBRFosT0FBTyxVQUFQLEVBQW1CLFNBQW5CLEVBQThCLE9BQTlCLEVBQXVDLFdBQXZDLEM7QUFHRyx3Q0FBWSxJQUFaLEVBQWtCLE1BQWxCLEVBQTBCLE9BQTFCLEVBQW1DLFdBQW5DLEVBQStDO0FBQUE7O0FBQUE7O0FBQzNDLHlCQUFLLElBQUwsR0FBWSxJQUFaO0FBQ0EseUJBQUssTUFBTCxHQUFjLE1BQWQ7QUFDQSx5QkFBSyxPQUFMLEdBQWUsT0FBZjtBQUNBLHlCQUFLLFdBQUwsR0FBbUIsV0FBbkI7QUFDQSx5QkFBSyxnQkFBTCxHQUF3QixPQUFPLFFBQVAsQ0FBZ0IsUUFBaEIsSUFBNEIsV0FBcEQ7O0FBRUEseUJBQUssSUFBTCxDQUFVLFNBQVYsQ0FBb0IsYUFBSztBQUNyQiwwQkFBRSxXQUFGLENBQWUsTUFBSyxnQkFBTCxHQUF3QixNQUFLLE1BQUwsQ0FBWSxHQUFaLENBQWdCLFNBQWhCLENBQXhCLEdBQXNELE1BQUssTUFBTCxDQUFZLEdBQVosQ0FBZ0IsbUJBQWhCLENBQXJFO0FBQ0EsMEJBQUUsVUFBRixDQUFhLFFBQWIsRUFBdUIsa0JBQXZCO0FBQ0EsMEJBQUUsVUFBRixDQUFhLGVBQWIsRUFBOEIsWUFBWSxNQUFLLFdBQUwsQ0FBaUIsY0FBakIsRUFBMUM7QUFFSCxxQkFMRDtBQU1IOzt5Q0FFRCxHLGdCQUFJLEcsRUFBSztBQUFBOztBQUNMLHlCQUFLLE9BQUwsQ0FBYSxFQUFiO0FBQ0Esd0JBQUksT0FBTyxLQUFLLElBQWhCO0FBQ0Esd0JBQUksVUFBVSxJQUFJLE9BQUosQ0FBWSxVQUFDLE9BQUQsRUFBVSxNQUFWLEVBQXFCO0FBQzNDLDZCQUFLLGFBQUwsQ0FBbUIsR0FBbkIsRUFDUCxLQURPLEdBRVAsSUFGTyxHQUdQLElBSE8sQ0FHRixvQkFDTjtBQUNJLG9DQUFRLFNBQVMsT0FBakI7QUFDQSxtQ0FBSyxPQUFMLENBQWEsR0FBYjtBQUNILHlCQVBPLEVBUU0sZUFDRjtBQUNJLG1DQUFPLEdBQVA7QUFDQSxtQ0FBSyxPQUFMLENBQWEsR0FBYjtBQUVILHlCQWJMO0FBY0gscUJBZmEsQ0FBZDtBQWdCQSwyQkFBTyxPQUFQO0FBQ0gsaUI7O3lDQUVELEksaUJBQUssRyxFQUFLLEksRUFBTTtBQUFBOztBQUNaLHlCQUFLLE9BQUwsQ0FBYSxFQUFiO0FBQ0Esd0JBQUksT0FBTyxLQUFLLElBQWhCO0FBQ0Esd0JBQUksVUFBVSxJQUFJLE9BQUosQ0FBWSxVQUFDLE9BQUQsRUFBVSxNQUFWLEVBQXFCO0FBQzNDLDZCQUFLLGFBQUwsQ0FBbUIsR0FBbkIsRUFDUCxNQURPLEdBRVAsV0FGTyxDQUVLLElBRkwsRUFHUCxJQUhPLEdBSVAsSUFKTyxDQUlGLG9CQUNOO0FBQ0ksb0NBQVEsU0FBUyxTQUFqQjtBQUNBLG1DQUFLLE9BQUwsQ0FBYSxHQUFiO0FBQ0gseUJBUk8sRUFTTSxlQUNGO0FBQ0ksbUNBQU8sR0FBUDtBQUNBLG1DQUFLLE9BQUwsQ0FBYSxHQUFiO0FBQ0gseUJBYkw7QUFjSCxxQkFmYSxDQUFkOztBQWlCQSwyQkFBTyxPQUFQO0FBQ0gsaUIiLCJmaWxlIjoic2VydmljZXMvZ2VuZXJpYy1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii9zcmMifQ==
