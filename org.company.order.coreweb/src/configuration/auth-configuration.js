export default {
   
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
        facebook:{
                url: 'facebook',
                clientId: '1465278217541708498'
        }
    }
}