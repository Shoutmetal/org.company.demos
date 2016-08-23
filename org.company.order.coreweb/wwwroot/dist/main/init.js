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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4vaW5pdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBUSxtQywrQkFBQSxXOztBQUNBLHFDLGdCQUFBLGE7Ozt3Q0FHSyxJOzs7OzsrQ0FHVCxlLDRCQUFnQixNLEVBQVEsTSxFQUFPO0FBQUE7O0FBQzNCLCtDQUFPLEtBQVAsR0FBYyxtQkFBZDtBQUNBLCtDQUFPLGVBQVAsQ0FBdUIsV0FBdkIsRUFBb0MsYUFBcEM7QUFDQSwrQ0FBTyxlQUFQLENBQXVCLFdBQXZCLEVBQW9DLFdBQXBDOztBQUVBLDRDQUFJLFVBQVUsQ0FDVixFQUFFLE9BQU8sY0FBVCxFQUF5QixVQUFVLHNCQUFuQyxFQUEyRCxNQUFLLGNBQWhFLEVBQWdGLE9BQU0sY0FBdEYsRUFBc0csS0FBSSxJQUExRyxFQUFnSCxNQUFLLGdCQUFySCxFQUF1SSxZQUFXLFNBQWxKLEVBRFUsQ0FBZDs7QUFJQSw0Q0FBSSxRQUFRLENBQ1IsRUFBRSxPQUFPLGlCQUFULEVBQTRCLFVBQVUsdUJBQXRDLEVBQStELE1BQUssaUJBQXBFLEVBQXVGLE9BQU0sV0FBN0YsRUFBMEcsS0FBSSxJQUE5RyxFQUFvSCxNQUFLLGFBQXpILEVBQXdJLFlBQVcsT0FBbkosRUFEUSxFQUVSLEVBQUUsT0FBTyxtQkFBVCxFQUE4QixVQUFVLHlCQUF4QyxFQUFtRSxNQUFLLG1CQUF4RSxFQUE2RixPQUFNLGFBQW5HLEVBQWtILEtBQUksSUFBdEgsRUFBNEgsTUFBSyxVQUFqSSxFQUE2SSxZQUFXLE9BQXhKLEVBRlEsRUFHUixFQUFFLE9BQU8sZ0JBQVQsRUFBMkIsVUFBVSxzQkFBckMsRUFBNkQsTUFBSyxnQkFBbEUsRUFBb0YsT0FBTSxVQUExRixFQUFzRyxLQUFJLElBQTFHLEVBQWdILE1BQUssWUFBckgsRUFBbUksWUFBVyxPQUE5SSxFQUhRLENBQVo7O0FBTUEsNENBQUksV0FBVyxDQUNkLEVBQUUsT0FBTyxxQkFBVCxFQUFnQyxVQUFVLDBCQUExQyxFQUFzRSxNQUFLLHFCQUEzRSxFQUFrRyxPQUFNLHFCQUF4RyxFQUErSCxLQUFJLElBQW5JLEVBQXlJLE1BQUssa0JBQTlJLEVBQWtLLFlBQVcsTUFBN0ssRUFEYyxDQUFmOztBQUlBLDRDQUFJLFNBQVMsQ0FDVCxFQUFFLE9BQU8sRUFBVCxFQUFhLFVBQVUsWUFBdkIsRUFBcUMsTUFBSyxNQUExQyxFQUFrRCxPQUFNLE1BQXhELEVBQWdFLEtBQUksSUFBcEUsRUFBMEUsTUFBSyxXQUEvRSxFQURTLEVBRVQsRUFBRSxPQUFPLE9BQVQsRUFBa0IsVUFBVSxZQUE1QixFQUEwQyxNQUFLLE9BQS9DLEVBQXdELE9BQU0sT0FBOUQsRUFBdUUsS0FBSSxJQUEzRSxFQUFpRixNQUFLLGNBQXRGLEVBQXNHLFdBQVUsSUFBaEgsRUFBc0gsUUFBUSxLQUE5SCxFQUZTLEVBR1QsRUFBRSxPQUFPLFNBQVQsRUFBb0IsVUFBVSxZQUE5QixFQUE0QyxNQUFLLFNBQWpELEVBQTRELE9BQU0sU0FBbEUsRUFBNkUsS0FBSSxJQUFqRixFQUF1RixNQUFLLFlBQTVGLEVBQTBHLFdBQVUsSUFBcEgsRUFBMEgsUUFBUSxPQUFsSSxFQUhTLEVBSVQsRUFBRSxPQUFPLE1BQVQsRUFBaUIsVUFBVSxZQUEzQixFQUF5QyxNQUFLLE1BQTlDLEVBQXNELE9BQU0sWUFBNUQsRUFBMEUsS0FBSSxJQUE5RSxFQUFvRixNQUFLLFdBQXpGLEVBQXNHLFdBQVUsSUFBaEgsRUFBc0gsUUFBUSxRQUE5SCxFQUpTLENBQWI7O0FBT0EsaURBQVMsT0FBTyxNQUFQLENBQWMsT0FBZCxDQUFUO0FBQ0EsaURBQVMsT0FBTyxNQUFQLENBQWMsS0FBZCxDQUFUO0FBQ0EsaURBQVMsT0FBTyxNQUFQLENBQWMsUUFBZCxDQUFUO0FBQ0EsK0NBQU8sR0FBUCxDQUFXLE1BQVg7O0FBRUEsNkNBQUssTUFBTCxHQUFjLE1BQWQ7O0FBRUEsNkNBQUssTUFBTCxDQUFZLGtCQUFaLEdBQWlDLFVBQUMsU0FBRCxFQUFZLE1BQVosRUFBdUI7QUFDcEQsb0RBQUksZUFBZSxNQUFLLE1BQUwsQ0FBWSxNQUFaLENBQW1CLElBQW5CLENBQXdCO0FBQUEsK0RBQUssRUFBRSxJQUFGLEtBQVcsU0FBaEI7QUFBQSxpREFBeEIsQ0FBbkI7QUFDQSw2REFBYSxJQUFiLEdBQW9CLE1BQXBCO0FBQ0Esc0RBQUssTUFBTCxDQUFZLFFBQVosQ0FBcUIsU0FBckI7QUFDSCx5Q0FKRDtBQU1ILGlDIiwiZmlsZSI6Im1haW4vaW5pdC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
