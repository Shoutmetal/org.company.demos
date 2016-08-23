'use strict';

System.register([], function (_export, _context) {
    "use strict";

    var configForDevelopment, configForProduction, config;
    return {
        setters: [],
        execute: function () {
            configForDevelopment = {
                loginRedirect: '/#welcome',
                providers: {

                    identSrv: {
                        name: 'identSrv',
                        url: '/auth/identSrv',
                        authorizationEndpoint: 'http://localhost:20763/connect/authorize',
                        redirectUri: window.location.origin || window.location.protocol + '//' + window.location.host,
                        scope: ['profile', 'openid'],

                        responseType: 'code',

                        scopePrefix: '',
                        scopeDelimiter: ' ',
                        requiredUrlParams: ['scope', 'nonce'],
                        optionalUrlParams: ['display', 'state'],
                        display: 'popup',
                        type: '2.0',
                        clientId: 'jsclient',

                        popupOptions: { width: 452, height: 633 }
                    },

                    google: {
                        clientId: '239531826023-ibk10mb9p7ull54j55a61og5lvnjrff6.apps.googleusercontent.com',
                        state: function state() {
                            var val = ((Date.now() + Math.random()) * Math.random()).toString().replace(".", "");
                            return encodeURIComponent(val);
                        }
                    },

                    linkedin: {
                        clientId: '778mif8zyqbei7'
                    },
                    facebook: {
                        clientId: '1452782111708498'
                    }
                }
            };
            configForProduction = {
                providers: {
                    google: {
                        clientId: '239531826023-3ludu3934rmcra3oqscc1gid3l9o497i.apps.googleusercontent.com'
                    },

                    linkedin: {
                        clientId: '7561959vdub4x1'
                    },
                    facebook: {
                        clientId: '1653908914832509'
                    }

                }
            };

            if (window.location.hostname === 'localhost') {
                config = configForDevelopment;
            } else {
                config = configForProduction;
            }

            _export('default', config);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZ3VyYXRpb24vYXV0aC1jb25maWd1cmF0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFJLGdDLEdBQXVCO0FBQ3ZCLCtCQUFlLFdBRFE7QUFFdkIsMkJBQVc7O0FBRVAsOEJBQVc7QUFDUCw4QkFBTSxVQURDO0FBRVAsNkJBQUssZ0JBRkU7QUFHUCwrQ0FBdUIsMENBSGhCO0FBSVAscUNBQWEsT0FBTyxRQUFQLENBQWdCLE1BQWhCLElBQTBCLE9BQU8sUUFBUCxDQUFnQixRQUFoQixHQUEyQixJQUEzQixHQUFrQyxPQUFPLFFBQVAsQ0FBZ0IsSUFKbEY7QUFLUCwrQkFBTyxDQUFDLFNBQUQsRUFBWSxRQUFaLENBTEE7O0FBT1Asc0NBQWMsTUFQUDs7QUFVUCxxQ0FBYSxFQVZOO0FBV1Asd0NBQWdCLEdBWFQ7QUFZUCwyQ0FBbUIsQ0FBQyxPQUFELEVBQVUsT0FBVixDQVpaO0FBYVAsMkNBQW1CLENBQUMsU0FBRCxFQUFZLE9BQVosQ0FiWjtBQWNQLGlDQUFTLE9BZEY7QUFlUCw4QkFBTSxLQWZDO0FBZ0JQLGtDQUFVLFVBaEJIOztBQWtCUCxzQ0FBYyxFQUFFLE9BQU8sR0FBVCxFQUFjLFFBQVEsR0FBdEI7QUFsQlAscUJBRko7O0FBdUJQLDRCQUFRO0FBRUosa0NBQVUsMEVBRk47QUFHSiwrQkFBTyxpQkFBVTtBQUNiLGdDQUFJLE1BQU0sQ0FBQyxDQUFDLEtBQUssR0FBTCxLQUFhLEtBQUssTUFBTCxFQUFkLElBQStCLEtBQUssTUFBTCxFQUFoQyxFQUErQyxRQUEvQyxHQUEwRCxPQUExRCxDQUFrRSxHQUFsRSxFQUF1RSxFQUF2RSxDQUFWO0FBQ0EsbUNBQU8sbUJBQW1CLEdBQW5CLENBQVA7QUFDSDtBQU5HLHFCQXZCRDs7QUFnQ1AsOEJBQVM7QUFDTCxrQ0FBUztBQURKLHFCQWhDRjtBQW1DUCw4QkFBUztBQUNMLGtDQUFTO0FBREo7QUFuQ0Y7QUFGWSxhO0FBMkN2QiwrQixHQUFzQjtBQUN0QiwyQkFBVztBQUNQLDRCQUFRO0FBQ0osa0NBQVU7QUFETixxQkFERDs7QUFLUCw4QkFBUztBQUNMLGtDQUFTO0FBREoscUJBTEY7QUFRUCw4QkFBUztBQUNMLGtDQUFTO0FBREo7O0FBUkY7QUFEVyxhOztBQWdCMUIsZ0JBQUksT0FBTyxRQUFQLENBQWdCLFFBQWhCLEtBQTJCLFdBQS9CLEVBQTRDO0FBQ3hDLHlCQUFTLG9CQUFUO0FBQ0gsYUFGRCxNQUdJO0FBQ0EseUJBQVMsbUJBQVQ7QUFDSDs7K0JBR2MsTSIsImZpbGUiOiJjb25maWd1cmF0aW9uL2F1dGgtY29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
