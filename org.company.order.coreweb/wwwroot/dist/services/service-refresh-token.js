'use strict';

System.register(['aurelia-framework', 'aurelia-http-client', 'aurelia-authentication'], function (_export, _context) {
    "use strict";

    var inject, computedFrom, HttpClient, AuthService, _dec, _class, ServiceRefreshToken;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
            computedFrom = _aureliaFramework.computedFrom;
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
                    this._pause = false;

                    this.http.configure(function (x) {
                        x.withBaseUrl(_this.authService.client.client.baseUrl);
                        x.withHeader('Accept', 'application/json');
                        x.withHeader('Content-Type', 'application/x-www-form-urlencoded');
                    });
                }

                ServiceRefreshToken.prototype.pause = function pause() {
                    this._pause = true;
                };

                ServiceRefreshToken.prototype.continue = function _continue() {
                    this._pause = false;
                };

                ServiceRefreshToken.prototype.restart = function restart() {
                    this.expiresIn = this.restartTime;
                };

                ServiceRefreshToken.prototype.refresh = function refresh() {
                    var http = this.http;

                    var data = "grant_type=refresh_token&refresh_token=" + encodeURIComponent(this.authService.getRefreshToken());
                    var auth = this.authService;
                    var url = this.authService.client.client.baseUrl + "/connect/token";

                    var promise = new Promise(function (resolve, reject) {
                        http.createRequest(url).asPost().withContent(data).send().then(function (response) {
                            return auth.setResponseObject(response.content);
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
                    this.stop = config.stop || false;
                };

                ServiceRefreshToken.prototype.start = function start() {
                    if (!this.expiresIn) throw Error("No expiration time set on the configuration.");

                    var me = this;

                    var fn = function fn() {
                        if (!me._pause) {

                            me.expiresIn--;

                            if (!me.expiresIn) {
                                me.refresh();
                                clearInterval(inverval);
                                me.expiresIn = me.restartTime;
                                inverval = setInterval(fn, me.sandbox);
                            }
                        }
                    };

                    var inverval = setInterval(fn, this.sandbox);
                };

                return ServiceRefreshToken;
            }()) || _class));

            _export('ServiceRefreshToken', ServiceRefreshToken);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3NlcnZpY2UtcmVmcmVzaC10b2tlbi5qcyJdLCJuYW1lcyI6WyJpbmplY3QiLCJjb21wdXRlZEZyb20iLCJIdHRwQ2xpZW50IiwiQXV0aFNlcnZpY2UiLCJTZXJ2aWNlUmVmcmVzaFRva2VuIiwiaHR0cCIsImF1dGhTZXJ2aWNlIiwiZXhwaXJlc0luIiwicmVzdGFydFRpbWUiLCJzYW5kYm94Iiwic3RvcCIsIl9wYXVzZSIsImNvbmZpZ3VyZSIsIngiLCJ3aXRoQmFzZVVybCIsImNsaWVudCIsImJhc2VVcmwiLCJ3aXRoSGVhZGVyIiwicGF1c2UiLCJjb250aW51ZSIsInJlc3RhcnQiLCJyZWZyZXNoIiwiZGF0YSIsImVuY29kZVVSSUNvbXBvbmVudCIsImdldFJlZnJlc2hUb2tlbiIsImF1dGgiLCJ1cmwiLCJwcm9taXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJjcmVhdGVSZXF1ZXN0IiwiYXNQb3N0Iiwid2l0aENvbnRlbnQiLCJzZW5kIiwidGhlbiIsInNldFJlc3BvbnNlT2JqZWN0IiwicmVzcG9uc2UiLCJjb250ZW50IiwiZXJyIiwiY29uZmlnIiwic3RhcnQiLCJFcnJvciIsIm1lIiwiZm4iLCJjbGVhckludGVydmFsIiwiaW52ZXJ2YWwiLCJzZXRJbnRlcnZhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQVFBLGtCLHFCQUFBQSxNO0FBQVFDLHdCLHFCQUFBQSxZOztBQUNSQyxzQixzQkFBQUEsVTs7QUFDQUMsdUIsMEJBQUFBLFc7OzsyQ0FHS0MsbUIsV0FEWkosT0FBT0UsVUFBUCxFQUFtQkMsV0FBbkIsQztBQUdHLDZDQUFZRSxJQUFaLEVBQWtCQyxXQUFsQixFQUE4QjtBQUFBOztBQUFBOztBQUMxQix5QkFBS0QsSUFBTCxHQUFZQSxJQUFaO0FBQ0EseUJBQUtDLFdBQUwsR0FBbUJBLFdBQW5CO0FBQ0EseUJBQUtDLFNBQUwsR0FBaUIsQ0FBakI7QUFDQSx5QkFBS0MsV0FBTCxHQUFtQixDQUFu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
