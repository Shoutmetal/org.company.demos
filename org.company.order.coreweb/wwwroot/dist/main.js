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
            var root = authService.isAuthenticated() ? 'main/init' : 'account/login';

            if (authService.isAuthenticated()) {

                authService.getMe().then(function (profile) {
                    sessionStorage.setItem("profile", JSON.stringify(profile));
                });
            }

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiY29uZmlndXJlIiwiYXVyZWxpYSIsImFwaUVuZHBvaW50Iiwid2luZG93IiwibG9jYXRpb24iLCJob3N0bmFtZSIsInVzZSIsInN0YW5kYXJkQ29uZmlndXJhdGlvbiIsInBsdWdpbiIsInJlZ2lzdGVyRW5kcG9pbnQiLCJzZXREZWZhdWx0RW5kcG9pbnQiLCJiYXNlQ29uZmlnIiwiYXV0aENvbmZpZyIsImZlYXR1cmUiLCJzdGFydCIsInRoZW4iLCJhdXRoU2VydmljZSIsImNvbnRhaW5lciIsImdldCIsIkF1dGhTZXJ2aWNlIiwicm9vdCIsImlzQXV0aGVudGljYXRlZCIsImdldE1lIiwic2Vzc2lvblN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsInByb2ZpbGUiLCJhIiwic2V0Um9vdCIsImRvY3VtZW50IiwiYm9keSIsIkxvZ01hbmFnZXIiLCJDb25zb2xlQXBwZW5kZXIiLCJhZGRBcHBlbmRlciIsInNldExldmVsIiwibG9nTGV2ZWwiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBUU8sYUFBU0EsU0FBVCxDQUFtQkMsT0FBbkIsRUFBMkI7O0FBRTlCLFlBQUlDLGNBQWNDLE9BQU9DLFFBQVAsQ0FBZ0JDLFFBQWhCLEtBQTZCLFdBQTdCLEdBQTJDLHdCQUEzQyxHQUFzRSw0Q0FBeEY7O0FBRUFKLGdCQUFRSyxHQUFSLENBQVlDLHFCQUFaO0FBQ0FOLGdCQUFRSyxHQUFSLENBQVlFLE1BQVosQ0FBbUIsYUFBbkIsRUFBa0MscUJBQWE7QUFBRVIsc0JBQVVTLGdCQUFWLENBQTJCLEtBQTNCLEVBQWtDUCxXQUFsQyxFQUErQ1Esa0JBQS9DLENBQWtFLEtBQWxFO0FBQTJFLFNBQTVIO0FBQ0FULGdCQUFRSyxHQUFSLENBQVlFLE1BQVosQ0FBbUIsd0JBQW5CLEVBQTZDLHNCQUFjO0FBQUVHLHVCQUFXWCxTQUFYLENBQXFCWSxVQUFyQjtBQUFrQyxTQUEvRjtBQUNBWCxnQkFBUUssR0FBUixDQUFZRSxNQUFaLENBQW1CLHdCQUFuQjs7QUFFQVAsZ0JBQVFLLEdBQVIsQ0FBWUUsTUFBWixDQUFtQixXQUFuQjtBQUNBUCxnQkFBUUssR0FBUixDQUFZRSxNQUFaLENBQW1CLG9CQUFuQjtBQUNBUCxnQkFBUUssR0FBUixDQUFZRSxNQUFaLENBQW1CLG9CQUFuQjtBQUNBUCxnQkFBUUssR0FBUixDQUFZTyxPQUFaLENBQW9CLG9DQUFwQjs7QUFFQVosZ0JBQVFhLEtBQVIsR0FBZ0JDLElBQWhCLENBQXFCLGFBQ3JCO0FBQ0ksZ0JBQUlDLGNBQWNmLFFBQVFnQixTQUFSLENBQWtCQyxHQUFsQixDQUFzQkMsV0FBdEIsQ0FBbEI7QUFDQSxnQkFBSUMsT0FBT0osWUFBWUssZUFBWixLQUFnQyxXQUFoQyxHQUE4QyxlQUF6RDs7QUFFQSxnQkFBR0wsWUFBWUssZUFBWixFQUFILEVBQWlDOztBQUU3QkwsNEJBQVlNLEtBQVosR0FBb0JQLElBQXBCLENBQXlCLG1CQUFXO0FBQ2hDUSxtQ0FBZUMsT0FBZixDQUF1QixTQUF2QixFQUFrQ0MsS0FBS0MsU0FBTCxDQUFlQyxPQUFmLENBQWxDO0FBQ0gsaUJBRkQ7QUFHSDs7QUFFREMsY0FBRUMsT0FBRixDQUFVVCxJQUFWLEVBQWdCVSxTQUFTQyxJQUF6QjtBQUVILFNBZEQ7QUFnQkg7O3lCQTlCZS9CLFM7Ozs7QUFSUmdDLHNCLHFCQUFBQSxVOztBQUNBQywyQiwwQkFBQUEsZTs7QUFDRHJCLHNCOztBQUNDTyx1QiwwQkFBQUEsVzs7OztBQUVSYSx1QkFBV0UsV0FBWCxDQUF1QixJQUFJRCxlQUFKLEVBQXZCO0FBQ0FELHVCQUFXRyxRQUFYLENBQW9CSCxXQUFXSSxRQUFYLENBQW9CQyxLQUF4QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlUm9vdCI6Ii9zcmMifQ==
