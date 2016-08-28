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
//# sourceMappingURL=data:application/json;base64,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
