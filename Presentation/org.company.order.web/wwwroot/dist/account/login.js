'use strict';

System.register(['aurelia-authentication', 'aurelia-framework', 'common/components/spinner'], function (_export, _context) {
    "use strict";

    var AuthService, inject, Spinner, _dec, _class, Login;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_aureliaAuthentication) {
            AuthService = _aureliaAuthentication.AuthService;
        }, function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
        }, function (_commonComponentsSpinner) {
            Spinner = _commonComponentsSpinner.Spinner;
        }],
        execute: function () {
            _export('Login', Login = (_dec = inject(AuthService, Spinner), _dec(_class = function () {
                function Login(authService, spinner) {
                    _classCallCheck(this, Login);

                    this.authService = authService;
                    this.header = { headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Accept': 'application/json' } };

                    this.showLogin = true;
                    this.showSignup = false;
                    this.spinner = spinner;
                }

                Login.prototype.attached = function attached() {
                    $('body').attr("class", "login");
                    this.vm = this;
                };

                Login.prototype.login = function login() {
                    var _this = this;

                    this.spinner.on();

                    var credentials = { username: this.username, password: this.password, grant_type: "password" };

                    this.authService.login(credentials, this.header).then(function () {
                        _this.spinner.off();
                    }).catch(function (error) {
                        error.json().then(function (ex) {
                            _this.spinner.off();
                            $(_this.loginForm).find("div").eq(0).find("span").eq(0).html("Invalid Username or Password");
                            $(_this.loginForm).find("div").eq(0).show();
                        });
                    });
                };

                Login.prototype.authenticate = function authenticate(name) {
                    var _this2 = this;

                    this.authService.authenticate(name).then(function (response) {
                        _this2.provider[name] = true;
                    });
                };

                Login.prototype.back = function back() {
                    this.showSignup = false;
                    this.showLogin = true;
                };

                Login.prototype.openSignup = function openSignup() {
                    this.showLogin = false;
                    this.showSignup = true;
                };

                return Login;
            }()) || _class));

            _export('Login', Login);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQvbG9naW4uanMiXSwibmFtZXMiOlsiQXV0aFNlcnZpY2UiLCJpbmplY3QiLCJTcGlubmVyIiwiTG9naW4iLCJhdXRoU2VydmljZSIsInNwaW5uZXIiLCJoZWFkZXIiLCJoZWFkZXJzIiwic2hvd0xvZ2luIiwic2hvd1NpZ251cCIsImF0dGFjaGVkIiwiJCIsImF0dHIiLCJ2bSIsImxvZ2luIiwib24iLCJjcmVkZW50aWFscyIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJncmFudF90eXBlIiwidGhlbiIsIm9mZiIsImNhdGNoIiwiZXJyb3IiLCJqc29uIiwibG9naW5Gb3JtIiwiZmluZCIsImVxIiwiaHRtbCIsInNob3ciLCJhdXRoZW50aWNhdGUiLCJuYW1lIiwicHJvdmlkZXIiLCJiYWNrIiwib3BlblNpZ251cCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQVFBLHVCLDBCQUFBQSxXOztBQUNBQyxrQixxQkFBQUEsTTs7QUFDQUMsbUIsNEJBQUFBLE87Ozs2QkFHS0MsSyxXQURaRixPQUFPRCxXQUFQLEVBQW9CRSxPQUFwQixDO0FBR0csK0JBQVlFLFdBQVosRUFBeUJDLE9BQXpCLEVBQWtDO0FBQUE7O0FBQzlCLHlCQUFLRCxXQUFMLEdBQXFCQSxXQUFyQjtBQUNBLHlCQUFLRSxNQUFMLEdBQWUsRUFBRUMsU0FBUyxFQUFDLGdCQUFnQixtQ0FBakIsRUFBcUQsVUFBVSxrQkFBL0QsRUFBWCxFQUFmOztBQUVBLHlCQUFLQyxTQUFMLEdBQWlCLElBQWpCO0FBQ0EseUJBQUtDLFVBQUwsR0FBa0IsS0FBbEI7QUFDQSx5QkFBS0osT0FBTCxHQUFlQSxPQUFmO0FBRUg7O2dDQUVESyxRLHVCQUFVO0FBQ05DLHNCQUFFLE1BQUYsRUFBVUMsSUFBVixDQUFlLE9BQWYsRUFBd0IsT0FBeEI7QUFDQSx5QkFBS0MsRUFBTCxHQUFVLElBQVY7QUFDSCxpQjs7Z0NBRURDLEssb0JBQVE7QUFBQTs7QUFDSix5QkFBS1QsT0FBTCxDQUFhVSxFQUFiOztBQUVBLHdCQUFJQyxjQUFjLEVBQUVDLFVBQVUsS0FBS0EsUUFBakIsRUFBMkJDLFVBQVUsS0FBS0EsUUFBMUMsRUFBb0RDLFlBQVksVUFBaEUsRUFBbEI7O0FBRUEseUJBQUtmLFdBQUwsQ0FBaUJVLEtBQWpCLENBQXVCRSxXQUF2QixFQUFvQyxLQUFLVixNQUF6QyxFQUNLYyxJQURMLENBQ1UsWUFBSTtBQUNOLDhCQUFLZixPQUFMLENBQWFnQixHQUFiO0FBQ0gscUJBSEwsRUFJS0MsS0FKTCxDQUlXLGlCQUFTO0FBQ1pDLDhCQUFNQyxJQUFOLEdBQWFKLElBQWIsQ0FBa0IsY0FBTTtBQUNwQixrQ0FBS2YsT0FBTCxDQUFhZ0IsR0FBYjtBQUNBViw4QkFBRSxNQUFLYyxTQUFQLEVBQWtCQyxJQUFsQixDQUF1QixLQUF2QixFQUE4QkMsRUFBOUIsQ0FBaUMsQ0FBakMsRUFBb0NELElBQXBDLENBQXlDLE1BQXpDLEVBQWlEQyxFQUFqRCxDQUFvRCxDQUFwRCxFQUF1REMsSUFBdkQsQ0FBNEQsOEJBQTVEO0FBQ0FqQiw4QkFBRSxNQUFLYyxTQUFQLEVBQWtCQyxJQUFsQixDQUF1QixLQUF2QixFQUE4QkMsRUFBOUIsQ0FBaUMsQ0FBakMsRUFBb0NFLElBQXBDO0FBRUgseUJBTEQ7QUFNSCxxQkFYTDtBQVlILGlCOztnQ0FFREMsWSx5QkFBYUMsSSxFQUFNO0FBQUE7O0FBQ2YseUJBQUszQixXQUFMLENBQWlCMEIsWUFBakIsQ0FBOEJDLElBQTlCLEVBQ0dYLElBREgsQ0FDUSxvQkFBWTtBQUNkLCtCQUFLWSxRQUFMLENBQWNELElBQWQsSUFBc0IsSUFBdEI7QUFDSCxxQkFISDtBQUlILGlCOztnQ0FFREUsSSxtQkFBTTtBQUNGLHlCQUFLeEIsVUFBTCxHQUFrQixLQUFsQjtBQUNBLHlCQUFLRCxTQUFMLEdBQWlCLElBQWpCO0FBRUgsaUI7O2dDQUVEMEIsVSx5QkFBWTtBQUNSLHlCQUFLMUIsU0FBTCxHQUFpQixLQUFqQjtBQUNBLHlCQUFLQyxVQUFMLEdBQWtCLElBQWxCO0FBRUgsaUIiLCJmaWxlIjoiYWNjb3VudC9sb2dpbi5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
