'use strict';

System.register(['aurelia-authentication', 'aurelia-framework'], function (_export, _context) {
    "use strict";

    var AuthService, inject, _dec, _class, Header;

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
            _export('Header', Header = (_dec = inject(AuthService), _dec(_class = function () {
                function Header(authService) {
                    _classCallCheck(this, Header);

                    this.authService = authService;
                }

                Header.prototype.attached = function attached() {
                    this.authService.getMe().then(function (profile) {
                        console.log(profile.username);
                    });
                };

                Header.prototype.logout = function logout() {
                    return this.authService.logout();
                };

                return Header;
            }()) || _class));

            _export('Header', Header);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4vaGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFRLHVCLDBCQUFBLFc7O0FBQ0Esa0IscUJBQUEsTTs7OzhCQUdLLE0sV0FEWixPQUFPLFdBQVAsQztBQUdHLGdDQUFZLFdBQVosRUFBd0I7QUFBQTs7QUFDcEIseUJBQUssV0FBTCxHQUFtQixXQUFuQjtBQUNIOztpQ0FFRCxRLHVCQUFVO0FBQ04seUJBQUssV0FBTCxDQUFpQixLQUFqQixHQUNJLElBREosQ0FDUyxtQkFBVztBQUNiLGdDQUFRLEdBQVIsQ0FBWSxRQUFRLFFBQXBCO0FBQ0gscUJBSEo7QUFJSCxpQjs7aUNBRUQsTSxxQkFBUztBQUNMLDJCQUFPLEtBQUssV0FBTCxDQUFpQixNQUFqQixFQUFQO0FBQ0gsaUIiLCJmaWxlIjoibWFpbi9oZWFkZXIuanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
