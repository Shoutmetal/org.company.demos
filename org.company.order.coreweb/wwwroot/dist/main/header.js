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

                Header.prototype.logout = function logout() {
                    return this.authService.logout();
                };

                return Header;
            }()) || _class));

            _export('Header', Header);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4vaGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFRLHVCLDBCQUFBLFc7O0FBQ0Esa0IscUJBQUEsTTs7OzhCQUdLLE0sV0FEWixPQUFPLFdBQVAsQztBQUdHLGdDQUFZLFdBQVosRUFBd0I7QUFBQTs7QUFDcEIseUJBQUssV0FBTCxHQUFtQixXQUFuQjtBQUNIOztpQ0FFRCxNLHFCQUFTO0FBQ0wsMkJBQU8sS0FBSyxXQUFMLENBQWlCLE1BQWpCLEVBQVA7QUFDSCxpQiIsImZpbGUiOiJtYWluL2hlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
