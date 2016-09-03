import {LogManager} from 'aurelia-framework'
import {ConsoleAppender} from 'aurelia-logging-console';
import authConfig from 'configuration/auth-configuration';
import {AuthService} from 'aurelia-authentication';

LogManager.addAppender(new ConsoleAppender());
LogManager.setLevel(LogManager.logLevel.error);

export function configure(aurelia){

    let apiEndpoint = window.location.hostname == "localhost" 
            ? "http://localhost:35923"
            : "http://orgcompanyservice.azurewebsites.net";

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

        console.log("once?")
        var auth = aurelia.container.get(AuthService);
        let root = auth.isAuthenticated() ? 'main/init' : 'account/login';

        if(auth.isAuthenticated())
            auth.getMe().then(profile => {
                sessionStorage.setItem("profile", JSON.stringify(profile));
            })

        a.setRoot(root, document.body);
        
    })

}