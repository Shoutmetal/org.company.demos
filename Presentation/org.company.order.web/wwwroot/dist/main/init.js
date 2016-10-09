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

                                        var demoInfo = [{ route: "general-information", moduleId: 'demo/general-information', name: "general-information", title: "General Information", nav: true, icon: "icon-paper-plane", parentName: "demo" }];

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4vaW5pdC5qcyJdLCJuYW1lcyI6WyJBcHBJbnNpZ2h0cyIsIkF1dGhvcml6ZVN0ZXAiLCJNZW51IiwiY29uZmlndXJlUm91dGVyIiwiY29uZmlnIiwicm91dGVyIiwidGl0bGUiLCJhZGRQaXBlbGluZVN0ZXAiLCJyZXBvcnRzIiwicm91dGUiLCJtb2R1bGVJZCIsIm5hbWUiLCJuYXYiLCJpY29uIiwicGFyZW50TmFtZSIsIm9yZGVyIiwiZGVtb0luZm8iLCJyb3V0ZXMiLCJoYXNDaGlsZHMiLCJjaGlsZHMiLCJjb25jYXQiLCJtYXAiLCJuYXZpZ2F0ZVdpdGhQYXJhbXMiLCJyb3V0ZU5hbWUiLCJwYXJhbXMiLCJyb3V0ZXJQYXJhbXMiLCJmaW5kIiwieCIsImRhdGEiLCJuYXZpZ2F0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQVFBLG1DLCtCQUFBQSxXOztBQUNBQyxxQyxnQkFBQUEsYTs7O3dDQUVLQyxJOzs7OzsrQ0FHVEMsZSw0QkFBZ0JDLE0sRUFBUUMsTSxFQUFPO0FBQUE7O0FBQzNCRCwrQ0FBT0UsS0FBUCxHQUFjLG1CQUFkO0FBQ0FGLCtDQUFPRyxlQUFQLENBQXVCLFdBQXZCLEVBQW9DTixhQUFwQztBQUNBRywrQ0FBT0csZUFBUCxDQUF1QixXQUF2QixFQUFvQ1AsV0FBcEM7O0FBRUEsNENBQUlRLFVBQVUsQ0FDVixFQUFFQyxPQUFPLGNBQVQsRUFBeUJDLFVBQVUsc0JBQW5DLEVBQTJEQyxNQUFLLGNBQWhFLEVBQWdGTCxPQUFNLGNBQXRGLEVBQXNHTSxLQUFJLElBQTFHLEVBQWdIQyxNQUFLLGdCQUFySCxFQUF1SUMsWUFBVyxTQUFsSixFQURVLENBQWQ7O0FBSUEsNENBQUlDLFFBQVEsQ0FDUixFQUFFTixPQUFPLGlCQUFULEVBQTRCQyxVQUFVLHVCQUF0QyxFQUErREMsTUFBSyxpQkFBcEUsRUFBdUZMLE9BQU0sV0FBN0YsRUFBMEdNLEtBQUksSUFBOUcsRUFBb0hDLE1BQUssYUFBekgsRUFBd0lDLFlBQVcsT0FBbkosRUFEUSxFQUVSLEVBQUVMLE9BQU8sbUJBQVQsRUFBOEJDLFVBQVUseUJBQXhDLEVBQW1FQyxNQUFLLG1CQUF4RSxFQUE2RkwsT0FBTSxhQUFuRyxFQUFrSE0sS0FBSSxJQUF0SCxFQUE0SEMsTUFBSyxVQUFqSSxFQUE2SUMsWUFBVyxPQUF4SixFQUZRLEVBR1IsRUFBRUwsT0FBTyxnQkFBVCxFQUEyQkMsVUFBVSxzQkFBckMsRUFBNkRDLE1BQUssZ0JBQWxFLEVBQW9GTCxPQUFNLFVBQTFGLEVBQXNHTSxLQUFJLElBQTFHLEVBQWdIQyxNQUFLLFlBQXJILEVBQW1JQyxZQUFXLE9BQTlJLEVBSFEsQ0FBWjs7QUFNQSw0Q0FBSUUsV0FBVyxDQUNkLEVBQUVQLE9BQU8scUJBQVQsRUFBZ0NDLFVBQVUsMEJBQTFDLEVBQXNFQyxNQUFLLHFCQUEzRSxFQUFrR0wsT0FBTSxxQkFBeEcsRUFBK0hNLEtBQUksSUFBbkksRUFBeUlDLE1BQUssa0JBQTlJLEVBQWtLQyxZQUFXLE1BQTdLLEVBRGMsQ0FBZjs7QUFJQSw0Q0FBSUcsU0FBUyxDQUNULEVBQUVSLE9BQU8sRUFBVCxFQUFhQyxVQUFVLFlBQXZCLEVBQXFDQyxNQUFLLE1BQTFDLEVBQWtETCxPQUFNLE1BQXhELEVBQWdFTSxLQUFJLElBQXBFLEVBQTBFQyxNQUFLLFdBQS9FLEVBRFMsRUFFVCxFQUFFSixPQUFPLE9BQVQsRUFBa0JDLFVBQVUsWUFBNUIsRUFBMENDLE1BQUssT0FBL0MsRUFBd0RMLE9BQU0sT0FBOUQsRUFBdUVNLEtBQUksSUFBM0UsRUFBaUZDLE1BQUssY0FBdEYsRUFBc0dLLFdBQVUsSUFBaEgsRUFBc0hDLFFBQVFKLEtBQTlILEVBRlMsRUFHVCxFQUFFTixPQUFPLFNBQVQsRUFBb0JDLFVBQVUsWUFBOUIsRUFBNENDLE1BQUssU0FBakQsRUFBNERMLE9BQU0sU0FBbEUsRUFBNkVNLEtBQUksSUFBakYsRUFBdUZDLE1BQUssWUFBNUYsRUFBMEdLLFdBQVUsSUFBcEgsRUFBMEhDLFFBQVFYLE9BQWxJLEVBSFMsRUFJVCxFQUFFQyxPQUFPLE1BQVQsRUFBaUJDLFVBQVUsWUFBM0IsRUFBeUNDLE1BQUssTUFBOUMsRUFBc0RMLE9BQU0sWUFBNUQsRUFBMEVNLEtBQUksSUFBOUUsRUFBb0ZDLE1BQUssV0FBekYsRUFBc0dLLFdBQVUsSUFBaEgsRUFBc0hDLFFBQVFILFFBQTlILEVBSlMsQ0FBYjs7QUFPQUMsaURBQVNBLE9BQU9HLE1BQVAsQ0FBY1osT0FBZCxDQUFUO0FBQ0FTLGlEQUFTQSxPQUFPRyxNQUFQLENBQWNMLEtBQWQsQ0FBVDtBQUNBRSxpREFBU0EsT0FBT0csTUFBUCxDQUFjSixRQUFkLENBQVQ7QUFDQVosK0NBQU9pQixHQUFQLENBQVdKLE1BQVg7O0FBRUEsNkNBQUtaLE1BQUwsR0FBY0EsTUFBZDs7QUFFQSw2Q0FBS0EsTUFBTCxDQUFZaUIsa0JBQVosR0FBaUMsVUFBQ0MsU0FBRCxFQUFZQyxNQUFaLEVBQXVCO0FBQ3BELG9EQUFJQyxlQUFlLE1BQUtwQixNQUFMLENBQVlZLE1BQVosQ0FBbUJTLElBQW5CLENBQXdCO0FBQUEsK0RBQUtDLEVBQUVoQixJQUFGLEtBQVdZLFNBQWhCO0FBQUEsaURBQXhCLENBQW5CO0FBQ0FFLDZEQUFhRyxJQUFiLEdBQW9CSixNQUFwQjtBQUNBLHNEQUFLbkIsTUFBTCxDQUFZd0IsUUFBWixDQUFxQk4sU0FBckI7QUFDSCx5Q0FKRDtBQU1ILGlDIiwiZmlsZSI6Im1haW4vaW5pdC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
