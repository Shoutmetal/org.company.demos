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

                    var $countdown = void 0;

                    this.event.subscribe("event::inactivity", function () {
                        _this.pause = true;
                        $('body').append('<div class="modal fade" id="idle-timeout-dialog" data-backdrop="static"><div class="modal-dialog modal-small"><div class="modal-content"><div class="modal-header"><h4 class="modal-title">Your session is about to expire.</h4></div><div class="modal-body"><p><i class="fa fa-warning"></i> You session will be locked in <span id="idle-timeout-counter"></span> seconds.</p><p>Do you want to continue your session?</p></div><div class="modal-footer"><button id="idle-timeout-dialog-logout" type="button" class="btn btn-default">No, Logout</button><button id="idle-timeout-dialog-keepalive" type="button" class="btn btn-primary" data-dismiss="modal">Yes, Keep Working</button></div></div></div></div>');

                        $('#idle-timeout-dialog').modal('show');

                        $countdown = $('#idle-timeout-counter');

                        $('#idle-timeout-dialog-keepalive').on('click', function () {
                            $('#idle-timeout-dialog').modal('hide');
                        });

                        $('#idle-timeout-dialog-logout').on('click', function () {
                            $('#idle-timeout-dialog').modal('hide');
                            $.idleTimeout.options.onTimeout.call(this);
                        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3NlcnZpY2UtcmVmcmVzaC10b2tlbi5qcyJdLCJuYW1lcyI6WyJpbmplY3QiLCJIdHRwQ2xpZW50IiwiQXV0aFNlcnZpY2UiLCJFdmVudEFnZ3JlZ2F0b3IiLCJTZXJ2aWNlUmVmcmVzaFRva2VuIiwiaHR0cCIsImF1dGhTZXJ2aWNlIiwiZXZlbnQiLCJleHBpcmVzSW4iLCJyZXN0YXJ0VGltZSIsInNhbmRib3giLCJzdG9wIiwicGF1c2UiLCJjb25maWd1cmUiLCJ4Iiwid2l0aEJhc2VVcmwiLCJjbGllbnQiLCJiYXNlVXJsIiwid2l0aEhlYWRlciIsIiRjb3VudGRvd24iLCJzdWJzY3JpYmUiLCIkIiwiYXBwZW5kIiwibW9kYWwiLCJvbiIsImlkbGVUaW1lb3V0Iiwib3B0aW9ucyIsIm9uVGltZW91dCIsImNhbGwiLCJyZWZyZXNoIiwiZGF0YSIsImVuY29kZVVSSUNvbXBvbmVudCIsImdldFJlZnJlc2hUb2tlbiIsImF1dGgiLCJ1cmwiLCJwcm9taXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJjcmVhdGVSZXF1ZXN0IiwiYXNQb3N0Iiwid2l0aENvbnRlbnQiLCJzZW5kIiwidGhlbiIsInNldFJlc3BvbnNlT2JqZWN0IiwicmVzcG9uc2UiLCJjb250ZW50IiwiZXJyIiwiY29uZmlnIiwic3RhcnQiLCJFcnJvciIsIm1lIiwiZm4iLCJjb25zb2xlIiwibG9nIiwiY2xlYXJJbnRlcnZhbCIsImludmVydmFsIiwic2V0SW50ZXJ2YWwiLCJyZXN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBUUEsa0IscUJBQUFBLE07O0FBQ0FDLHNCLHNCQUFBQSxVOztBQUNBQyx1QiwwQkFBQUEsVzs7QUFDQUMsMkIsMkJBQUFBLGU7OzsyQ0FHS0MsbUIsV0FEWkosT0FBT0MsVUFBUCxFQUFtQkMsV0FBbkIsRUFBZ0NDLGVBQWhDLEM7QUFHRyw2Q0FBWUUsSUFBWixFQUFrQkMsV0FBbEIsRUFBK0JDLEtBQS9CLEVBQXFD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VDs7QUFFQSx3QkFBSUMsS0FBSyxTQUFMQSxFQUFLLEdBQU07QUFDWCw0QkFBRyxDQUFDRCxHQUFHdkMsS0FBUCxFQUFhOztBQUVUdUMsK0JBQUczQyxTQUFIOztBQUVBNkMsb0NBQVFDLEdBQVIsQ0FBWSxrQkFBWixFQUFnQ0gsR0FBRzNDLFNBQW5DOztBQUVBLGdDQUFHLENBQUMyQyxHQUFHM0MsU0FBUCxFQUNBO0FBQ0kyQyxtQ0FBR3RCLE9BQUg7QUFDQTBCLDhDQUFjQyxRQUFkO0FBQ0FMLG1DQUFHM0MsU0FBSCxHQUFlMkMsR0FBRzFDLFdBQWxCO0FBQ0ErQywyQ0FBV0MsWUFBWUwsRUFBWixFQUFnQkQsR0FBR3pDLE9BQW5CLENBQVg7QUFDSDtBQUVKO0FBRUoscUJBakJEOztBQW1CQSx3QkFBSThDLFdBQVdDLFlBQVlMLEVBQVosRUFBaUIsS0FBSzFDLE9BQXRCLENBQWY7QUFDSCxpQjs7OENBRURnRCxPLHNCQUFTO0FBQ0wseUJBQUtsRCxTQUFMLEdBQWlCLEtBQUtDLFdBQXRCO0FBQ0gsaUIiLCJmaWxlIjoic2VydmljZXMvc2VydmljZS1yZWZyZXNoLXRva2VuLmpzIiwic291cmNlUm9vdCI6Ii9zcmMifQ==
