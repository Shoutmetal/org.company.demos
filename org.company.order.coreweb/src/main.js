import {LogManager} from 'aurelia-framework'
import {ConsoleAppender} from 'aurelia-logging-console';
import authConfig from 'configuration/auth-configuration';
import {AuthService} from 'aurelia-authentication';
import {ServiceRefreshToken} from 'services/service-refresh-token'
import {ServiceEventListener} from 'services/service-event-listener'

LogManager.addAppender(new ConsoleAppender());
LogManager.setLevel(LogManager.logLevel.error);

export function configure(aurelia){

    let apiEndpoint = window.location.hostname == "localhost" ? "http://localhost:35923" : "http://orgcompanyservice.azurewebsites.net";

    aurelia.use.standardConfiguration();
    aurelia.use.plugin('aurelia-api', configure => { configure.registerEndpoint('api', apiEndpoint).setDefaultEndpoint('api'); });
    aurelia.use.plugin('aurelia-authentication', baseConfig => { baseConfig.configure(authConfig) });
    aurelia.use.plugin('aurelia-binding-loader');
   
    aurelia.use.plugin('resources');
    aurelia.use.plugin('aurelia-validation');
    aurelia.use.plugin('aurelia-validatejs');
    aurelia.use.feature('configuration/bootstrap-validation');
 
    aurelia.start().then(a => 
    {
        let authService = aurelia.container.get(AuthService);
        let root = authService.isAuthenticated() ? 'main/init' : 'account/login';

        if(authService.isAuthenticated()){

            authService.getMe().then(profile => {
                sessionStorage.setItem("profile", JSON.stringify(profile));
            });

            let serviceEventListener = aurelia.container.get(ServiceEventListener);
            let serviceRefreshToken = aurelia.container.get(ServiceRefreshToken);

            let auth_object = authService.authentication.getResponseObject();

            serviceRefreshToken.configure({
                expiresIn : (auth_object.expires_in-5)
            });

            serviceEventListener.configure({
                expiresIn : (auth_object.expires_in-10)
            });

            serviceRefreshToken.start();
            serviceEventListener.start();
        }

        a.setRoot(root, document.body);
        
    })

}