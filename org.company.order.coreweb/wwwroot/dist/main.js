'use strict';

System.register(['aurelia-framework', 'aurelia-logging-console', 'aurelia-configuration', 'configuration/auth-configuration', 'aurelia-authentication'], function (_export, _context) {
    "use strict";

    var LogManager, ConsoleAppender, Configure, authConfig, AuthService;
    function configure(aurelia) {

        var apiEndpoint = window.location.hostname == "localhost" ? "http://localhost:35923" : "http://orgcompanyservice.azurewebsites.net";

        aurelia.use.standardConfiguration();
        aurelia.use.plugin('aurelia-api', function (configure) {
            configure.registerEndpoint('api', apiEndpoint).setDefaultEndpoint('api');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBU08sYUFBUyxTQUFULENBQW1CLE9BQW5CLEVBQTJCOztBQUU5QixZQUFJLGNBQWMsT0FBTyxRQUFQLENBQWdCLFFBQWhCLElBQTRCLFdBQTVCLEdBQ1Isd0JBRFEsR0FFUiw0Q0FGVjs7QUFJQSxnQkFBUSxHQUFSLENBQVkscUJBQVo7QUFDQSxnQkFBUSxHQUFSLENBQVksTUFBWixDQUFtQixhQUFuQixFQUFrQyxxQkFBYTtBQUFFLHNCQUFVLGdCQUFWLENBQTJCLEtBQTNCLEVBQWtDLFdBQWxDLEVBQStDLGtCQUEvQyxDQUFrRSxLQUFsRTtBQUEyRSxTQUE1SDtBQUNBLGdCQUFRLEdBQVIsQ0FBWSxNQUFaLENBQW1CLHdCQUFuQixFQUE2QyxzQkFBYztBQUFFLHVCQUFXLFNBQVgsQ0FBcUIsVUFBckI7QUFBa0MsU0FBL0Y7O0FBR0EsZ0JBQVEsR0FBUixDQUFZLE1BQVosQ0FBbUIsdUJBQW5CLEVBQTRDLGtCQUFVO0FBQ2xELG1CQUFPLFlBQVAsQ0FBb0IsR0FBcEI7QUFDQSxtQkFBTyxTQUFQLENBQWlCLHVCQUFqQjtBQUNILFNBSEQ7O0FBS0EsZ0JBQVEsR0FBUixDQUFZLE1BQVosQ0FBbUIsd0JBQW5COztBQUVBLGdCQUFRLEdBQVIsQ0FBWSxNQUFaLENBQW1CLFdBQW5CO0FBQ0EsZ0JBQVEsR0FBUixDQUFZLE1BQVosQ0FBbUIsb0JBQW5CO0FBQ0EsZ0JBQVEsR0FBUixDQUFZLE1BQVosQ0FBbUIsb0JBQW5CO0FBQ0EsZ0JBQVEsR0FBUixDQUFZLE9BQVosQ0FBb0Isb0NBQXBCOztBQUVBLGdCQUFRLEtBQVIsR0FBZ0IsSUFBaEIsQ0FBcUIsYUFDckI7QUFDSSxnQkFBSSxPQUFPLFFBQVEsU0FBUixDQUFrQixHQUFsQixDQUFzQixXQUF0QixDQUFYO0FBQ0EsZ0JBQUksT0FBTyxLQUFLLGVBQUwsS0FBeUIsV0FBekIsR0FBdUMsZUFBbEQ7QUFDQSxjQUFFLE9BQUYsQ0FBVSxJQUFWLEVBQWdCLFNBQVMsSUFBekI7QUFFSCxTQU5EO0FBUUg7O3lCQS9CZSxTOzs7O0FBVFIsc0IscUJBQUEsVTs7QUFDQSwyQiwwQkFBQSxlOztBQUNBLHFCLHlCQUFBLFM7O0FBQ0Qsc0I7O0FBQ0MsdUIsMEJBQUEsVzs7OztBQUVSLHVCQUFXLFdBQVgsQ0FBdUIsSUFBSSxlQUFKLEVBQXZCO0FBQ0EsdUJBQVcsUUFBWCxDQUFvQixXQUFXLFFBQVgsQ0FBb0IsS0FBeEMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
