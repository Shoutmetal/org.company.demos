'use strict';

System.register(['aurelia-framework', 'aurelia-http-client', 'aurelia-authentication'], function (_export, _context) {
    "use strict";

    var inject, HttpClient, AuthService, _dec, _class, ServiceRefreshToken;

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
        }, function (_aureliaAuthentication) {
            AuthService = _aureliaAuthentication.AuthService;
        }],
        execute: function () {
            _export('ServiceRefreshToken', ServiceRefreshToken = (_dec = inject(HttpClient, AuthService), _dec(_class = function () {
                function ServiceRefreshToken(http, authService) {
                    var _this = this;

                    _classCallCheck(this, ServiceRefreshToken);

                    this.http = http;
                    this.authService = authService;
                    this.expiresIn = 0;
                    this.restartTime = 0;
                    this.sandbox = 1000;
                    this.stop = false;

                    this.http.configure(function (x) {
                        x.withBaseUrl(_this.authService.client.client.baseUrl);
                        x.withHeader('Accept', 'application/json');
                        x.withHeader('Content-Type', 'application/x-www-form-urlencoded');
                    });
                }

                ServiceRefreshToken.prototype.refresh = function refresh() {
                    var http = this.http;

                    var data = "grant_type=refresh_token&refresh_token=" + encodeURIComponent(this.authService.getRefreshToken());
                    var auth = this.authService;
                    var url = this.authService.client.client.baseUrl + "/connect/token";

                    var promise = new Promise(function (resolve, reject) {
                        http.createRequest(url).asPost().withContent(data).send().then(function (response) {
                            auth.setResponseObject(response.content);
                        }), function (err) {
                            return reject(err);
                        };
                    });

                    return promise;
                };

                ServiceRefreshToken.prototype.configure = function configure(config) {
                    this.sandbox = config.sandbox || this.sandbox;
                    this.expiresIn = config.expiresIn;
                    this.restartTime = this.expiresIn;
                    this.stop = config.stop;
                };

                ServiceRefreshToken.prototype.start = function start() {
                    if (!this.expiresIn) throw Error("No expiration time set on the configuration.");

                    var me = this;
                    this.restartTime = me.expiresIn;

                    var fn = function fn() {
                        me.expiresIn--;

                        if (!me.expiresIn && !me.stop) {
                            me.refresh();
                            clearInterval(inverval);
                            me.expiresIn = me.restartTime;
                            inverval = setInterval(fn, me.sandbox);
                        }
                    };

                    var inverval = setInterval(fn, this.sandbox);
                };

                ServiceRefreshToken.prototype.restart = function restart() {
                    this.expiresIn = this.restartTime;
                };

                return ServiceRefreshToken;
            }()) || _class));

            _export('ServiceRefreshToken', ServiceRefreshToken);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3NlcnZpY2UtcmVmcmVzaC10b2tlbi5qcyJdLCJuYW1lcyI6WyJpbmplY3QiLCJIdHRwQ2xpZW50IiwiQXV0aFNlcnZpY2UiLCJTZXJ2aWNlUmVmcmVzaFRva2VuIiwiaHR0cCIsImF1dGhTZXJ2aWNlIiwiZXhwaXJlc0luIiwicmVzdGFydFRpbWUiLCJzYW5kYm94Iiwic3RvcCIsImNvbmZpZ3VyZSIsIngiLCJ3aXRoQmFzZVVybCIsImNsaWVudCIsImJhc2VVcmwiLCJ3aXRoSGVhZGVyIiwicmVmcmVzaCIsImRhdGEiLCJlbmNvZGVVUklDb21wb25lbnQiLCJnZXRSZWZyZXNoVG9rZW4iLCJhdXRoIiwidXJsIiwicHJvbWlzZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiY3JlYXRlUmVxdWVzdCIsImFzUG9zdCIsIndpdGhDb250ZW50Iiwic2VuZCIsInRoZW4iLCJzZXRSZXNwb25zZU9iamVjdCIsInJlc3BvbnNlIiwiY29udGVudCIsImVyciIsImNvbmZpZyIsInN0YXJ0IiwiRXJyb3IiLCJtZSIsImZuIiwiY2xlYXJJbnRlcnZhbCIsImludmVydmFsIiwic2V0SW50ZXJ2YWwiLCJyZXN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBUUEsa0IscUJBQUFBLE07O0FBQ0FDLHNCLHNCQUFBQSxVOztBQUNBQyx1QiwwQkFBQUEsVzs7OzJDQUdLQyxtQixXQURaSCxPQUFPQyxVQUFQLEVBQW1CQyxXQUFuQixDO0FBR0csNkNBQVlFLElBQVosRUFBa0JDLFdBQWxCLEVBQThCO0FBQUE7O0FBQUE7O0FBQzFCLHlCQUFLRCxJQUFMLEdBQVlBLElBQVo7QUFDQSx5QkFBS0MsV0FBTCxHQUFtQkEsV0FBbkI7QUFDQSx5QkFBS0MsU0FBTCxHQUFpQixDQUFqQjtBQUNBLHlCQUFLQyxXQUFMLEdBQW1CLENBQW5CO0FBQ0EseUJBQUtDLE9BQUwsR0FBZSxJQUFmO0FBQ0EseUJBQUtDLElBQUwsR0FBWSxLQUFaOztBQUVBLHlCQUFLTCxJQUFMLENBQVVNLFNBQVYsQ0FBb0IsYUFBSztBQUNyQkMsMEJBQUVDLFdBQUYsQ0FBYyxNQUFLUCxXQUFMLENBQWlCUSxNQUFqQixDQUF3QkEsTUFBeEIsQ0FBK0JDLE9BQTdDO0FBQ0FILDBCQUFFSSxVQUFGLENBQWEsUUFBYixFQUF1QixrQkFBdkI7QUFDQUosMEJBQUVJLFVBQUYsQ0FBYSxjQUFiLEVBQTZCLG1DQUE3QjtBQUNILHFCQUpEO0FBS0g7OzhDQUVEQyxPLHNCQUFTO0FBQ0wsd0JBQUlaLE9BQU8sS0FBS0EsSUFBaEI7O0FBRUEsd0JBQUlhLE9BQU8sNENBQTRDQyxtQkFBbUIsS0FBS2IsV0FBTCxDQUFpQmMsZUFBakIsRUFBbkIsQ0FBdkQ7QUFDQSx3QkFBSUMsT0FBTyxLQUFLZixXQUFoQjtBQUNBLHdCQUFJZ0IsTUFBTSxLQUFLaEIsV0FBTCxDQUFpQlEsTUFBakIsQ0FBd0JBLE1BQXhCLENBQStCQyxPQUEvQixHQUF5QyxnQkFBbkQ7O0FBRUEsd0JBQUlRLFVBQVUsSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUMzQ3JCLDZCQUFLc0IsYUFBTCxDQUFtQkwsR0FBbkIsRUFDUE0sTUFETyxHQUVQQyxXQUZPLENBRUtYLElBRkwsRUFHUFksSUFITyxHQUlQQyxJQUpPLENBSUQsb0JBQVc7QUFDZFYsaUNBQUtXLGlCQUFMLENBQXVCQyxTQUFTQyxPQUFoQztBQUNILHlCQU5PLEdBT007QUFBQSxtQ0FBT1IsT0FBT1MsR0FBUCxDQUFQO0FBQUEseUJBUE47QUFRSCxxQkFUYSxDQUFkOztBQVdBLDJCQUFPWixPQUFQO0FBQ0gsaUI7OzhDQUVEWixTLHNCQUFVeUIsTSxFQUFPO0FBQ2IseUJBQUszQixPQUFMLEdBQWUyQixPQUFPM0IsT0FBUCxJQUFrQixLQUFLQSxPQUF0QztBQUNBLHlCQUFLRixTQUFMLEdBQWlCNkIsT0FBTzdCLFNBQXhCO0FBQ0EseUJBQUtDLFdBQUwsR0FBbUIsS0FBS0QsU0FBeEI7QUFDQSx5QkFBS0csSUFBTCxHQUFZMEIsT0FBTzFCLElBQW5CO0FBQ0gsaUI7OzhDQUVEMkIsSyxvQkFBTztBQUNILHdCQUFHLENBQUMsS0FBSzlCLFNBQVQsRUFBb0IsTUFBTStCLE1BQU0sOENBQU4sQ0FBTjs7QUFFcEIsd0JBQUlDLEtBQUssSUFBVDtBQUNBLHlCQUFLL0IsV0FBTCxHQUFtQitCLEdBQUdoQyxTQUF0Qjs7QUFFQSx3QkFBSWlDLEtBQUssU0FBTEEsRUFBSyxHQUFNO0FBQ1hELDJCQUFHaEMsU0FBSDs7QUFFQSw0QkFBRyxDQUFDZ0MsR0FBR2hDLFNBQUosSUFBaUIsQ0FBQ2dDLEdBQUc3QixJQUF4QixFQUNBO0FBQ0k2QiwrQkFBR3RCLE9BQUg7QUFDQXdCLDBDQUFjQyxRQUFkO0FBQ0FILCtCQUFHaEMsU0FBSCxHQUFlZ0MsR0FBRy9CLFdBQWxCO0FBQ0FrQyx1Q0FBV0MsWUFBWUgsRUFBWixFQUFnQkQsR0FBRzlCLE9BQW5CLENBQVg7QUFDSDtBQUNKLHFCQVZEOztBQVlBLHdCQUFJaUMsV0FBV0MsWUFBWUgsRUFBWixFQUFpQixLQUFLL0IsT0FBdEIsQ0FBZjtBQUNILGlCOzs4Q0FFRG1DLE8sc0JBQVM7QUFDTCx5QkFBS3JDLFNBQUwsR0FBaUIsS0FBS0MsV0FBdEI7QUFDSCxpQiIsImZpbGUiOiJzZXJ2aWNlcy9zZXJ2aWNlLXJlZnJlc2gtdG9rZW4uanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
