import {LogManager} from 'aurelia-framework'
import {ConsoleAppender} from 'aurelia-logging-console';
import {Configure} from "aurelia-configuration";
import authConfig from 'configuration/auth-configuration';
import {AuthService} from 'aurelia-authentication';

LogManager.addAppender(new ConsoleAppender());
LogManager.setLevel(LogManager.logLevel.error);

export function configure(aurelia){
    
    aurelia.use.standardConfiguration();
    aurelia.use.plugin('aurelia-api', configure => { configure.registerEndpoint('api', 'http://localhost:35923').setDefaultEndpoint('api'); });
    aurelia.use.plugin('aurelia-authentication', baseConfig => { baseConfig.configure(authConfig) });


    aurelia.use.plugin('aurelia-configuration', config => {
        config.setDirectory('/'); 
        config.setConfig('global-variables.json');
    });

    
    aurelia.use.plugin('aurelia-binding-loader');
   
    aurelia.use.plugin('resources');
    aurelia.use.plugin('aurelia-validation');
    aurelia.use.plugin('aurelia-validatejs');
    aurelia.use.feature('configuration/bootstrap-validation');
 
    aurelia.start().then(a => 
    {
        var auth = aurelia.container.get(AuthService);
        let root = auth.isAuthenticated() ? 'main/init' : 'account/login';
        a.setRoot(root, document.body);
        
    })

}