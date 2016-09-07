'use strict';

System.register(['aurelia-framework', 'aurelia-http-client', 'aurelia-authentication', 'aurelia-event-aggregator'], function (_export, _context) {
    "use strict";

    var inject, HttpClient, AuthService, EventAggregator, _dec, _class, ServiceRefreshToken;

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
        }, function (_aureliaEventAggregator) {
            EventAggregator = _aureliaEventAggregator.EventAggregator;
        }],
        execute: function () {
            _export('ServiceRefreshToken', ServiceRefreshToken = (_dec = inject(HttpClient, AuthService, EventAggregator), _dec(_class = function () {
                function ServiceRefreshToken(http, authService, event) {
                    var _this = this;

                    _classCallCheck(this, ServiceRefreshToken);

                    this.http = http;
                    this.authService = authService;
                    this.event = event;
                    this.expiresIn = 0;
                    this.restartTime = 0;
                    this.sandbox = 1000;
                    this.stop = false;
                    this.pause = false;

                    this.http.configure(function (x) {
                        x.withBaseUrl(_this.authService.client.client.baseUrl);
                        x.withHeader('Accept', 'application/json');
                        x.withHeader('Content-Type', 'application/x-www-form-urlencoded');
                    });

                    this.event.subscribe("event::inactivity", function () {

                        $('body').append('<div class="modal fade" id="idle-timeout-dialog" data-backdrop="static"><div class="modal-dialog modal-small"><div class="modal-content"><div class="modal-header"><h4 class="modal-title">Your session is about to expire.</h4></div><div class="modal-body"><p><i class="fa fa-warning"></i> You session will be locked in <span id="idle-timeout-counter"></span> seconds.</p><p>Do you want to continue your session?</p></div><div class="modal-footer"><button id="idle-timeout-dialog-logout" type="button" class="btn btn-default">No, Logout</button><button id="idle-timeout-dialog-keepalive" type="button" class="btn btn-primary" data-dismiss="modal">Yes, Keep Working</button></div></div></div></div>');

                        $('#idle-timeout-dialog').modal('show');
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
                    this.stop = config.stop || false;
                };

                ServiceRefreshToken.prototype.start = function start() {
                    if (!this.expiresIn) throw Error("No expiration time set on the configuration.");

                    var me = this;

                    var fn = function fn() {
                        if (!me.pause) {

                            me.expiresIn--;

                            console.log("refresh token : ", me.expiresIn);

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

                ServiceRefreshToken.prototype.restart = function restart() {
                    this.expiresIn = this.restartTime;
                };

                return ServiceRefreshToken;
            }()) || _class));

            _export('ServiceRefreshToken', ServiceRefreshToken);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3NlcnZpY2UtcmVmcmVzaC10b2tlbi5qcyJdLCJuYW1lcyI6WyJpbmplY3QiLCJIdHRwQ2xpZW50IiwiQXV0aFNlcnZpY2UiLCJFdmVudEFnZ3JlZ2F0b3IiLCJTZXJ2aWNlUmVmcmVzaFRva2VuIiwiaHR0cCIsImF1dGhTZXJ2aWNlIiwiZXZlbnQiLCJleHBpcmVzSW4iLCJyZXN0YXJ0VGltZSIsInNhbmRib3giLCJzdG9wIiwicGF1c2UiLCJjb25maWd1cmUiLCJ4Iiwid2l0aEJhc2VVcmwiLCJjbGllbnQiLCJiYXNlVXJsIiwid2l0aEhlYWRlciIsInN1YnNjcmliZSIsIiQiLCJhcHBlbmQiLCJtb2RhbCIsInJlZnJlc2giLCJkYXRhIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiZ2V0UmVmcmVzaFRva2VuIiwiYXV0aCIsInVybCIsInByb21pc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImNyZWF0ZVJlcXVlc3QiLCJhc1Bvc3QiLCJ3aXRoQ29udGVudCIsInNlbmQiLCJ0aGVuIiwic2V0UmVzcG9uc2VPYmplY3QiLCJyZXNwb25zZSIsImNvbnRlbnQiLCJlcnIiLCJjb25maWciLCJzdGFydCIsIkVycm9yIiwibWUiLCJmbiIsImNvbnNvbGUiLCJsb2ciLCJjbGVhckludGVydmFsIiwiaW52ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInJlc3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFRQSxrQixxQkFBQUEsTTs7QUFDQUMsc0Isc0JBQUFBLFU7O0FBQ0FDLHVCLDBCQUFBQSxXOztBQUNBQywyQiwyQkFBQUEsZTs7OzJDQUdLQyxtQixXQURaSixPQUFPQyxVQUFQLEVBQW1CQyxXQUFuQixFQUFnQ0MsZUFBaEMsQztBQUdHLDZDQUFZRSxJQUFaLEVBQWtCQyxXQUFsQixFQUErQkMsS0FBL0IsRUFBcUM7QUFBQTs7QUFBQTs7QUFDakMseUJBQUtGLElBQUwsR0FBWUEsSUFBWjtBQUNBLHlCQUFLQyxXQUFMLEdB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
