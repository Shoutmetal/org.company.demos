'use strict';

System.register(['aurelia-framework', 'aurelia-logging-console', 'configuration/auth-configuration', 'aurelia-authentication'], function (_export, _context) {
    "use strict";

    var LogManager, ConsoleAppender, authConfig, AuthService;
    function configure(aurelia) {

        var apiEndpoint = window.location.hostname === "localhost" ? "http://localhost:35923" : "http://orgcompanyservice.azurewebsites.net";

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
            var authService = aurelia.container.get(AuthService);

            if (authService.isAuthenticated()) authService.getMe().then(function (profile) {
                sessionStorage.setItem("profile", JSON.stringify(profile));

                a.setRoot('main/init', document.body);
            });else a.setRoot('account/login', document.body);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiY29uZmlndXJlIiwiYXVyZWxpYSIsImFwaUVuZHBvaW50Iiwid2luZG93IiwibG9jYXRpb24iLCJob3N0bmFtZSIsInVzZSIsInN0YW5kYXJkQ29uZmlndXJhdGlvbiIsInBsdWdpbiIsInJlZ2lzdGVyRW5kcG9pbnQiLCJzZXREZWZhdWx0RW5kcG9pbnQiLCJiYXNlQ29uZmlnIiwiYXV0aENvbmZpZyIsImZlYXR1cmUiLCJzdGFydCIsInRoZW4iLCJhdXRoU2VydmljZSIsImNvbnRhaW5lciIsImdldCIsIkF1dGhTZXJ2aWNlIiwiaXNBdXRoZW50aWNhdGVkIiwiZ2V0TWUiLCJzZXNzaW9uU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwicHJvZmlsZSIsImEiLCJzZXRSb290IiwiZG9jdW1lbnQiLCJib2R5IiwiTG9nTWFuYWdlciIsIkNvbnNvbGVBcHBlbmRlciIsImFkZEFwcGVuZGVyIiwic2V0TGV2ZWwiLCJsb2dMZXZlbCIsImVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFRTyxhQUFTQSxTQUFULENBQW1CQyxPQUFuQixFQUEyQjs7QUFFOUIsWUFBSUMsY0FBY0MsT0FBT0MsUUFBUCxDQUFnQkMsUUFBaEIsS0FBNkIsV0FBN0IsR0FBMkMsd0JBQTNDLEdBQXNFLDRDQUF4Rjs7QUFFQUosZ0JBQVFLLEdBQVIsQ0FBWUMscUJBQVo7QUFDQU4sZ0JBQVFLLEdBQVIsQ0FBWUUsTUFBWixDQUFtQixhQUFuQixFQUFrQyxxQkFBYTtBQUFFUixzQkFBVVMsZ0JBQVYsQ0FBMkIsS0FBM0IsRUFBa0NQLFdBQWxDLEVBQStDUSxrQkFBL0MsQ0FBa0UsS0FBbEU7QUFBMkUsU0FBNUg7QUFDQVQsZ0JBQVFLLEdBQVIsQ0FBWUUsTUFBWixDQUFtQix3QkFBbkIsRUFBNkMsc0JBQWM7QUFBRUcsdUJBQVdYLFNBQVgsQ0FBcUJZLFVBQXJCO0FBQWtDLFNBQS9GO0FBQ0FYLGdCQUFRSyxHQUFSLENBQVlFLE1BQVosQ0FBbUIsd0JBQW5COztBQUVBUCxnQkFBUUssR0FBUixDQUFZRSxNQUFaLENBQW1CLFdBQW5CO0FBQ0FQLGdCQUFRSyxHQUFSLENBQVlFLE1BQVosQ0FBbUIsb0JBQW5CO0FBQ0FQLGdCQUFRSyxHQUFSLENBQVlFLE1BQVosQ0FBbUIsb0JBQW5CO0FBQ0FQLGdCQUFRSyxHQUFSLENBQVlPLE9BQVosQ0FBb0Isb0NBQXBCOztBQUVBWixnQkFBUWEsS0FBUixHQUFnQkMsSUFBaEIsQ0FBcUIsYUFDckI7QUFDSSxnQkFBSUMsY0FBY2YsUUFBUWdCLFNBQVIsQ0FBa0JDLEdBQWxCLENBQXNCQyxXQUF0QixDQUFsQjs7QUFFQSxnQkFBR0gsWUFBWUksZUFBWixFQUFILEVBQ0lKLFlBQVlLLEtBQVosR0FBb0JOLElBQXBCLENBQXlCLG1CQUFXO0FBQ2hDTywrQkFBZUMsT0FBZixDQUF1QixTQUF2QixFQUFrQ0MsS0FBS0MsU0FBTCxDQUFlQyxPQUFmLENBQWxDOztBQUVBQyxrQkFBRUMsT0FBRixDQUFVLFdBQVYsRUFBdUJDLFNBQVNDLElBQWhDO0FBQ0gsYUFKRCxFQURKLEtBT0lILEVBQUVDLE9BQUYsQ0FBVSxlQUFWLEVBQTJCQyxTQUFTQyxJQUFwQztBQUVQLFNBYkQ7QUFlSDs7eUJBN0JlOUIsUzs7OztBQVJSK0Isc0IscUJBQUFBLFU7O0FBQ0FDLDJCLDBCQUFBQSxlOztBQUNEcEIsc0I7O0FBQ0NPLHVCLDBCQUFBQSxXOzs7O0FBRVJZLHVCQUFXRSxXQUFYLENBQXVCLElBQUlELGVBQUosRUFBdkI7QUFDQUQsdUJBQVdHLFFBQVgsQ0FBb0JILFdBQVdJLFFBQVgsQ0FBb0JDLEtBQXhDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
