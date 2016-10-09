'use strict';

System.register(['aurelia-validatejs', 'aurelia-validation', 'aurelia-authentication', 'aurelia-framework'], function (_export, _context) {
    "use strict";

    var required, email, equality, validateTrigger, ValidationController, AuthService, inject, transient, NewInstance, _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, Signup;

    function _initDefineProp(target, property, descriptor, context) {
        if (!descriptor) return;
        Object.defineProperty(target, property, {
            enumerable: descriptor.enumerable,
            configurable: descriptor.configurable,
            writable: descriptor.writable,
            value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
        });
    }

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

    function _initializerWarningHelper(descriptor, context) {
        throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
    }

    return {
        setters: [function (_aureliaValidatejs) {
            required = _aureliaValidatejs.required;
            email = _aureliaValidatejs.email;
            equality = _aureliaValidatejs.equality;
        }, function (_aureliaValidation) {
            validateTrigger = _aureliaValidation.validateTrigger;
            ValidationController = _aureliaValidation.ValidationController;
        }, function (_aureliaAuthentication) {
            AuthService = _aureliaAuthentication.AuthService;
        }, function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
            transient = _aureliaFramework.transient;
            NewInstance = _aureliaFramework.NewInstance;
        }],
        execute: function () {
            _export('Signup', Signup = (_dec = inject(AuthService, NewInstance.of(ValidationController)), _dec2 = transient(), _dec3 = equality("signupPassword"), _dec(_class = _dec2(_class = (_class2 = function () {
                function Signup(authService, controller) {
                    _classCallCheck(this, Signup);

                    _initDefineProp(this, 'firstName', _descriptor, this);

                    _initDefineProp(this, 'lastName', _descriptor2, this);

                    _initDefineProp(this, 'email', _descriptor3, this);

                    _initDefineProp(this, 'signupUsername', _descriptor4, this);

                    _initDefineProp(this, 'signupPassword', _descriptor5, this);

                    _initDefineProp(this, 'rpassword', _descriptor6, this);

                    this.authService = authService;
                    this.header = { headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Accept': 'application/json' } };
                    this.controller = controller;
                    this.controller.validateTrigger = validateTrigger.change;
                }

                Signup.prototype.attached = function attached() {
                    $(this.signupForm).show();
                };

                Signup.prototype.activate = function activate(model) {
                    if (model) this.model = model.vm;
                };

                Signup.prototype.signup = function signup() {
                    var _this = this;

                    var errors = this.controller.validate();

                    if (!errors.length) {

                        this.authService.signup({
                            firstName: this.firstName,
                            lastName: this.lastName,
                            userName: this.signupUsername,
                            email: this.email,
                            password: this.signupPassword
                        }, this.header).then(function (response) {
                            _this.model.username = _this.signupUsername;
                            _this.model.password = _this.signupPassword;
                            _this.model.login();
                        }).catch(function (error) {
                            error.json().then(function (ex) {

                                if (Array.isArray(ex)) {
                                    var ul = "";

                                    ex.forEach(function (item) {
                                        ul = item.description + "<br />";
                                    });

                                    $(_this.signupForm).find("div").eq(0).find("span").eq(0).html(ul);
                                    $(_this.signupForm).find("div").eq(0).show();
                                }
                            });
                        });
                    }
                };

                return Signup;
            }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'firstName', [required], {
                enumerable: true,
                initializer: null
            }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'lastName', [required], {
                enumerable: true,
                initializer: null
            }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'email', [required, email], {
                enumerable: true,
                initializer: null
            }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'signupUsername', [required], {
                enumerable: true,
                initializer: null
            }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'signupPassword', [required], {
                enumerable: true,
                initializer: null
            }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'rpassword', [required, _dec3], {
                enumerable: true,
                initializer: null
            })), _class2)) || _class) || _class));

            _export('Signup', Signup);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQvc2lnbnVwLmpzIl0sIm5hbWVzIjpbInJlcXVpcmVkIiwiZW1haWwiLCJlcXVhbGl0eSIsInZhbGlkYXRlVHJpZ2dlciIsIlZhbGlkYXRpb25Db250cm9sbGVyIiwiQXV0aFNlcnZpY2UiLCJpbmplY3QiLCJ0cmFuc2llbnQiLCJOZXdJbnN0YW5jZSIsIlNpZ251cCIsIm9mIiwiYXV0aFNlcnZpY2UiLCJjb250cm9sbGVyIiwiaGVhZGVyIiwiaGVhZGVycyIsImNoYW5nZSIsImF0dGFjaGVkIiwiJCIsInNpZ251cEZvcm0iLCJzaG93IiwiYWN0aXZhdGUiLCJtb2RlbCIsInZtIiwic2lnbnVwIiwiZXJyb3JzIiwidmFsaWRhdGUiLCJsZW5ndGgiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsInVzZXJOYW1lIiwic2lnbnVwVXNlcm5hbWUiLCJwYXNzd29yZCIsInNpZ251cFBhc3N3b3JkIiwidGhlbiIsInVzZXJuYW1lIiwibG9naW4iLCJjYXRjaCIsImVycm9yIiwianNvbiIsIkFycmF5IiwiaXNBcnJheSIsImV4IiwidWwiLCJmb3JFYWNoIiwiaXRlbSIsImRlc2NyaXB0aW9uIiwiZmluZCIsImVxIiwiaHRtbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFRQSxvQixzQkFBQUEsUTtBQUFVQyxpQixzQkFBQUEsSztBQUFPQyxvQixzQkFBQUEsUTs7QUFDakJDLDJCLHNCQUFBQSxlO0FBQ0FDLGdDLHNCQUFBQSxvQjs7QUFFQUMsdUIsMEJBQUFBLFc7O0FBQ0FDLGtCLHFCQUFBQSxNO0FBQVFDLHFCLHFCQUFBQSxTO0FBQVdDLHVCLHFCQUFBQSxXOzs7OEJBSWRDLE0sV0FGWkgsT0FBT0QsV0FBUCxFQUFvQkcsWUFBWUUsRUFBWixDQUFlTixvQkFBZixDQUFwQixDLFVBQ0FHLFcsVUFRY0wsU0FBUyxnQkFBVCxDO0FBR1gsZ0NBQVlTLFdBQVosRUFBeUJDLFVBQXpCLEVBQXFDO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQ2pDLHlCQUFLRCxXQUFMLEdBQXFCQSxXQUFyQjtBQUNBLHlCQUFLRSxNQUFMLEdBQWUsRUFBRUMsU0FBUyxFQUFDLGdCQUFnQixtQ0FBakIsRUFBcUQsVUFBVSxrQkFBL0QsRUFBWCxFQUFmO0FBQ0EseUJBQUtGLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EseUJBQUtBLFVBQUwsQ0FBZ0JULGVBQWhCLEdBQWtDQSxnQkFBZ0JZLE1BQWxEO0FBQ0g7O2lDQUVEQyxRLHVCQUFVO0FBQ05DLHNCQUFFLEtBQUtDLFVBQVAsRUFBbUJDLElBQW5CO0FBQ0gsaUI7O2lDQUVEQyxRLHFCQUFTQyxLLEVBQU07QUFDWCx3QkFBR0EsS0FBSCxFQUNJLEtBQUtBLEtBQUwsR0FBYUEsTUFBTUMsRUFBbkI7QUFDUCxpQjs7aUNBRURDLE0scUJBQVE7QUFBQTs7QUFDSix3QkFBSUMsU0FBUyxLQUFLWixVQUFMLENBQWdCYSxRQUFoQixFQUFiOztBQUVBLHdCQUFHLENBQUNELE9BQU9FLE1BQVgsRUFBa0I7O0FBRWQsNkJBQUtmLFdBQUwsQ0FBaUJZLE1BQWpCLENBQXdCO0FBQ3BCSSx1Q0FBVyxLQUFLQSxTQURJO0FBRXBCQyxzQ0FBVSxLQUFLQSxRQUZLO0FBR3BCQyxzQ0FBVSxLQUFLQyxjQUhLO0FBSXBCN0IsbUNBQU8sS0FBS0EsS0FKUTtBQUtwQjhCLHNDQUFVLEtBQUtDO0FBTEsseUJBQXhCLEVBTUUsS0FBS25CLE1BTlAsRUFPQW9CLElBUEEsQ0FPSyxvQkFBWTtBQUNkLGtDQUFLWixLQUFMLENBQVdhLFFBQVgsR0FBc0IsTUFBS0osY0FBM0I7QUFDQSxrQ0FBS1QsS0FBTCxDQUFXVSxRQUFYLEdBQXNCLE1BQUtDLGNBQTNCO0FBQ0Esa0NBQUtYLEtBQUwsQ0FBV2MsS0FBWDtBQUNILHlCQVhBLEVBV0VDLEtBWEYsQ0FXUyxpQkFBUztBQUNmQyxrQ0FBTUMsSUFBTixHQUFhTCxJQUFiLENBQWtCLGNBQU07O0FBRXBCLG9DQUFHTSxNQUFNQyxPQUFOLENBQWNDLEVBQWQsQ0FBSCxFQUNBO0FBQ0ksd0NBQUlDLEtBQUssRUFBVDs7QUFFQUQsdUNBQUdFLE9BQUgsQ0FBVyxnQkFBUTtBQUFFRCw2Q0FBS0UsS0FBS0MsV0FBTCxHQUFtQixRQUF4QjtBQUFtQyxxQ0FBeEQ7O0FBRUE1QixzQ0FBRSxNQUFLQyxVQUFQLEVBQW1CNEIsSUFBbkIsQ0FBd0IsS0FBeEIsRUFBK0JDLEVBQS9CLENBQWtDLENBQWxDLEVBQXFDRCxJQUFyQyxDQUEwQyxNQUExQyxFQUFrREMsRUFBbEQsQ0FBcUQsQ0FBckQsRUFBd0RDLElBQXhELENBQTZETixFQUE3RDtBQUNBekIsc0NBQUUsTUFBS0MsVUFBUCxFQUFtQjRCLElBQW5CLENBQXdCLEtBQXhCLEVBQStCQyxFQUEvQixDQUFrQyxDQUFsQyxFQUFxQzVCLElBQXJDO0FBQ0g7QUFDSiw2QkFYRDtBQWFILHlCQXpCQTtBQTBCSDtBQUVKLGlCOzs7MkZBekRBbkIsUTs7O3lGQUNBQSxROzs7c0ZBQ0FBLFEsRUFBVUMsSzs7OytGQUNWRCxROzs7K0ZBQ0FBLFE7OzswRkFDQUEsUSIsImZpbGUiOiJhY2NvdW50L3NpZ251cC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
