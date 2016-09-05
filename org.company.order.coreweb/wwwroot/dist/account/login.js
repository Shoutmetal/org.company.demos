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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQvbG9naW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQVEsdUIsMEJBQUEsVzs7QUFDQSxrQixxQkFBQSxNOzs7NkJBR0ssSyxXQURaLE9BQU8sV0FBUCxDO0FBR0csK0JBQVksV0FBWixFQUF5QjtBQUFBOztBQUNyQix5QkFBSyxXQUFMLEdBQXFCLFdBQXJCO0FBQ0EseUJBQUssTUFBTCxHQUFlLEVBQUUsU0FBUyxFQUFDLGdCQUFnQixtQ0FBakIsRUFBcUQsVUFBVSxrQkFBL0QsRUFBWCxFQUFmOztBQUVBLHlCQUFLLFNBQUwsR0FBaUIsSUFBakI7QUFDQSx5QkFBSyxVQUFMLEdBQWtCLEtBQWxCO0FBRUg7O2dDQUVELFEsdUJBQVU7QUFDTixzQkFBRSxNQUFGLEVBQVUsSUFBVixDQUFlLE9BQWYsRUFBd0IsT0FBeEI7QUFDQSx5QkFBSyxFQUFMLEdBQVUsSUFBVjtBQUNILGlCOztnQ0FFRCxLLG9CQUFRO0FBQUE7O0FBQ0osd0JBQUksY0FBYyxFQUFFLFVBQVUsS0FBSyxRQUFqQixFQUEyQixVQUFVLEtBQUssUUFBMUMsRUFBb0QsWUFBWSxVQUFoRSxFQUFsQjs7QUFFQSx5QkFBSyxXQUFMLENBQWlCLEtBQWpCLENBQXVCLFdBQXZCLEVBQW9DLEtBQUssTUFBekMsRUFDSyxJQURMLENBQ1Usb0JBQVk7QUFDZCxxQ0FBYSxPQUFiLENBQXFCLEtBQXJCLEVBQTJCLEtBQUssU0FBTCxDQUFlLFFBQWYsQ0FBM0I7O0FBRUE7QUFDSCxxQkFMTCxFQU1LLEtBTkwsQ0FNVyxpQkFBUztBQUNaLDhCQUFNLElBQU4sR0FBYSxJQUFiLENBQWtCLGNBQU07O0FBRXBCLDhCQUFFLE1BQUssU0FBUCxFQUFrQixJQUFsQixDQUF1QixLQUF2QixFQUE4QixFQUE5QixDQUFpQyxDQUFqQyxFQUFvQyxJQUFwQyxDQUF5QyxNQUF6QyxFQUFpRCxFQUFqRCxDQUFvRCxDQUFwRCxFQUF1RCxJQUF2RCxDQUE0RCw4QkFBNUQ7QUFDQSw4QkFBRSxNQUFLLFNBQVAsRUFBa0IsSUFBbEIsQ0FBdUIsS0FBdkIsRUFBOEIsRUFBOUIsQ0FBaUMsQ0FBakMsRUFBb0MsSUFBcEM7QUFDSCx5QkFKRDtBQUtILHFCQVpMO0FBYUgsaUI7O2dDQUVELFkseUJBQWEsSSxFQUFNO0FBQUE7O0FBQ2YseUJBQUssV0FBTCxDQUFpQixZQUFqQixDQUE4QixJQUE5QixFQUNHLElBREgsQ0FDUSxvQkFBWTtBQUNkLCtCQUFLLFFBQUwsQ0FBYyxJQUFkLElBQXNCLElBQXRCO0FBQ0gscUJBSEg7QUFJSCxpQjs7Z0NBRUQsSSxtQkFBTTtBQUNGLHlCQUFLLFVBQUwsR0FBa0IsS0FBbEI7QUFDQSx5QkFBSyxTQUFMLEdBQWlCLElBQWpCO0FBRUgsaUI7O2dDQUVELFUseUJBQVk7QUFDUix5QkFBSyxTQUFMLEdBQWlCLEtBQWpCO0FBQ0EseUJBQUssVUFBTCxHQUFrQixJQUFsQjtBQUVILGlCIiwiZmlsZSI6ImFjY291bnQvbG9naW4uanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
