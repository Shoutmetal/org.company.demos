'use strict';

System.register(['aurelia-framework', 'aurelia-logging-console', 'aurelia-configuration'], function (_export, _context) {
    "use strict";

    var LogManager, ConsoleAppender, Configure;
    function configure(aurelia) {

        aurelia.use.standardConfiguration();
        aurelia.use.plugin('aurelia-configuration', function (config) {
            config.setDirectory('/');
            config.setConfig('global-variables.json');
        });

        aurelia.use.plugin('aurelia-binding-loader');
        aurelia.use.plugin('resources');
        aurelia.use.plugin('aurelia-validation');
        aurelia.use.plugin('aurelia-validatejs');
        aurelia.use.feature('configuration/bootstrap-validation');

        aurelia.start().then(function (a) {
            return a.setRoot("main/init", document.body);
        });
    }

    _export('configure', configure);

    return {
        setters: [function (_aureliaFramework) {
            LogManager = _aureliaFramework.LogManager;
        }, function (_aureliaLoggingConsole) {
            ConsoleAppender = _aureliaLoggingConsole.ConsoleAppender;
        }, function (_aureliaConfiguration) {
            Configure = _aureliaConfiguration.Configure;
        }],
        execute: function () {

            LogManager.addAppender(new ConsoleAppender());
            LogManager.setLevel(LogManager.logLevel.error);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBT08sYUFBUyxTQUFULENBQW1CLE9BQW5CLEVBQTJCOztBQUU5QixnQkFBUSxHQUFSLENBQVkscUJBQVo7QUFDQSxnQkFBUSxHQUFSLENBQVksTUFBWixDQUFtQix1QkFBbkIsRUFBNEMsa0JBQVU7QUFDbEQsbUJBQU8sWUFBUCxDQUFvQixHQUFwQjtBQUNBLG1CQUFPLFNBQVAsQ0FBaUIsdUJBQWpCO0FBQ0gsU0FIRDs7QUFLQSxnQkFBUSxHQUFSLENBQVksTUFBWixDQUFtQix3QkFBbkI7QUFDQSxnQkFBUSxHQUFSLENBQVksTUFBWixDQUFtQixXQUFuQjtBQUNBLGdCQUFRLEdBQVIsQ0FBWSxNQUFaLENBQW1CLG9CQUFuQjtBQUNBLGdCQUFRLEdBQVIsQ0FBWSxNQUFaLENBQW1CLG9CQUFuQjtBQUNBLGdCQUFRLEdBQVIsQ0FBWSxPQUFaLENBQW9CLG9DQUFwQjs7QUFFQSxnQkFBUSxLQUFSLEdBQWdCLElBQWhCLENBQXFCO0FBQUEsbUJBQUssRUFBRSxPQUFGLENBQVUsV0FBVixFQUF1QixTQUFTLElBQWhDLENBQUw7QUFBQSxTQUFyQjtBQUVIOzt5QkFoQmUsUzs7OztBQVBSLHNCLHFCQUFBLFU7O0FBQ0EsMkIsMEJBQUEsZTs7QUFDQSxxQix5QkFBQSxTOzs7O0FBRVIsdUJBQVcsV0FBWCxDQUF1QixJQUFJLGVBQUosRUFBdkI7QUFDQSx1QkFBVyxRQUFYLENBQW9CLFdBQVcsUUFBWCxDQUFvQixLQUF4QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlUm9vdCI6Ii9zcmMifQ==
