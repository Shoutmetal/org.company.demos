'use strict';

System.register(['aurelia-authentication', 'aurelia-framework'], function (_export, _context) {
    "use strict";

    var AuthService, inject, _dec, _class, Login;

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
        }],
        execute: function () {
            _export('Login', Login = (_dec = inject(AuthService), _dec(_class = function () {
                function Login(authService) {
                    _classCallCheck(this, Login);

                    this.authService = authService;
                    this.header = { headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Accept': 'application/json' } };

                    this.showLogin = true;
                    this.showSignup = false;
                }

                Login.prototype.attached = function attached() {
                    $('body').attr("class", "login");
                    this.vm = this;
                };

                Login.prototype.login = function login() {
                    var _this = this;

                    var credentials = { username: this.username, password: this.password, grant_type: "password" };

                    this.authService.login(credentials, this.header).then(function (response) {
                        localStorage.setItem("xxx", JSON.stringify(response));

                        return;
                    }).catch(function (error) {
                        error.json().then(function (ex) {

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQvbG9naW4uanMiXSwibmFtZXMiOlsiQXV0aFNlcnZpY2UiLCJpbmplY3QiLCJMb2dpbiIsImF1dGhTZXJ2aWNlIiwiaGVhZGVyIiwiaGVhZGVycyIsInNob3dMb2dpbiIsInNob3dTaWdudXAiLCJhdHRhY2hlZCIsIiQiLCJhdHRyIiwidm0iLCJsb2dpbiIsImNyZWRlbnRpYWxzIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImdyYW50X3R5cGUiLCJ0aGVuIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXNwb25zZSIsImNhdGNoIiwiZXJyb3IiLCJqc29uIiwibG9naW5Gb3JtIiwiZmluZCIsImVxIiwiaHRtbCIsInNob3ciLCJhdXRoZW50aWNhdGUiLCJuYW1lIiwicHJvdmlkZXIiLCJiYWNrIiwib3BlblNpZ251cCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQVFBLHVCLDBCQUFBQSxXOztBQUNBQyxrQixxQkFBQUEsTTs7OzZCQUdLQyxLLFdBRFpELE9BQU9ELFdBQVAsQztBQUdHLCtCQUFZRyxXQUFaLEVBQXlCO0FBQUE7O0FBQ3JCLHlCQUFLQSxXQUFMLEdBQXFCQSxXQUFyQjtBQUNBLHlCQUFLQyxNQUFMLEdBQWUsRUFBRUMsU0FBUyxFQUFDLGdCQUFnQixtQ0FBakIsRUFBcUQsVUFBVSxrQkFBL0QsRUFBWCxFQUFmOztBQUVBLHlCQUFLQyxTQUFMLEdBQWlCLElBQWpCO0FBQ0EseUJBQUtDLFVBQUwsR0FBa0IsS0FBbEI7QUFFSDs7Z0NBRURDLFEsdUJBQVU7QUFDTkMsc0JBQUUsTUFBRixFQUFVQyxJQUFWLENBQWUsT0FBZixFQUF3QixPQUF4QjtBQUNBLHlCQUFLQyxFQUFMLEdBQVUsSUFBVjtBQUNILGlCOztnQ0FFREMsSyxvQkFBUTtBQUFBOztBQUNKLHdCQUFJQyxjQUFjLEVBQUVDLFVBQVUsS0FBS0EsUUFBakIsRUFBMkJDLFVBQVUsS0FBS0EsUUFBMUMsRUFBb0RDLFlBQVksVUFBaEUsRUFBbEI7O0FBRUEseUJBQUtiLFdBQUwsQ0FBaUJTLEtBQWpCLENBQXVCQyxXQUF2QixFQUFvQyxLQUFLVCxNQUF6QyxFQUNLYSxJQURMLENBQ1Usb0JBQVk7QUFDZEMscUNBQWFDLE9BQWIsQ0FBcUIsS0FBckIsRUFBMkJDLEtBQUtDLFNBQUwsQ0FBZUMsUUFBZixDQUEzQjs7QUFFQTtBQUNILHFCQUxMLEVBTUtDLEtBTkwsQ0FNVyxpQkFBUztBQUNaQyw4QkFBTUMsSUFBTixHQUFhUixJQUFiLENBQWtCLGNBQU07O0FBRXBCUiw4QkFBRSxNQUFLaUIsU0FBUCxFQUFrQkMsSUFBbEIsQ0FBdUIsS0FBdkIsRUFBOEJDLEVBQTlCLENBQWlDLENBQWpDLEVBQW9DRCxJQUFwQyxDQUF5QyxNQUF6QyxFQUFpREMsRUFBakQsQ0FBb0QsQ0FBcEQsRUFBdURDLElBQXZELENBQTRELDhCQUE1RDtBQUNBcEIsOEJBQUUsTUFBS2lCLFNBQVAsRUFBa0JDLElBQWxCLENBQXVCLEtBQXZCLEVBQThCQyxFQUE5QixDQUFpQyxDQUFqQyxFQUFvQ0UsSUFBcEM7QUFDSCx5QkFKRDtBQUtILHFCQVpMO0FBYUgsaUI7O2dDQUVEQyxZLHlCQUFhQyxJLEVBQU07QUFBQTs7QUFDZix5QkFBSzdCLFdBQUwsQ0FBaUI0QixZQUFqQixDQUE4QkMsSUFBOUIsRUFDR2YsSUFESCxDQUNRLG9CQUFZO0FBQ2QsK0JBQUtnQixRQUFMLENBQWNELElBQWQsSUFBc0IsSUFBdEI7QUFDSCxxQkFISDtBQUlILGlCOztnQ0FFREUsSSxtQkFBTTtBQUNGLHlCQUFLM0IsVUFBTCxHQUFrQixLQUFsQjtBQUNBLHlCQUFLRCxTQUFMLEdBQWlCLElBQWpCO0FBRUgsaUI7O2dDQUVENkIsVSx5QkFBWTtBQUNSLHlCQUFLN0IsU0FBTCxHQUFpQixLQUFqQjtBQUNBLHlCQUFLQyxVQUFMLEdBQWtCLElBQWxCO0FBRUgsaUIiLCJmaWxlIjoiYWNjb3VudC9sb2dpbi5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
