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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBUU8sYUFBUyxTQUFULENBQW1CLE9BQW5CLEVBQTJCOztBQUU5QixZQUFJLGNBQWMsT0FBTyxRQUFQLENBQWdCLFFBQWhCLElBQTRCLFdBQTVCLEdBQ1Isd0JBRFEsR0FFUiw0Q0FGVjs7QUFJQSxnQkFBUSxHQUFSLENBQVkscUJBQVo7QUFDQSxnQkFBUSxHQUFSLENBQVksTUFBWixDQUFtQixhQUFuQixFQUFrQyxxQkFBYTtBQUFFLHNCQUFVLGdCQUFWLENBQTJCLEtBQTNCLEVBQWtDLFdBQWxDLEVBQStDLGtCQUEvQyxDQUFrRSxLQUFsRTtBQUEyRSxTQUE1SDtBQUNBLGdCQUFRLEdBQVIsQ0FBWSxNQUFaLENBQW1CLHdCQUFuQixFQUE2QyxzQkFBYztBQUFFLHVCQUFXLFNBQVgsQ0FBcUIsVUFBckI7QUFBa0MsU0FBL0Y7O0FBRUEsZ0JBQVEsR0FBUixDQUFZLE1BQVosQ0FBbUIsd0JBQW5COztBQUVBLGdCQUFRLEdBQVIsQ0FBWSxNQUFaLENBQW1CLFdBQW5CO0FBQ0EsZ0JBQVEsR0FBUixDQUFZLE1BQVosQ0FBbUIsb0JBQW5CO0FBQ0EsZ0JBQVEsR0FBUixDQUFZLE1BQVosQ0FBbUIsb0JBQW5CO0FBQ0EsZ0JBQVEsR0FBUixDQUFZLE9BQVosQ0FBb0Isb0NBQXBCOztBQUVBLGdCQUFRLEtBQVIsR0FBZ0IsSUFBaEIsQ0FBcUIsYUFDckI7QUFDSSxnQkFBSSxPQUFPLFFBQVEsU0FBUixDQUFrQixHQUFsQixDQUFzQixXQUF0QixDQUFYO0FBQ0EsZ0JBQUksT0FBTyxLQUFLLGVBQUwsS0FBeUIsV0FBekIsR0FBdUMsZUFBbEQ7O0FBRUEsZ0JBQUcsS0FBSyxlQUFMLEVBQUgsRUFDSSxLQUFLLEtBQUwsR0FBYSxJQUFiLENBQWtCLG1CQUFXO0FBQ3pCLCtCQUFlLE9BQWYsQ0FBdUIsU0FBdkIsRUFBa0MsS0FBSyxTQUFMLENBQWUsT0FBZixDQUFsQztBQUNILGFBRkQ7O0FBSUosY0FBRSxPQUFGLENBQVUsSUFBVixFQUFnQixTQUFTLElBQXpCO0FBRUgsU0FaRDtBQWNIOzt5QkEvQmUsUzs7OztBQVJSLHNCLHFCQUFBLFU7O0FBQ0EsMkIsMEJBQUEsZTs7QUFDRCxzQjs7QUFDQyx1QiwwQkFBQSxXOzs7O0FBRVIsdUJBQVcsV0FBWCxDQUF1QixJQUFJLGVBQUosRUFBdkI7QUFDQSx1QkFBVyxRQUFYLENBQW9CLFdBQVcsUUFBWCxDQUFvQixLQUF4QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlUm9vdCI6Ii9zcmMifQ==
