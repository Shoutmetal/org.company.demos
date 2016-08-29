'use strict';

System.register(['aurelia-framework', 'aurelia-logging-console', 'aurelia-configuration', 'configuration/auth-configuration', 'aurelia-authentication'], function (_export, _context) {
    "use strict";

    var LogManager, ConsoleAppender, Configure, authConfig, AuthService;
    function configure(aurelia) {

        aurelia.use.standardConfiguration();
        aurelia.use.plugin('aurelia-api', function (configure) {
            configure.registerEndpoint('api', 'http://localhost:35923').setDefaultEndpoint('api');
        });
        aurelia.use.plugin('aurelia-authentication', function (baseConfig) {
            baseConfig.configure(authConfig);
        });

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
            var auth = aurelia.container.get(AuthService);
            var root = auth.isAuthenticated() ? 'main/init' : 'account/login';
            a.setRoot(root, document.body);
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
        }, function (_configurationAuthConfiguration) {
            authConfig = _configurationAuthConfiguration.default;
        }, function (_aureliaAuthentication) {
            AuthService = _aureliaAuthentication.AuthService;
        }],
        execute: function () {

            LogManager.addAppender(new ConsoleAppender());
            LogManager.setLevel(LogManager.logLevel.error);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBU08sYUFBUyxTQUFULENBQW1CLE9BQW5CLEVBQTJCOztBQUU5QixnQkFBUSxHQUFSLENBQVkscUJBQVo7QUFDQSxnQkFBUSxHQUFSLENBQVksTUFBWixDQUFtQixhQUFuQixFQUFrQyxxQkFBYTtBQUFFLHNCQUFVLGdCQUFWLENBQTJCLEtBQTNCLEVBQWtDLHdCQUFsQyxFQUE0RCxrQkFBNUQsQ0FBK0UsS0FBL0U7QUFBd0YsU0FBekk7QUFDQSxnQkFBUSxHQUFSLENBQVksTUFBWixDQUFtQix3QkFBbkIsRUFBNkMsc0JBQWM7QUFBRSx1QkFBVyxTQUFYLENBQXFCLFVBQXJCO0FBQWtDLFNBQS9GOztBQUdBLGdCQUFRLEdBQVIsQ0FBWSxNQUFaLENBQW1CLHVCQUFuQixFQUE0QyxrQkFBVTtBQUNsRCxtQkFBTyxZQUFQLENBQW9CLEdBQXBCO0FBQ0EsbUJBQU8sU0FBUCxDQUFpQix1QkFBakI7QUFDSCxTQUhEOztBQU1BLGdCQUFRLEdBQVIsQ0FBWSxNQUFaLENBQW1CLHdCQUFuQjs7QUFFQSxnQkFBUSxHQUFSLENBQVksTUFBWixDQUFtQixXQUFuQjtBQUNBLGdCQUFRLEdBQVIsQ0FBWSxNQUFaLENBQW1CLG9CQUFuQjtBQUNBLGdCQUFRLEdBQVIsQ0FBWSxNQUFaLENBQW1CLG9CQUFuQjtBQUNBLGdCQUFRLEdBQVIsQ0FBWSxPQUFaLENBQW9CLG9DQUFwQjs7QUFFQSxnQkFBUSxLQUFSLEdBQWdCLElBQWhCLENBQXFCLGFBQ3JCO0FBQ0ksZ0JBQUksT0FBTyxRQUFRLFNBQVIsQ0FBa0IsR0FBbEIsQ0FBc0IsV0FBdEIsQ0FBWDtBQUNBLGdCQUFJLE9BQU8sS0FBSyxlQUFMLEtBQXlCLFdBQXpCLEdBQXVDLGVBQWxEO0FBQ0EsY0FBRSxPQUFGLENBQVUsSUFBVixFQUFnQixTQUFTLElBQXpCO0FBRUgsU0FORDtBQVFIOzt5QkE1QmUsUzs7OztBQVRSLHNCLHFCQUFBLFU7O0FBQ0EsMkIsMEJBQUEsZTs7QUFDQSxxQix5QkFBQSxTOztBQUNELHNCOztBQUNDLHVCLDBCQUFBLFc7Ozs7QUFFUix1QkFBVyxXQUFYLENBQXVCLElBQUksZUFBSixFQUF2QjtBQUNBLHVCQUFXLFFBQVgsQ0FBb0IsV0FBVyxRQUFYLENBQW9CLEtBQXhDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
