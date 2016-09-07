'use strict';

System.register(['aurelia-framework', 'aurelia-logging-console', 'configuration/auth-configuration', 'aurelia-authentication', 'services/service-refresh-token', 'services/service-event-listener'], function (_export, _context) {
    "use strict";

    var LogManager, ConsoleAppender, authConfig, AuthService, ServiceRefreshToken, ServiceEventListener;
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
            var authService = aurelia.container.get(AuthService);
            var root = authService.isAuthenticated() ? 'main/init' : 'account/login';

            if (authService.isAuthenticated()) {

                authService.getMe().then(function (profile) {
                    sessionStorage.setItem("profile", JSON.stringify(profile));
                });

                var serviceEventListener = aurelia.container.get(ServiceEventListener);
                var serviceRefreshToken = aurelia.container.get(ServiceRefreshToken);

                var auth_object = authService.authentication.getResponseObject();

                serviceRefreshToken.configure({
                    expiresIn: auth_object.expires_in - 5
                });

                serviceEventListener.configure({
                    expiresIn: auth_object.expires_in - 10
                });

                serviceRefreshToken.start();
                serviceEventListener.start();
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
        }, function (_servicesServiceRefreshToken) {
            ServiceRefreshToken = _servicesServiceRefreshToken.ServiceRefreshToken;
        }, function (_servicesServiceEventListener) {
            ServiceEventListener = _servicesServiceEventListener.ServiceEventListener;
        }],
        execute: function () {

            LogManager.addAppender(new ConsoleAppender());
            LogManager.setLevel(LogManager.logLevel.error);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiY29uZmlndXJlIiwiYXVyZWxpYSIsImFwaUVuZHBvaW50Iiwid2luZG93IiwibG9jYXRpb24iLCJob3N0bmFtZSIsInVzZSIsInN0YW5kYXJkQ29uZmlndXJhdGlvbiIsInBsdWdpbiIsInJlZ2lzdGVyRW5kcG9pbnQiLCJzZXREZWZhdWx0RW5kcG9pbnQiLCJiYXNlQ29uZmlnIiwiYXV0aENvbmZpZyIsImZlYXR1cmUiLCJzdGFydCIsInRoZW4iLCJhdXRoU2VydmljZSIsImNvbnRhaW5lciIsImdldCIsIkF1dGhTZXJ2aWNlIiwicm9vdCIsImlzQXV0aGVudGljYXRlZCIsImdldE1lIiwic2Vzc2lvblN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsInByb2ZpbGUiLCJzZXJ2aWNlRXZlbnRMaXN0ZW5lciIsIlNlcnZpY2VFdmVudExpc3RlbmVyIiwic2VydmljZVJlZnJlc2hUb2tlbiIsIlNlcnZpY2VSZWZyZXNoVG9rZW4iLCJhdXRoX29iamVjdCIsImF1dGhlbnRpY2F0aW9uIiwiZ2V0UmVzcG9uc2VPYmplY3QiLCJleHBpcmVzSW4iLCJleHBpcmVzX2luIiwiYSIsInNldFJvb3QiLCJkb2N1bWVudCIsImJvZHkiLCJMb2dNYW5hZ2VyIiwiQ29uc29sZUFwcGVuZGVyIiwiYWRkQXBwZW5kZXIiLCJzZXRMZXZlbCIsImxvZ0xldmVsIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7OztBQVVPLGFBQVNBLFNBQVQsQ0FBbUJDLE9BQW5CLEVBQTJCOztBQUU5QixZQUFJQyxjQUFjQyxPQUFPQyxRQUFQLENBQWdCQyxRQUFoQixJQUE0QixXQUE1QixHQUEwQyx3QkFBMUMsR0FBcUUsNENBQXZGOztBQUVBSixnQkFBUUssR0FBUixDQUFZQyxxQkFBWjtBQUNBTixnQkFBUUssR0FBUixDQUFZRSxNQUFaLENBQW1CLGFBQW5CLEVBQWtDLHFCQUFhO0FBQUVSLHNCQUFVUyxnQkFBVixDQUEyQixLQUEzQixFQUFrQ1AsV0FBbEMsRUFBK0NRLGtCQUEvQyxDQUFrRSxLQUFsRTtBQUEyRSxTQUE1SDtBQUNBVCxnQkFBUUssR0FBUixDQUFZRSxNQUFaLENBQW1CLHdCQUFuQixFQUE2QyxzQkFBYztBQUFFRyx1QkFBV1gsU0FBWCxDQUFxQlksVUFBckI7QUFBa0MsU0FBL0Y7QUFDQVgsZ0JBQVFLLEdBQVIsQ0FBWUUsTUFBWixDQUFtQix3QkFBbkI7O0FBRUFQLGdCQUFRSyxHQUFSLENBQVlFLE1BQVosQ0FBbUIsV0FBbkI7QUFDQVAsZ0JBQVFLLEdBQVIsQ0FBWUUsTUFBWixDQUFtQixvQkFBbkI7QUFDQVAsZ0JBQVFLLEdBQVIsQ0FBWUUsTUFBWixDQUFtQixvQkFBbkI7QUFDQVAsZ0JBQVFLLEdBQVIsQ0FBWU8sT0FBWixDQUFvQixvQ0FBcEI7O0FBRUFaLGdCQUFRYSxLQUFSLEdBQWdCQyxJQUFoQixDQUFxQixhQUNyQjtBQUNJLGdCQUFJQyxjQUFjZixRQUFRZ0IsU0FBUixDQUFrQkMsR0FBbEIsQ0FBc0JDLFdBQXRCLENBQWxCO0FBQ0EsZ0JBQUlDLE9BQU9KLFlBQVlLLGVBQVosS0FBZ0MsV0FBaEMsR0FBOEMsZUFBekQ7O0FBRUEsZ0JBQUdMLFlBQVlLLGVBQVosRUFBSCxFQUFpQzs7QUFFN0JMLDRCQUFZTSxLQUFaLEdBQW9CUCxJQUFwQixDQUF5QixtQkFBVztBQUNoQ1EsbUNBQWVDLE9BQWYsQ0FBdUIsU0FBdkIsRUFBa0NDLEtBQUtDLFNBQUwsQ0FBZUMsT0FBZixDQUFsQztBQUNILGlCQUZEOztBQUlBLG9CQUFJQyx1QkFBdUIzQixRQUFRZ0IsU0FBUixDQUFrQkMsR0FBbEIsQ0FBc0JXLG9CQUF0QixDQUEzQjtBQUNBLG9CQUFJQyxzQkFBc0I3QixRQUFRZ0IsU0FBUixDQUFrQkMsR0FBbEIsQ0FBc0JhLG1CQUF0QixDQUExQjs7QUFFQSxvQkFBSUMsY0FBY2hCLFlBQVlpQixjQUFaLENBQTJCQyxpQkFBM0IsRUFBbEI7O0FBRUFKLG9DQUFvQjlCLFNBQXBCLENBQThCO0FBQzFCbUMsK0JBQWFILFlBQVlJLFVBQVosR0FBdUI7QUFEVixpQkFBOUI7O0FBSUFSLHFDQUFxQjVCLFNBQXJCLENBQStCO0FBQzNCbUMsK0JBQWFILFlBQVlJLFVBQVosR0FBdUI7QUFEVCxpQkFBL0I7O0FBSUFOLG9DQUFvQmhCLEtBQXBCO0FBQ0FjLHFDQUFxQmQsS0FBckI7QUFDSDs7QUFFRHVCLGNBQUVDLE9BQUYsQ0FBVWxCLElBQVYsRUFBZ0JtQixTQUFTQyxJQUF6QjtBQUVILFNBOUJEO0FBZ0NIOzt5QkE5Q2V4QyxTOzs7O0FBVlJ5QyxzQixxQkFBQUEsVTs7QUFDQUMsMkIsMEJBQUFBLGU7O0FBQ0Q5QixzQjs7QUFDQ08sdUIsMEJBQUFBLFc7O0FBQ0FZLCtCLGdDQUFBQSxtQjs7QUFDQUYsZ0MsaUNBQUFBLG9COzs7O0FBRVJZLHVCQUFXRSxXQUFYLENBQXVCLElBQUlELGVBQUosRUFBdkI7QUFDQUQsdUJBQVdHLFFBQVgsQ0FBb0JILFdBQVdJLFFBQVgsQ0FBb0JDLEtBQXhDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
