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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZ3VyYXRpb24vYXV0aC1jb25maWd1cmF0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OytCQUFlOztBQUVYLDBCQUFVLEtBRkM7QUFHWCxvQ0FBb0IsQ0FBQyxLQUFELENBSFQ7O0FBS1gsMEJBQVUsZ0JBTEM7QUFNWCwrQkFBZSxHQU5KO0FBT1gsZ0NBQWdCLEdBUEw7QUFRWCwyQkFBVyx1QkFSQTtBQVNYLCtCQUFlLEtBVEo7QUFVWCxnQ0FBZ0IsS0FWTDtBQVdYLDJCQUFXO0FBQ1AsNEJBQVE7QUFDQSw2QkFBSyxRQURMO0FBRUEsa0NBQVUsMEVBRlY7QUFHQSxxQ0FBYTtBQUhiLHFCQUREO0FBTVAsOEJBQVM7QUFDRCw2QkFBSyxVQURKO0FBRUQsa0NBQVU7QUFGVDtBQU5GO0FBWEEsYSIsImZpbGUiOiJjb25maWd1cmF0aW9uL2F1dGgtY29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
