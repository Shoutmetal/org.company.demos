import {LogManager} from 'aurelia-framework'
import {ConsoleAppender} from 'aurelia-logging-console';
import {Configure} from "aurelia-configuration";

LogManager.addAppender(new ConsoleAppender());
LogManager.setLevel(LogManager.logLevel.error);

export function configure(aurelia){
    
    aurelia.use.standardConfiguration();
    aurelia.use.plugin('aurelia-binding-loader');
    aurelia.use.plugin('aurelia-configuration', config => {
        config.setDirectory('common'); 
        config.setConfig('global-variables.json');
    });

    aurelia.start().then(a => a.setRoot("home/menu", document.body))

}