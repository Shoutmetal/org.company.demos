import {LogManager} from 'aurelia-framework'
import {ConsoleAppender} from 'aurelia-logging-console';
import {Configure} from "aurelia-configuration";

LogManager.addAppender(new ConsoleAppender());
LogManager.setLevel(LogManager.logLevel.error);

export function configure(aurelia){
    
    aurelia.use.standardConfiguration();
    aurelia.use.plugin('aurelia-configuration', config => {
        config.setDirectory('/'); 
        config.setConfig('global-variables.json');
    });

    aurelia.use.plugin('aurelia-binding-loader');
    aurelia.use.plugin('resources');
    aurelia.use.plugin('aurelia-validation')
    aurelia.use.plugin('aurelia-validatejs')
    aurelia.use.feature('configuration/bootstrap-validation');
 
    aurelia.start().then(a => a.setRoot("main/init", document.body))

}