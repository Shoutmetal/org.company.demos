export default {
   
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

    // Refresh Token Options
    // =====================

    // The API endpoint to which refreshToken requests are sent. null = loginUrl
    refreshTokenUrl: null,

    // Option to turn refresh tokens On/Off
    useRefreshToken: true,
    // The option to enable/disable the automatic refresh of Auth tokens using Refresh Tokens
    autoUpdateToken: false,
    // Oauth Client Id
    clientId: false,
    // The the property from which to get the refresh token after a successful token refresh
    refreshTokenProp: 'refresh_token',

    expiredReload: 0,

    // If the property defined by `refreshTokenProp` is an object:
    // -----------------------------------------------------------

    // This is the property from which to get the token `{ "refreshTokenProp": { "refreshTokenName" : '...' } }`
    refreshTokenName: 'token',
    // This allows the refresh token to be a further object deeper `{ "refreshTokenProp": { "refreshTokenRoot" : { "refreshTokenName" : '...' } } }`
    refreshTokenRoot: false,
    // Whether to enable the fetch interceptor which automatically adds the authentication headers
    // (or not... e.g. if using a session based API or you want to override the default behaviour)
    httpInterceptor: true,
    // For OAuth only: Tell the API whether or not to include token cookies in the response (for session based APIs)
    withCredentials : true,
    // Controls how the popup is shown for different devices (Options: 'browser' or 'mobile')
    platform : 'browser',
    // Determines the `window` property name upon which aurelia-authentication data is stored (Default: `window.localStorage`)
    storage : 'sessionStorage',
    // The key used for storing the authentication response locally
    storageKey : 'aurelia_authentication',

    providers: {
        google: {
                url: 'google',
                clientId: '357599867782-bn791ib3acfotv7c9vch5hgeujgk75p8.apps.googleusercontent.com',
                redirectUri: '/'
        },
        facebook:{
                url: 'facebook',
                clientId: '1465278217541708498'
        }
    }
}