'use strict';

System.register(['aurelia-authentication', 'aurelia-framework'], function (_export, _context) {
    "use strict";

    var AuthService, inject, computedFrom, _createClass, _dec, _dec2, _class, _desc, _value, _class2, Header;

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
        setters: [function (_aureliaAuthentication) {
            AuthService = _aureliaAuthentication.AuthService;
        }, function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
            computedFrom = _aureliaFramework.computedFrom;
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

            _export('Header', Header = (_dec = inject(AuthService), _dec2 = computedFrom('firstname', 'lastname'), _dec(_class = (_class2 = function () {
                function Header(authService) {
                    _classCallCheck(this, Header);

                    this.authService = authService;
                    this.username;
                    this.firstname;
                    this.lastname;
                }

                Header.prototype.attached = function attached() {
                    var _this = this;

                    this.authService.getMe().then(function (profile) {
                        _this.username = profile.username;
                        _this.firstname = profile.firstname;
                        _this.lastname = profile.lastname;
                    });
                };

                Header.prototype.logout = function logout() {
                    return this.authService.logout();
                };

                _createClass(Header, [{
                    key: 'fullname',
                    get: function get() {

                        return this.firstname + ' ' + this.lastname;
                    }
                }]);

                return Header;
            }(), (_applyDecoratedDescriptor(_class2.prototype, 'fullname', [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, 'fullname'), _class2.prototype)), _class2)) || _class));

            _export('Header', Header);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4vaGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVEsdUIsMEJBQUEsVzs7QUFDQSxrQixxQkFBQSxNO0FBQVEsd0IscUJBQUEsWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUdILE0sV0FEWixPQUFPLFdBQVAsQyxVQW1CSSxhQUFhLFdBQWIsRUFBMEIsVUFBMUIsQztBQWhCRCxnQ0FBWSxXQUFaLEVBQXdCO0FBQUE7O0FBQ3BCLHlCQUFLLFdBQUwsR0FBbUIsV0FBbkI7QUFDQSx5QkFBSyxRQUFMO0FBQ0EseUJBQUssU0FBTDtBQUNBLHlCQUFLLFFBQUw7QUFDSDs7aUNBRUQsUSx1QkFBVTtBQUFBOztBQUNOLHlCQUFLLFdBQUwsQ0FBaUIsS0FBakIsR0FDSSxJQURKLENBQ1MsbUJBQVc7QUFDYiw4QkFBSyxRQUFMLEdBQWdCLFFBQVEsUUFBeEI7QUFDQSw4QkFBSyxTQUFMLEdBQWlCLFFBQVEsU0FBekI7QUFDQSw4QkFBSyxRQUFMLEdBQWdCLFFBQVEsUUFBeEI7QUFDSCxxQkFMSjtBQU1ILGlCOztpQ0FRRCxNLHFCQUFTO0FBQ0wsMkJBQU8sS0FBSyxXQUFMLENBQWlCLE1BQWpCLEVBQVA7QUFDSCxpQjs7Ozt3Q0FQYTs7QUFFViwrQkFBTyxLQUFLLFNBQUwsR0FBaUIsR0FBakIsR0FBdUIsS0FBSyxRQUFuQztBQUNIIiwiZmlsZSI6Im1haW4vaGVhZGVyLmpzIiwic291cmNlUm9vdCI6Ii9zcmMifQ==
