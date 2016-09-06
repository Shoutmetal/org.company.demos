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
                            console.log("auth refresh token response -> ", response);

                            auth.setResponseObject(response.content);

                            console.log("refresh -> ", auth.getRefreshToken());
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
                    if (!this.expiresIn) throw Error("No time set on the configuration.");

                    var me = this;
                    this.restartTime = me.expiresIn;

                    var fn = function fn() {
                        me.expiresIn--;
                        console.log(me.expiresIn);
                        if (!me.expiresIn && !me.stop) {
                            console.log("refresh!");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3NlcnZpY2UtcmVmcmVzaC10b2tlbi5qcyJdLCJuYW1lcyI6WyJpbmplY3QiLCJIdHRwQ2xpZW50IiwiQXV0aFNlcnZpY2UiLCJTZXJ2aWNlUmVmcmVzaFRva2VuIiwiaHR0cCIsImF1dGhTZXJ2aWNlIiwiZXhwaXJlc0luIiwicmVzdGFydFRpbWUiLCJzYW5kYm94Iiwic3RvcCIsImNvbmZpZ3VyZSIsIngiLCJ3aXRoQmFzZVVybCIsImNsaWVudCIsImJhc2VVcmwiLCJ3aXRoSGVhZGVyIiwicmVmcmVzaCIsImRhdGEiLCJlbmNvZGVVUklDb21wb25lbnQiLCJnZXRSZWZyZXNoVG9rZW4iLCJhdXRoIiwidXJsIiwicHJvbWlzZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiY3JlYXRlUmVxdWVzdCIsImFzUG9zdCIsIndpdGhDb250ZW50Iiwic2VuZCIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJzZXRSZXNwb25zZU9iamVjdCIsImNvbnRlbnQiLCJlcnIiLCJjb25maWciLCJzdGFydCIsIkVycm9yIiwibWUiLCJmbiIsImNsZWFySW50ZXJ2YWwiLCJpbnZlcnZhbCIsInNldEludGVydmFsIiwicmVzdGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQVFBLGtCLHFCQUFBQSxNOztBQUNBQyxzQixzQkFBQUEsVTs7QUFDQUMsdUIsMEJBQUFBLFc7OzsyQ0FHS0MsbUIsV0FEWkgsT0FBT0MsVUFBUCxFQUFtQkMsV0FBbkIsQztBQUdHLDZDQUFZRSxJQUFaLEVBQWtCQyxXQUFsQixFQUE4QjtBQUFBOztBQUFBOztBQUMxQix5QkFBS0QsSUFBTCxHQUFZQSxJQUFaO0FBQ0EseUJBQUtDLFdBQUwsR0FBbUJBLFdBQW5CO0FBQ0EseUJBQUtDLFNBQUwsR0FBaUIsQ0FBakI7QUFDQSx5QkFBS0MsV0FBTCxHQUFtQixDQUFuQjtBQUNBLHlCQUFLQyxPQUFMLEdBQWUsSUFBZjtBQUNBLHlCQUFLQyxJQUFM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
