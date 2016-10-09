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

                    this.authService.login(credentials, this.header).catch(function (error) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQvbG9naW4uanMiXSwibmFtZXMiOlsiQXV0aFNlcnZpY2UiLCJpbmplY3QiLCJMb2dpbiIsImF1dGhTZXJ2aWNlIiwiaGVhZGVyIiwiaGVhZGVycyIsInNob3dMb2dpbiIsInNob3dTaWdudXAiLCJhdHRhY2hlZCIsIiQiLCJhdHRyIiwidm0iLCJsb2dpbiIsImNyZWRlbnRpYWxzIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImdyYW50X3R5cGUiLCJjYXRjaCIsImVycm9yIiwianNvbiIsInRoZW4iLCJsb2dpbkZvcm0iLCJmaW5kIiwiZXEiLCJodG1sIiwic2hvdyIsImF1dGhlbnRpY2F0ZSIsIm5hbWUiLCJwcm92aWRlciIsImJhY2siLCJvcGVuU2lnbnVwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBUUEsdUIsMEJBQUFBLFc7O0FBQ0FDLGtCLHFCQUFBQSxNOzs7NkJBR0tDLEssV0FEWkQsT0FBT0QsV0FBUCxDO0FBR0csK0JBQVlHLFdBQVosRUFBeUI7QUFBQTs7QUFDckIseUJBQUtBLFdBQUwsR0FBcUJBLFdBQXJCO0FBQ0EseUJBQUtDLE1BQUwsR0FBZSxFQUFFQyxTQUFTLEVBQUMsZ0JBQWdCLG1DQUFqQixFQUFxRCxVQUFVLGtCQUEvRCxFQUFYLEVBQWY7O0FBRUEseUJBQUtDLFNBQUwsR0FBaUIsSUFBakI7QUFDQSx5QkFBS0MsVUFBTCxHQUFrQixLQUFsQjtBQUVIOztnQ0FFREMsUSx1QkFBVTtBQUNOQyxzQkFBRSxNQUFGLEVBQVVDLElBQVYsQ0FBZSxPQUFmLEVBQXdCLE9BQXhCO0FBQ0EseUJBQUtDLEVBQUwsR0FBVSxJQUFWO0FBQ0gsaUI7O2dDQUVEQyxLLG9CQUFRO0FBQUE7O0FBQ0osd0JBQUlDLGNBQWMsRUFBRUMsVUFBVSxLQUFLQSxRQUFqQixFQUEyQkMsVUFBVSxLQUFLQSxRQUExQyxFQUFvREMsWUFBWSxVQUFoRSxFQUFsQjs7QUFFQSx5QkFBS2IsV0FBTCxDQUFpQlMsS0FBakIsQ0FBdUJDLFdBQXZCLEVBQW9DLEtBQUtULE1BQXpDLEVBQ0thLEtBREwsQ0FDVyxpQkFBUztBQUNaQyw4QkFBTUMsSUFBTixHQUFhQyxJQUFiLENBQWtCLGNBQU07O0FBRXBCWCw4QkFBRSxNQUFLWSxTQUFQLEVBQWtCQyxJQUFsQixDQUF1QixLQUF2QixFQUE4QkMsRUFBOUIsQ0FBaUMsQ0FBakMsRUFBb0NELElBQXBDLENBQXlDLE1BQXpDLEVBQWlEQyxFQUFqRCxDQUFvRCxDQUFwRCxFQUF1REMsSUFBdkQsQ0FBNEQsOEJBQTVEO0FBQ0FmLDhCQUFFLE1BQUtZLFNBQVAsRUFBa0JDLElBQWxCLENBQXVCLEtBQXZCLEVBQThCQyxFQUE5QixDQUFpQyxDQUFqQyxFQUFvQ0UsSUFBcEM7QUFDSCx5QkFKRDtBQUtILHFCQVBMO0FBUUgsaUI7O2dDQUVEQyxZLHlCQUFhQyxJLEVBQU07QUFBQTs7QUFDZix5QkFBS3hCLFdBQUwsQ0FBaUJ1QixZQUFqQixDQUE4QkMsSUFBOUIsRUFDR1AsSUFESCxDQUNRLG9CQUFZO0FBQ2QsK0JBQUtRLFFBQUwsQ0FBY0QsSUFBZCxJQUFzQixJQUF0QjtBQUNILHFCQUhIO0FBSUgsaUI7O2dDQUVERSxJLG1CQUFNO0FBQ0YseUJBQUt0QixVQUFMLEdBQWtCLEtBQWxCO0FBQ0EseUJBQUtELFNBQUwsR0FBaUIsSUFBakI7QUFFSCxpQjs7Z0NBRUR3QixVLHlCQUFZO0FBQ1IseUJBQUt4QixTQUFMLEdBQWlCLEtBQWpCO0FBQ0EseUJBQUtDLFVBQUwsR0FBa0IsSUFBbEI7QUFFSCxpQiIsImZpbGUiOiJhY2NvdW50L2xvZ2luLmpzIiwic291cmNlUm9vdCI6Ii9zcmMifQ==
