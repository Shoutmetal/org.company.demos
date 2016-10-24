'use strict';

System.register(['services/application-insight', 'aurelia-auth'], function (_export, _context) {
        "use strict";

        var AppInsights, AuthorizeStep, Menu;

        function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                        throw new TypeError("Cannot call a class as a function");
                }
        }

        return {
                setters: [function (_servicesApplicationInsight) {
                        AppInsights = _servicesApplicationInsight.AppInsights;
                }, function (_aureliaAuth) {
                        AuthorizeStep = _aureliaAuth.AuthorizeStep;
                }],
                execute: function () {
                        _export('Menu', Menu = function () {
                                function Menu() {
                                        _classCallCheck(this, Menu);
                                }

                                Menu.prototype.configureRouter = function configureRouter(config, router) {
                                        var _this = this;

                                        config.title = "Demo Architecture";
                                        config.addPipelineStep('authorize', AuthorizeStep);
                                        config.addPipelineStep('modelbind', AppInsights);

                                        var reports = [{ route: "order-report", moduleId: 'reports/order-report', name: "order-report", title: "Order Report", nav: true, icon: "icon-pie-chart", parentName: "reports" }];

                                        var order = [{ route: "order-cart-shop", moduleId: 'order/order-cart-shop', name: "order-cart-shop", title: "Cart Shop", nav: true, icon: "icon-basket", parentName: "order" }, { route: "order-cart-detail", moduleId: 'order/order-cart-detail', name: "order-cart-detail", title: "Cart Detail", nav: true, icon: "icon-bag", parentName: "order" }, { route: "order-checkout", moduleId: 'order/order-checkout', name: "order-checkout", title: "Checkout", nav: true, icon: "icon-check", parentName: "order" }];

                                        var demoInfo = [{ route: "general-information", moduleId: 'demo/general-information', name: "general-information", title: "General Information", nav: true, icon: "icon-paper-plane", parentName: "demo" }, { route: "examples", moduleId: 'demo/examples', name: "examples", title: "Examples", nav: true, icon: "icon-folder", parentName: "demo" }];

                                        var routes = [{ route: "", moduleId: 'home/index', name: "home", title: "Home", nav: true, icon: "icon-home" }, { route: "order", moduleId: 'home/index', name: "order", title: "Order", nav: true, icon: "icon-handbag", hasChilds: true, childs: order }, { route: "reports", moduleId: 'home/index', name: "reports", title: "Reports", nav: true, icon: "icon-chart", hasChilds: true, childs: reports }, { route: "demo", moduleId: 'home/index', name: "demo", title: "About Demo", nav: true, icon: "icon-info", hasChilds: true, childs: demoInfo }];

                                        routes = routes.concat(reports);
                                        routes = routes.concat(order);
                                        routes = routes.concat(demoInfo);
                                        config.map(routes);

                                        this.router = router;

                                        this.router.navigateWithParams = function (routeName, params) {
                                                var routerParams = _this.router.routes.find(function (x) {
                                                        return x.name === routeName;
                                                });
                                                routerParams.data = params;
                                                _this.router.navigate(routeName);
                                        };
                                };

                                return Menu;
                        }());

                        _export('Menu', Menu);
                }
        };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4vaW5pdC5qcyJdLCJuYW1lcyI6WyJBcHBJbnNpZ2h0cyIsIkF1dGhvcml6ZVN0ZXAiLCJNZW51IiwiY29uZmlndXJlUm91dGVyIiwiY29uZmlnIiwicm91dGVyIiwidGl0bGUiLCJhZGRQaXBlbGluZVN0ZXAiLCJyZXBvcnRzIiwicm91dGUiLCJtb2R1bGVJZCIsIm5hbWUiLCJuYXYiLCJpY29uIiwicGFyZW50TmFtZSIsIm9yZGVyIiwiZGVtb0luZm8iLCJyb3V0ZXMiLCJoYXNDaGlsZHMiLCJjaGlsZHMiLCJjb25jYXQiLCJtYXAiLCJuYXZpZ2F0ZVdpdGhQYXJhbXMiLCJyb3V0ZU5hbWUiLCJwYXJhbXMiLCJyb3V0ZXJQYXJhbXMiLCJmaW5kIiwieCIsImRhdGEiLCJuYXZpZ2F0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQVFBLG1DLCtCQUFBQSxXOztBQUNBQyxxQyxnQkFBQUEsYTs7O3dDQUVLQyxJOzs7OzsrQ0FHVEMsZSw0QkFBZ0JDLE0sRUFBUUMsTSxFQUFPO0FBQUE7O0FBQzNCRCwrQ0FBT0UsS0FBUCxHQUFjLG1CQUFkO0FBQ0FGLCtDQUFPRyxlQUFQLENBQXVCLFdBQXZCLEVBQW9DTixhQUFwQztBQUNBRywrQ0FBT0csZUFBUCxDQUF1QixXQUF2QixFQUFvQ1AsV0FBcEM7O0FBRUEsNENBQUlRLFVBQVUsQ0FDVixFQUFFQyxPQUFPLGNBQVQsRUFBeUJDLFVBQVUsc0JBQW5DLEVBQTJEQyxNQUFLLGNBQWhFLEVBQWdGTCxPQUFNLGNBQXRGLEVBQXNHTSxLQUFJLElBQTFHLEVBQWdIQyxNQUFLLGdCQUFySCxFQUF1SUMsWUFBVyxTQUFsSixFQURVLENBQWQ7O0FBSUEsNENBQUlDLFFBQVEsQ0FDUixFQUFFTixPQUFPLGlCQUFULEVBQTRCQyxVQUFVLHVCQUF0QyxFQUErREMsTUFBSyxpQkFBcEUsRUFBdUZMLE9BQU0sV0FBN0YsRUFBMEdNLEtBQUksSUFBOUcsRUFBb0hDLE1BQUssYUFBekgsRUFBd0lDLFlBQVcsT0FB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
