'use strict';

System.register(['aurelia-framework', 'services/service-event-listener', 'services/service-refresh-token', 'aurelia-event-aggregator', 'aurelia-authentication'], function (_export, _context) {
    "use strict";

    var inject, computedFrom, ServiceEventListener, ServiceRefreshToken, EventAggregator, AuthService, _createClass, _dec, _dec2, _class, _desc, _value, _class2, IdleTimeout;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
        var desc = {};
        Object['ke' + 'ys'](descriptor).forEach(function (key) {
            desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;

        if ('value' in desc || desc.initializer) {
            desc.writable = true;
        }

        desc = decorators.slice().reverse().reduce(function (desc, decorator) {
            return decorator(target, property, desc) || desc;
        }, desc);

        if (context && desc.initializer !== void 0) {
            desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
            desc.initializer = undefined;
        }

        if (desc.initializer === void 0) {
            Object['define' + 'Property'](target, property, desc);
            desc = null;
        }

        return desc;
    }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
            computedFrom = _aureliaFramework.computedFrom;
        }, function (_servicesServiceEventListener) {
            ServiceEventListener = _servicesServiceEventListener.ServiceEventListener;
        }, function (_servicesServiceRefreshToken) {
            ServiceRefreshToken = _servicesServiceRefreshToken.ServiceRefreshToken;
        }, function (_aureliaEventAggregator) {
            EventAggregator = _aureliaEventAggregator.EventAggregator;
        }, function (_aureliaAuthentication) {
            AuthService = _aureliaAuthentication.AuthService;
        }],
        execute: function () {
            _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            _export('IdleTimeout', IdleTimeout = (_dec = inject(ServiceEventListener, ServiceRefreshToken, AuthService, EventAggregator), _dec2 = computedFrom('_countdown'), _dec(_class = (_class2 = function () {
                function IdleTimeout(serviceEventListener, serviceRefreshToken, authService, event) {
                    _classCallCheck(this, IdleTimeout);

                    this._countdown = 10;
                    this.stop = false;
                    this.serviceEventListener = serviceEventListener;
                    this.serviceRefreshToken = serviceRefreshToken;
                    this.authService = authService;
                    this.event = event;

                    var auth_object = this.authService.authentication.getResponseObject();

                    var refreshTokenTime = auth_object.expires_in - auth_object.expires_in * 0.02;
                    var eventListenerTime = auth_object.expires_in - auth_object.expires_in * 0.03;

                    this.serviceRefreshToken.configure({
                        expiresIn: parseInt(refreshTokenTime)
                    });

                    this.serviceEventListener.configure({
                        expiresIn: parseInt(eventListenerTime)
                    });
                }

                IdleTimeout.prototype.run = function run() {
                    this.serviceRefreshToken.start();
                    this.serviceEventListener.start();
                };

                IdleTimeout.prototype.attached = function attached() {
                    var _this = this;

                    this.run();

                    this.event.subscribe("event::inactivity", function () {
                        _this.serviceRefreshToken.pause();
                        _this.startCountdown();

                        $('#idle-timeout-dialog').modal('show');
                    });
                };

                IdleTimeout.prototype.acept = function acept() {
                    this.stop = true;
                    this.serviceRefreshToken.refresh();
                    this.serviceRefreshToken.restart();
                    this.serviceRefreshToken.continue();
                    this.serviceEventListener.continue();

                    $('#idle-timeout-dialog').modal('hide');
                };

                IdleTimeout.prototype.cancel = function cancel() {
                    this.authService.logout();
                    $('#idle-timeout-dialog').modal('hide');
                };

                IdleTimeout.prototype.startCountdown = function startCountdown() {
                    var me = this;

                    var fn = function fn() {
                        me._countdown--;

                        if (!me._countdown) {
                            if (!me.stop) {
                                me.authService.logout();
                            } else {
                                me._countdown = 10;
                                me.stop = false;
                                clearInterval(interval);
                            }
                        }
                    };

                    var interval = setInterval(fn, 1000);
                };

                _createClass(IdleTimeout, [{
                    key: 'countdown',
                    get: function get() {
                        return this._countdown;
                    }
                }]);

                return IdleTimeout;
            }(), (_applyDecoratedDescriptor(_class2.prototype, 'countdown', [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, 'countdown'), _class2.prototype)), _class2)) || _class));

            _export('IdleTimeout', IdleTimeout);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi9jb21wb25lbnRzL2lkbGUtdGltZW91dC5qcyJdLCJuYW1lcyI6WyJpbmplY3QiLCJjb21wdXRlZEZyb20iLCJTZXJ2aWNlRXZlbnRMaXN0ZW5lciIsIlNlcnZpY2VSZWZyZXNoVG9rZW4iLCJFdmVudEFnZ3JlZ2F0b3IiLCJBdXRoU2VydmljZSIsIklkbGVUaW1lb3V0Iiwic2VydmljZUV2ZW50TGlzdGVuZXIiLCJzZXJ2aWNlUmVmcmVzaFRva2VuIiwiYXV0aFNlcnZpY2UiLCJldmVudCIsIl9jb3VudGRvd24iLCJzdG9wIiwiYXV0aF9vYmplY3QiLCJhdXRoZW50aWNhdGlvbiIsImdldFJlc3BvbnNlT2JqZWN0IiwicmVmcmVzaFRva2VuVGltZSIsImV4cGlyZXNfaW4iLCJldmVudExpc3RlbmVyVGltZSIsImNvbmZpZ3VyZSIsImV4cGlyZXNJbiIsInBhcnNlSW50IiwicnVuIiwic3RhcnQiLCJhdHRhY2hlZCIsInN1YnNjcmliZSIsInBhdXNlIiwic3RhcnRDb3VudGRvd24iLCIkIiwibW9kYWwiLCJhY2VwdCIsInJlZnJlc2giLCJyZXN0YXJ0IiwiY29udGludWUiLCJjYW5jZWwiLCJsb2dvdXQiLCJtZSIsImZuIiwiY2xlYXJJbnRlcnZhbCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVFBLGtCLHFCQUFBQSxNO0FBQVFDLHdCLHFCQUFBQSxZOztBQUNSQyxnQyxpQ0FBQUEsb0I7O0FBQ0FDLCtCLGdDQUFBQSxtQjs7QUFDQUMsMkIsMkJBQUFBLGU7O0FBQ0FDLHVCLDBCQUFBQSxXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUNBR0tDLFcsV0FEWk4sT0FBT0Usb0JBQVAsRUFBNkJDLG1CQUE3QixFQUFrREUsV0FBbEQsRUFBK0RELGVBQS9ELEMsVUEyQ0lILGFBQWEsWUFBYixDO0FBeENELHFDQUFZTSxvQkFBWixFQUFrQ0MsbUJBQWxDLEVBQXVEQyxXQUF2RCxFQUFvRUMsS0FBcEUsRUFBMEU7QUFBQTs7QUFDdEUseUJBQUtDLFVBQUwsR0FBa0IsRUFBbEI7QUFDQSx5QkFBS0MsSUFBTCxHQUFZLEtBQVo7QUFDQSx5QkFBS0wsb0JBQUwsR0FBMkJBLG9CQUEzQjtBQUNBLHlCQUFLQyxtQkFBTCxHQUEyQkEsbUJBQTNCO0FBQ0EseUJBQUtDLFdBQUwsR0FBbUJBLFdBQW5CO0FBQ0EseUJBQUtDLEtBQUwsR0FBYUEsS0FBYjs7QUFFQSx3QkFBSUcsY0FBYyxLQUFLSixXQUFMLENBQWlCSyxjQUFqQixDQUFnQ0MsaUJBQWhDLEVBQWxCOztBQUVBLHdCQUFJQyxtQkFBbUJILFlBQVlJLFVBQVosR0FBMEJKLFlBQVlJLFVBQVosR0FBeUIsSUFBMUU7QUFDQSx3QkFBSUMsb0JBQW9CTCxZQUFZSSxVQUFaLEdBQTBCSixZQUFZSSxVQUFaLEdBQXlCLElBQTNFOztBQUVBLHlCQUFLVCxtQkFBTCxDQUF5QlcsU0FBekIsQ0FBbUM7QUFDL0JDLG1DQUFZQyxTQUFTTCxnQkFBVDtBQURtQixxQkFBbkM7O0FBSUEseUJBQUtULG9CQUFMLENBQTBCWSxTQUExQixDQUFvQztBQUNoQ0MsbUNBQVlDLFNBQVNILGlCQUFUO0FBRG9CLHFCQUFwQztBQUlIOztzQ0FFREksRyxrQkFBSztBQUNELHlCQUFLZCxtQkFBTCxDQUF5QmUsS0FBekI7QUFDQSx5QkFBS2hCLG9CQUFMLENBQTBCZ0IsS0FBMUI7QUFDSCxpQjs7c0NBRURDLFEsdUJBQVU7QUFBQTs7QUFDTix5QkFBS0YsR0FBTDs7QUFFQSx5QkFBS1osS0FBTCxDQUFXZSxTQUFYLENBQXFCLG1CQUFyQixFQUEwQyxZQUFNO0FBQzVDLDhCQUFLakIsbUJBQUwsQ0FBeUJrQixLQUF6QjtBQUNBLDhCQUFLQyxjQUFMOztBQUVBQywwQkFBRSxzQkFBRixFQUEwQkMsS0FBMUIsQ0FBZ0MsTUFBaEM7QUFDSCxxQkFMRDtBQU9ILGlCOztzQ0FPREMsSyxvQkFBTztBQUNILHlCQUFLbEIsSUFBTCxHQUFZLElBQVo7QUFDQSx5QkFBS0osbUJBQUwsQ0FBeUJ1QixPQUF6QjtBQUNBLHlCQUFLdkIsbUJBQUwsQ0FBeUJ3QixPQUF6QjtBQUNBLHlCQUFLeEIsbUJBQUwsQ0FBeUJ5QixRQUF6QjtBQUNBLHlCQUFLMUIsb0JBQUwsQ0FBMEIwQixRQUExQjs7QUFFQUwsc0JBQUUsc0JBQUYsRUFBMEJDLEtBQTFCLENBQWdDLE1BQWhDO0FBQ0gsaUI7O3NDQUVESyxNLHFCQUFRO0FBQ0oseUJBQUt6QixXQUFMLENBQWlCMEIsTUFBakI7QUFDQVAsc0JBQUUsc0JBQUYsRUFBMEJDLEtBQTFCLENBQWdDLE1BQWhDO0FBQ0gsaUI7O3NDQUdERixjLDZCQUFnQjtBQUNaLHdCQUFJUyxLQUFLLElBQVQ7O0FBRUEsd0JBQUlDLEtBQUssU0FBTEEsRUFBSyxHQUFNO0FBQ1hELDJCQUFHekIsVUFBSDs7QUFFQSw0QkFBRyxDQUFDeUIsR0FBR3pCLFVBQVAsRUFBa0I7QUFDZCxnQ0FBRyxDQUFDeUIsR0FBR3hCLElBQVAsRUFBWTtBQUNSd0IsbUNBQUczQixXQUFILENBQWUwQixNQUFmO0FBQ0gsNkJBRkQsTUFFSztBQUNEQyxtQ0FBR3pCLFVBQUgsR0FBZ0IsRUFBaEI7QUFDQXlCLG1DQUFHeEIsSUFBSCxHQUFVLEtBQVY7QUFDQTBCLDhDQUFjQyxRQUFkO0FBQ0g7QUFDSjtBQUVKLHFCQWJEOztBQWVBLHdCQUFJQSxXQUFXQyxZQUFZSCxFQUFaLEVBQWlCLElBQWpCLENBQWY7QUFDSCxpQjs7Ozt3Q0F2Q2M7QUFDWCwrQkFBTyxLQUFLMUIsVUFBWjtBQUNIIiwiZmlsZSI6ImNvbW1vbi9jb21wb25lbnRzL2lkbGUtdGltZW91dC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
