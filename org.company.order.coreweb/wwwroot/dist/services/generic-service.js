'use strict';

System.register(['aurelia-framework', 'aurelia-http-client', 'aurelia-configuration', 'services/spinner'], function (_export, _context) {
    "use strict";

    var inject, HttpClient, Configure, Spinner, _dec, _class, GenericService;

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
        }],
        execute: function () {
            _export('GenericService', GenericService = (_dec = inject(HttpClient, Configure, Spinner), _dec(_class = function () {
                function GenericService(http, config, spinner) {
                    var _this = this;

                    _classCallCheck(this, GenericService);

                    this.http = http;
                    this.config = config;
                    this.spinner = spinner;

                    this.http.configure(function (x) {
                        x.withBaseUrl(_this.config.get('baseUrl'));
                        x.withHeader('accept', 'application/json');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2dlbmVyaWMtc2VydmljZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBUSxrQixxQkFBQSxNOztBQUNBLHNCLHNCQUFBLFU7O0FBQ0EscUIseUJBQUEsUzs7QUFDQSxtQixvQkFBQSxPOzs7c0NBR0ssYyxXQURaLE9BQU8sVUFBUCxFQUFtQixTQUFuQixFQUE4QixPQUE5QixDO0FBR0csd0NBQVksSUFBWixFQUFrQixNQUFsQixFQUEwQixPQUExQixFQUFrQztBQUFBOztBQUFBOztBQUM5Qix5QkFBSyxJQUFMLEdBQVksSUFBWjtBQUNBLHlCQUFLLE1BQUwsR0FBYyxNQUFkO0FBQ0EseUJBQUssT0FBTCxHQUFlLE9BQWY7O0FBRUEseUJBQUssSUFBTCxDQUFVLFNBQVYsQ0FBb0IsYUFBSztBQUNyQiwwQkFBRSxXQUFGLENBQWMsTUFBSyxNQUFMLENBQVksR0FBWixDQUFnQixTQUFoQixDQUFkO0FBQ0EsMEJBQUUsVUFBRixDQUFhLFFBQWIsRUFBdUIsa0JBQXZCO0FBQ0gscUJBSEQ7QUFJSDs7eUNBRUQsRyxnQkFBSSxHLEVBQUs7QUFBQTs7QUFDTCx5QkFBSyxPQUFMLENBQWEsRUFBYjtBQUNBLHdCQUFJLE9BQU8sS0FBSyxJQUFoQjtBQUNBLHdCQUFJLFVBQVUsSUFBSSxPQUFKLENBQVksVUFBQyxPQUFELEVBQVUsTUFBVixFQUFxQjtBQUMzQyw2QkFBSyxhQUFMLENBQW1CLEdBQW5CLEVBQ1AsS0FETyxHQUVQLElBRk8sR0FHUCxJQUhPLENBR0Ysb0JBQ047QUFDSSxvQ0FBUSxTQUFTLE9BQWpCO0FBQ0EsbUNBQUssT0FBTCxDQUFhLEdBQWI7QUFDSCx5QkFQTyxFQVFNLGVBQ0Y7QUFDSSxtQ0FBTyxHQUFQO0FBQ0EsbUNBQUssT0FBTCxDQUFhLEdBQWI7QUFFSCx5QkFiTDtBQWNILHFCQWZhLENBQWQ7QUFnQkEsMkJBQU8sT0FBUDtBQUNILGlCOzt5Q0FFRCxJLGlCQUFLLEcsRUFBSyxJLEVBQU07QUFBQTs7QUFDWix5QkFBSyxPQUFMLENBQWEsRUFBYjtBQUNBLHdCQUFJLE9BQU8sS0FBSyxJQUFoQjtBQUNBLHdCQUFJLFVBQVUsSUFBSSxPQUFKLENBQVksVUFBQyxPQUFELEVBQVUsTUFBVixFQUFxQjtBQUMzQyw2QkFBSyxhQUFMLENBQW1CLEdBQW5CLEVBQ1AsTUFETyxHQUVQLFdBRk8sQ0FFSyxJQUZMLEVBR1AsSUFITyxHQUlQLElBSk8sQ0FJRixvQkFDTjtBQUNJLG9DQUFRLFNBQVMsU0FBakI7QUFDQSxtQ0FBSyxPQUFMLENBQWEsR0FBYjtBQUNILHlCQVJPLEVBU00sZUFDRjtBQUNJLG1DQUFPLEdBQVA7QUFDQSxtQ0FBSyxPQUFMLENBQWEsR0FBYjtBQUNILHlCQWJMO0FBY0gscUJBZmEsQ0FBZDs7QUFpQkEsMkJBQU8sT0FBUDtBQUNILGlCIiwiZmlsZSI6InNlcnZpY2VzL2dlbmVyaWMtc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
