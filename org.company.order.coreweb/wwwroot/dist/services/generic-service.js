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

                    console.log(this.authService.getAccessToken());

                    this.http.configure(function (x) {
                        x.withBaseUrl(_this.config.get('baseUrl'));
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
                            console.log(response);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2dlbmVyaWMtc2VydmljZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBUSxrQixxQkFBQSxNOztBQUNBLHNCLHNCQUFBLFU7O0FBQ0EscUIseUJBQUEsUzs7QUFDQSxtQixvQkFBQSxPOztBQUNBLHVCLDBCQUFBLFc7OztzQ0FHSyxjLFdBRFosT0FBTyxVQUFQLEVBQW1CLFNBQW5CLEVBQThCLE9BQTlCLEVBQXVDLFdBQXZDLEM7QUFHRyx3Q0FBWSxJQUFaLEVBQWtCLE1BQWxCLEVBQTBCLE9BQTFCLEVBQW1DLFdBQW5DLEVBQStDO0FBQUE7O0FBQUE7O0FBQzNDLHlCQUFLLElBQUwsR0FBWSxJQUFaO0FBQ0EseUJBQUssTUFBTCxHQUFjLE1BQWQ7QUFDQSx5QkFBSyxPQUFMLEdBQWUsT0FBZjtBQUNBLHlCQUFLLFdBQUwsR0FBbUIsV0FBbkI7O0FBRUEsNEJBQVEsR0FBUixDQUFZLEtBQUssV0FBTCxDQUFpQixjQUFqQixFQUFaOztBQUVBLHlCQUFLLElBQUwsQ0FBVSxTQUFWLENBQW9CLGFBQUs7QUFDckIsMEJBQUUsV0FBRixDQUFjLE1BQUssTUFBTCxDQUFZLEdBQVosQ0FBZ0IsU0FBaEIsQ0FBZDtBQUNBLDBCQUFFLFVBQUYsQ0FBYSxRQUFiLEVBQXVCLGtCQUF2QjtBQUNBLDBCQUFFLFVBQUYsQ0FBYSxlQUFiLEVBQThCLFlBQVksTUFBSyxXQUFMLENBQWlCLGNBQWpCLEVBQTFDO0FBRUgscUJBTEQ7QUFNSDs7eUNBRUQsRyxnQkFBSSxHLEVBQUs7QUFBQTs7QUFDTCx5QkFBSyxPQUFMLENBQWEsRUFBYjtBQUNBLHdCQUFJLE9BQU8sS0FBSyxJQUFoQjtBQUNBLHdCQUFJLFVBQVUsSUFBSSxPQUFKLENBQVksVUFBQyxPQUFELEVBQVUsTUFBVixFQUFxQjtBQUMzQyw2QkFBSyxhQUFMLENBQW1CLEdBQW5CLEVBQ1AsS0FETyxHQUVQLElBRk8sR0FHUCxJQUhPLENBR0Ysb0JBQ047QUFDWSxvQ0FBUSxHQUFSLENBQVksUUFBWjtBQUNSLG9DQUFRLFNBQVMsT0FBakI7QUFDQSxtQ0FBSyxPQUFMLENBQWEsR0FBYjtBQUNILHlCQVJPLEVBU00sZUFDRjtBQUNJLG1DQUFPLEdBQVA7QUFDQSxtQ0FBSyxPQUFMLENBQWEsR0FBYjtBQUVILHlCQWRMO0FBZUgscUJBaEJhLENBQWQ7QUFpQkEsMkJBQU8sT0FBUDtBQUNILGlCOzt5Q0FFRCxJLGlCQUFLLEcsRUFBSyxJLEVBQU07QUFBQTs7QUFDWix5QkFBSyxPQUFMLENBQWEsRUFBYjtBQUNBLHdCQUFJLE9BQU8sS0FBSyxJQUFoQjtBQUNBLHdCQUFJLFVBQVUsSUFBSSxPQUFKLENBQVksVUFBQyxPQUFELEVBQVUsTUFBVixFQUFxQjtBQUMzQyw2QkFBSyxhQUFMLENBQW1CLEdBQW5CLEVBQ1AsTUFETyxHQUVQLFdBRk8sQ0FFSyxJQUZMLEVBR1AsSUFITyxHQUlQLElBSk8sQ0FJRixvQkFDTjtBQUNJLG9DQUFRLFNBQVMsU0FBakI7QUFDQSxtQ0FBSyxPQUFMLENBQWEsR0FBYjtBQUNILHlCQVJPLEVBU00sZUFDRjtBQUNJLG1DQUFPLEdBQVA7QUFDQSxtQ0FBSyxPQUFMLENBQWEsR0FBYjtBQUNILHlCQWJMO0FBY0gscUJBZmEsQ0FBZDs7QUFpQkEsMkJBQU8sT0FBUDtBQUNILGlCIiwiZmlsZSI6InNlcnZpY2VzL2dlbmVyaWMtc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
