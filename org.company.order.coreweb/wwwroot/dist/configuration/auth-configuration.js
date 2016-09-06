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

                refreshTokenUrl: null,

                useRefreshToken: true,

                autoUpdateToken: false,

                clientId: false,

                refreshTokenProp: 'refresh_token',

                expiredReload: 0,

                refreshTokenName: 'token',

                refreshTokenRoot: false,

                httpInterceptor: true,

                withCredentials: true,

                platform: 'browser',

                storage: 'sessionStorage',

                storageKey: 'aurelia_authentication',

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZ3VyYXRpb24vYXV0aC1jb25maWd1cmF0aW9uLmpzIl0sIm5hbWVzIjpbImVuZHBvaW50IiwiY29uZmlndXJlRW5kcG9pbnRzIiwibG9naW5VcmwiLCJwcm9maWxlVXJsIiwicHJvZmlsZU1ldGhvZCIsImxvZ2luUmVkaXJlY3QiLCJsb2dvdXRSZWRpcmVjdCIsInNpZ251cFVybCIsImxvZ2luT25TaWdudXAiLCJzaWdudXBSZWRpcmVjdCIsInJlZnJlc2hUb2tlblVybCIsInVzZVJlZnJlc2hUb2tlbiIsImF1dG9VcGRhdGVUb2tlbiIsImNsaWVudElkIiwicmVmcmVzaFRva2VuUHJvcCIsImV4cGlyZWRSZWxvYWQiLCJyZWZyZXNoVG9rZW5OYW1lIiwicmVmcmVzaFRva2VuUm9vdCIsImh0dHBJbnRlcmNlcHRvciIsIndpdGhDcmVkZW50aWFscyIsInBsYXRmb3JtIiwic3RvcmFnZSIsInN0b3JhZ2VLZXkiLCJwcm92aWRlcnMiLCJnb29nbGUiLCJ1cmwiLCJyZWRpcmVjdFVyaSIsImZhY2Vib29rIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OzsrQkFBZTs7QUFFWEEsMEJBQVUsS0FGQztBQUdYQyxvQ0FBb0IsQ0FBQyxLQUFELENBSFQ7O0FBS1hDLDBCQUFVLGdCQUxDO0FBTVhDLDRCQUFZLG1CQU5EO0FBT1hDLCtCQUFlLEtBUEo7QUFRWEMsK0JBQWUsR0FSSjtBQVNYQyxnQ0FBZ0IsR0FUTDtBQVVYQywyQkFBVyx1QkFWQTtBQVdYQywrQkFBZSxLQVhKO0FBWVhDLGdDQUFnQixLQVpMOztBQWtCWEMsaUNBQWlCLElBbEJOOztBQXFCWEMsaUNBQWlCLElBckJOOztBQXVCWEMsaUNBQWlCLEtBdkJOOztBQXlCWEMsMEJBQVUsS0F6QkM7O0FBMkJYQyxrQ0FBa0IsZUEzQlA7O0FBNkJYQywrQkFBZSxDQTdCSjs7QUFtQ1hDLGtDQUFrQixPQW5DUDs7QUFxQ1hDLGtDQUFrQixLQXJDUDs7QUF3Q1hDLGlDQUFpQixJQXhDTjs7QUEwQ1hDLGlDQUFrQixJQTFDUDs7QUE0Q1hDLDBCQUFXLFNBNUNBOztBQThDWEMseUJBQVUsZ0JBOUNDOztBQWdEWEMsNEJBQWEsd0JBaERGOztBQWtEWEMsMkJBQVc7QUFDUEMsNEJBQVE7QUFDQUMsNkJBQUssUUFETDtBQUVBWixrQ0FBVSwwRUFGVjtBQUdBYSxxQ0FBYTtBQUhiLHFCQUREO0FBTVBDLDhCQUFTO0FBQ0RGLDZCQUFLLFVBREo7QUFFRFosa0NBQVU7QUFGVDtBQU5GO0FBbERBLGEiLCJmaWxlIjoiY29uZmlndXJhdGlvbi9hdXRoLWNvbmZpZ3VyYXRpb24uanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
