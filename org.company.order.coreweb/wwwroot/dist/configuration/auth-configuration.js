'use strict';

System.register([], function (_export, _context) {
    "use strict";

    return {
        setters: [],
        execute: function () {
            _export('default', {

                endpoint: 'api',
                configureEndpoints: ['api'],

                loginUrl: '/connect/token',
                profileUrl: '/connect/userinfo',
                profileMethod: 'get',
                loginRedirect: '/',
                logoutRedirect: '/',
                signupUrl: '/api/account/register',
                loginOnSignup: false,
                signupRedirect: false,

                providers: {
                    google: {
                        url: 'google',
                        clientId: '357599867782-bn791ib3acfotv7c9vch5hgeujgk75p8.apps.googleusercontent.com',
                        redirectUri: '/'
                    },
                    facebook: {
                        url: 'facebook',
                        clientId: '1465278217541708498'
                    }
                }
            });
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZ3VyYXRpb24vYXV0aC1jb25maWd1cmF0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OytCQUFlOztBQUVYLDBCQUFVLEtBRkM7QUFHWCxvQ0FBb0IsQ0FBQyxLQUFELENBSFQ7O0FBS1gsMEJBQVUsZ0JBTEM7QUFNWCw0QkFBWSxtQkFORDtBQU9YLCtCQUFlLEtBUEo7QUFRWCwrQkFBZSxHQVJKO0FBU1gsZ0NBQWdCLEdBVEw7QUFVWCwyQkFBVyx1QkFWQTtBQVdYLCtCQUFlLEtBWEo7QUFZWCxnQ0FBZ0IsS0FaTDs7QUFnQlgsMkJBQVc7QUFDUCw0QkFBUTtBQUNBLDZCQUFLLFFBREw7QUFFQSxrQ0FBVSwwRUFGVjtBQUdBLHFDQUFhO0FBSGIscUJBREQ7QUFNUCw4QkFBUztBQUNELDZCQUFLLFVBREo7QUFFRCxrQ0FBVTtBQUZUO0FBTkY7QUFoQkEsYSIsImZpbGUiOiJjb25maWd1cmF0aW9uL2F1dGgtY29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
