'use strict';

System.register(['services/application-insight', 'aurelia-authentication'], function (_export, _context) {
        "use strict";

        var AppInsights, AuthenticateStep, Menu;

        function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                        throw new TypeError("Cannot call a class as a function");
                }
        }

        return {
                setters: [function (_servicesApplicationInsight) {
                        AppInsights = _servicesApplicationInsight.AppInsights;
                }, function (_aureliaAuthentication) {
                        AuthenticateStep = _aureliaAuthentication.AuthenticateStep;
                }],
                execute: function () {
                        _export('Menu', Menu = function () {
                                function Menu() {
                                        _classCallCheck(this, Menu);
                                }

                                Menu.prototype.configureRouter = function configureRouter(config, router) {
                                        var _this = this;

                                        config.title = "Demo Architecture";
                                        config.addPipelineStep('authorize', AuthenticateStep);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4vaW5pdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBUSxtQywrQkFBQSxXOztBQUNBLHdDLDBCQUFBLGdCOzs7d0NBR0ssSTs7Ozs7K0NBR1QsZSw0QkFBZ0IsTSxFQUFRLE0sRUFBTztBQUFBOztBQUMzQiwrQ0FBTyxLQUFQLEdBQWMsbUJBQWQ7QUFDQSwrQ0FBTyxlQUFQLENBQXVCLFdBQXZCLEVBQW9DLGdCQUFwQztBQUNBLCtDQUFPLGVBQVAsQ0FBdUIsV0FBdkIsRUFBb0MsV0FBcEM7O0FBRUEsNENBQUksVUFBVSxDQUNWLEVBQUUsT0FBTyxjQUFULEVBQXlCLFVBQVUsc0JBQW5DLEVBQTJELE1BQUssY0FBaEUsRUFBZ0YsT0FBTSxjQUF0RixFQUFzRyxLQUFJLElBQTFHLEVBQWdILE1BQUssZ0JBQXJILEVBQXVJLFlBQVcsU0FBbEosRUFEVSxDQUFkOztBQUlBLDRDQUFJLFFBQVEsQ0FDUixFQUFFLE9BQU8saUJBQVQsRUFBNEIsVUFBVSx1QkFBdEMsRUFBK0QsTUFBSyxpQkFBcEUsRUFBdUYsT0FBTSxXQUE3RixFQUEwRyxLQUFJLElBQTlHLEVBQW9ILE1BQUssYUFBekgsRUFBd0ksWUFBVyxPQUFuSixFQURRLEVBRVIsRUFBRSxPQUFPLG1CQUFULEVBQThCLFVBQVUseUJBQXhDLEVBQW1FLE1BQUssbUJBQXhFLEVBQTZGLE9BQU0sYUFBbkcsRUFBa0gsS0FBSSxJQUF0SCxFQUE0SCxNQUFLLFVBQWpJLEVBQTZJLFlBQVcsT0FBeEosRUFGUSxFQUdSLEVBQUUsT0FBTyxnQkFBVCxFQUEyQixVQUFVLHNCQUFyQyxFQUE2RCxNQUFLLGdCQUFsRSxFQUFvRixPQUFNLFVBQTFGLEVBQXNHLEtBQUksSUFBMUcsRUFBZ0gsTUFBSyxZQUFySCxFQUFtSSxZQUFXLE9BQTlJLEVBSFEsQ0FBWjs7QUFNQSw0Q0FBSSxXQUFXLENBQ2QsRUFBRSxPQUFPLHFCQUFULEVBQWdDLFVBQVUsMEJBQTFDLEVBQXNFLE1BQUsscUJBQTNFLEVBQWtHLE9BQU0scUJBQXhHLEVBQStILEtBQUksSUFBbkksRUFBeUksTUFBSyxrQkFBOUksRUFBa0ssWUFBVyxNQUE3SyxFQURjLENBQWY7O0FBSUEsNENBQUksU0FBUyxDQUNULEVBQUUsT0FBTyxFQUFULEVBQWEsVUFBVSxZQUF2QixFQUFxQyxNQUFLLE1BQTFDLEVBQWtELE9BQU0sTUFBeEQsRUFBZ0UsS0FBSSxJQUFwRSxFQUEwRSxNQUFLLFdBQS9FLEVBRFMsRUFFVCxFQUFFLE9BQU8sT0FBVCxFQUFrQixVQUFVLFlBQTVCLEVBQTBDLE1BQUssT0FBL0MsRUFBd0QsT0FBTSxPQUE5RCxFQUF1RSxLQUFJLElBQTNFLEVBQWlGLE1BQUssY0FBdEYsRUFBc0csV0FBVSxJQUFoSCxFQUFzSCxRQUFRLEtBQTlILEVBRlMsRUFHVCxFQUFFLE9BQU8sU0FBVCxFQUFvQixVQUFVLFlBQTlCLEVBQTRDLE1BQUssU0FBakQsRUFBNEQsT0FBTSxTQUFsRSxFQUE2RSxLQUFJLElBQWpGLEVBQXVGLE1BQUssWUFBNUYsRUFBMEcsV0FBVSxJQUFwSCxFQUEwSCxRQUFRLE9BQWxJLEVBSFMsRUFJVCxFQUFFLE9BQU8sTUFBVCxFQUFpQixVQUFVLFlBQTNCLEVBQXlDLE1BQUssTUFBOUMsRUFBc0QsT0FBTSxZQUE1RCxFQUEwRSxLQUFJLElBQTlFLEVBQW9GLE1BQUssV0FBekYsRUFBc0csV0FBVSxJQUFoSCxFQUFzSCxRQUFRLFFBQTlILEVBSlMsQ0FBYjs7QUFPQSxpREFBUyxPQUFPLE1BQVAsQ0FBYyxPQUFkLENBQVQ7QUFDQSxpREFBUyxPQUFPLE1BQVAsQ0FBYyxLQUFkLENBQVQ7QUFDQSxpREFBUyxPQUFPLE1BQVAsQ0FBYyxRQUFkLENBQVQ7QUFDQSwrQ0FBTyxHQUFQLENBQVcsTUFBWDs7QUFFQSw2Q0FBSyxNQUFMLEdBQWMsTUFBZDs7QUFFQSw2Q0FBSyxNQUFMLENBQVksa0JBQVosR0FBaUMsVUFBQyxTQUFELEVBQVksTUFBWixFQUF1QjtBQUNwRCxvREFBSSxlQUFlLE1BQUssTUFBTCxDQUFZLE1BQVosQ0FBbUIsSUFBbkIsQ0FBd0I7QUFBQSwrREFBSyxFQUFFLElBQUYsS0FBVyxTQUFoQjtBQUFBLGlEQUF4QixDQUFuQjtBQUNBLDZEQUFhLElBQWIsR0FBb0IsTUFBcEI7QUFDQSxzREFBSyxNQUFMLENBQVksUUFBWixDQUFxQixTQUFyQjtBQUNILHlDQUpEO0FBTUgsaUMiLCJmaWxlIjoibWFpbi9pbml0LmpzIiwic291cmNlUm9vdCI6Ii9zcmMifQ==
