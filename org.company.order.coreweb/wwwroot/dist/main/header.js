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
                    this.user = JSON.parse(sessionStorage.getItem("profile") || "{}");
                    this.username = this.user.username;
                    this.firstname = this.user.firstname;
                    this.lastname = this.user.lastname;
                }

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4vaGVhZGVyLmpzIl0sIm5hbWVzIjpbIkF1dGhTZXJ2aWNlIiwiaW5qZWN0IiwiY29tcHV0ZWRGcm9tIiwiSGVhZGVyIiwiYXV0aFNlcnZpY2UiLCJ1c2VyIiwiSlNPTiIsInBhcnNlIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwidXNlcm5hbWUiLCJmaXJzdG5hbWUiLCJsYXN0bmFtZSIsImxvZ291dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBUUEsdUIsMEJBQUFBLFc7O0FBQ0FDLGtCLHFCQUFBQSxNO0FBQVFDLHdCLHFCQUFBQSxZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBR0hDLE0sV0FEWkYsT0FBT0QsV0FBUCxDLFVBYUlFLGFBQWEsV0FBYixFQUEwQixVQUExQixDO0FBVkQsZ0NBQVlFLFdBQVosRUFBd0I7QUFBQTs7QUFDcEIseUJBQUtBLFdBQUwsR0FBbUJBLFdBQW5CO0FBQ0EseUJBQUtDLElBQUwsR0FBWUMsS0FBS0MsS0FBTCxDQUFXQyxlQUFlQyxPQUFmLENBQXVCLFNBQXZCLEtBQXFDLElBQWhELENBQVo7QUFDQSx5QkFBS0MsUUFBTCxHQUFnQixLQUFLTCxJQUFMLENBQVVLLFFBQTFCO0FBQ0EseUJBQUtDLFNBQUwsR0FBaUIsS0FBS04sSUFBTCxDQUFVTSxTQUEzQjtBQUNBLHlCQUFLQyxRQUFMLEdBQWdCLEtBQUtQLElBQUwsQ0FBVU8sUUFBMUI7QUFDSDs7aUNBVURDLE0scUJBQVM7QUFDTCwyQkFBTyxLQUFLVCxXQUFMLENBQWlCUyxNQUFqQixFQUFQO0FBQ0gsaUI7Ozs7d0NBUGE7O0FBRVYsK0JBQU8sS0FBS0YsU0FBTCxHQUFpQixHQUFqQixHQUF1QixLQUFLQyxRQUFuQztBQUNIIiwiZmlsZSI6Im1haW4vaGVhZGVyLmpzIiwic291cmNlUm9vdCI6Ii9zcmMifQ==
