import {LogManager} from 'aurelia-framework'
import {ConsoleAppender} from 'aurelia-logging-console'

LogManager.addAppender(new ConsoleAppender());
LogManager.setLevel(LogManager.logLevel.error);

export function configure(aurelia){

    aurelia.use.standardConfiguration();
    aurelia.use.plugin('aurelia-binding-loader');
    aurelia.start().then(a => a.setRoot("home/menu", document.body))

}