'use strict';

System.register(['aurelia-framework', 'aurelia-logging-console', 'configuration/auth-configuration', 'aurelia-authentication'], function (_export, _context) {
    "use strict";

    var LogManager, ConsoleAppender, authConfig, AuthService;
    function configure(aurelia) {

        var apiEndpoint = window.location.hostname == "localhost" ? "http://localhost:35923" : "http://orgcompanyservice.azurewebsites.net";

        aurelia.use.standardConfiguration();
        aurelia.use.plugin('aurelia-api', function (configure) {
            configure.registerEndpoint('api', apiEndpoint).setDefaultEndpoint('api');
        });
        aurelia.use.plugin('aurelia-authentication', function (baseConfig) {
            baseConfig.configure(authConfig);
        });
        aurelia.use.plugin('aurelia-binding-loader');

        aurelia.use.plugin('resources');
        aurelia.use.plugin('aurelia-validation');
        aurelia.use.plugin('aurelia-validatejs');
        aurelia.use.feature('configuration/bootstrap-validation');

        aurelia.start().then(function (a) {
            var auth = aurelia.container.get(AuthService);
            var root = auth.isAuthenticated() ? 'main/init' : 'account/login';

            if (auth.isAuthenticated()) auth.getMe().then(function (profile) {
                sessionStorage.setItem("profile", JSON.stringify(profile));
            });

            a.setRoot(root, document.body);
        });
    }

    _export('configure', configure);

    return {
        setters: [function (_aureliaFramework) {
            LogManager = _aureliaFramework.LogManager;
        }, function (_aureliaLoggingConsole) {
            ConsoleAppender = _aureliaLoggingConsole.ConsoleAppender;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiY29uZmlndXJlIiwiYXVyZWxpYSIsImFwaUVuZHBvaW50Iiwid2luZG93IiwibG9jYXRpb24iLCJob3N0bmFtZSIsInVzZSIsInN0YW5kYXJkQ29uZmlndXJhdGlvbiIsInBsdWdpbiIsInJlZ2lzdGVyRW5kcG9pbnQiLCJzZXREZWZhdWx0RW5kcG9pbnQiLCJiYXNlQ29uZmlnIiwiYXV0aENvbmZpZyIsImZlYXR1cmUiLCJzdGFydCIsInRoZW4iLCJhdXRoIiwiY29udGFpbmVyIiwiZ2V0IiwiQXV0aFNlcnZpY2UiLCJyb290IiwiaXNBdXRoZW50aWNhdGVkIiwiZ2V0TWUiLCJzZXNzaW9uU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwicHJvZmlsZSIsImEiLCJzZXRSb290IiwiZG9jdW1lbnQiLCJib2R5IiwiTG9nTWFuYWdlciIsIkNvbnNvbGVBcHBlbmRlciIsImFkZEFwcGVuZGVyIiwic2V0TGV2ZWwiLCJsb2dMZXZlbCIsImVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFRTyxhQUFTQSxTQUFULENBQW1CQyxPQUFuQixFQUEyQjs7QUFFOUIsWUFBSUMsY0FBY0MsT0FBT0MsUUFBUCxDQUFnQkMsUUFBaEIsSUFBNEIsV0FBNUIsR0FBMEMsd0JBQTFDLEdBQXFFLDRDQUF2Rjs7QUFFQUosZ0JBQVFLLEdBQVIsQ0FBWUMscUJBQVo7QUFDQU4sZ0JBQVFLLEdBQVIsQ0FBWUUsTUFBWixDQUFtQixhQUFuQixFQUFrQyxxQkFBYTtBQUFFUixzQkFBVVMsZ0JBQVYsQ0FBMkIsS0FBM0IsRUFBa0NQLFdBQWxDLEVBQStDUSxrQkFBL0MsQ0FBa0UsS0FBbEU7QUFBMkUsU0FBNUg7QUFDQVQsZ0JBQVFLLEdBQVIsQ0FBWUUsTUFBWixDQUFtQix3QkFBbkIsRUFBNkMsc0JBQWM7QUFBRUcsdUJBQVdYLFNBQVgsQ0FBcUJZLFVBQXJCO0FBQWtDLFNBQS9GO0FBQ0FYLGdCQUFRSyxHQUFSLENBQVlFLE1BQVosQ0FBbUIsd0JBQW5COztBQUVBUCxnQkFBUUssR0FBUixDQUFZRSxNQUFaLENBQW1CLFdBQW5CO0FBQ0FQLGdCQUFRSyxHQUFSLENBQVlFLE1BQVosQ0FBbUIsb0JBQW5CO0FBQ0FQLGdCQUFRSyxHQUFSLENBQVlFLE1BQVosQ0FBbUIsb0JBQW5CO0FBQ0FQLGdCQUFRSyxHQUFSLENBQVlPLE9BQVosQ0FBb0Isb0NBQXBCOztBQUVBWixnQkFBUWEsS0FBUixHQUFnQkMsSUFBaEIsQ0FBcUIsYUFDckI7QUFDSSxnQkFBSUMsT0FBT2YsUUFBUWdCLFNBQVIsQ0FBa0JDLEdBQWxCLENBQXNCQyxXQUF0QixDQUFYO0FBQ0EsZ0JBQUlDLE9BQU9KLEtBQUtLLGVBQUwsS0FBeUIsV0FBekIsR0FBdUMsZUFBbEQ7O0FBRUEsZ0JBQUdMLEtBQUtLLGVBQUwsRUFBSCxFQUNJTCxLQUFLTSxLQUFMLEdBQWFQLElBQWIsQ0FBa0IsbUJBQVc7QUFDekJRLCtCQUFlQyxPQUFmLENBQXVCLFNBQXZCLEVBQWtDQyxLQUFLQyxTQUFMLENBQWVDLE9BQWYsQ0FBbEM7QUFDSCxhQUZEOztBQUlKQyxjQUFFQyxPQUFGLENBQVVULElBQVYsRUFBZ0JVLFNBQVNDLElBQXpCO0FBRUgsU0FaRDtBQWNIOzt5QkE1QmUvQixTOzs7O0FBUlJnQyxzQixxQkFBQUEsVTs7QUFDQUMsMkIsMEJBQUFBLGU7O0FBQ0RyQixzQjs7QUFDQ08sdUIsMEJBQUFBLFc7Ozs7QUFFUmEsdUJBQVdFLFdBQVgsQ0FBdUIsSUFBSUQsZUFBSixFQUF2QjtBQUNBRCx1QkFBV0csUUFBWCxDQUFvQkgsV0FBV0ksUUFBWCxDQUFvQkMsS0FBeEMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
