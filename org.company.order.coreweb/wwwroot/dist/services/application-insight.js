"use strict";

System.register([], function (_export, _context) {
    "use strict";

    var AppInsights;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [],
        execute: function () {
            _export("AppInsights", AppInsights = function () {
                function AppInsights() {
                    _classCallCheck(this, AppInsights);

                    this.server = window.appInsights || function (config) {
                        function s(config) {
                            t[config] = function () {
                                var i = arguments;t.queue.push(function () {
                                    t[config].apply(t, i);
                                });
                            };
                        }var t = { config: config },
                            r = document,
                            f = window,
                            e = "script",
                            o = r.createElement(e),
                            i,
                            u;for (o.src = config.url || "//az416426.vo.msecnd.net/scripts/a/ai.0.js", r.getElementsByTagName(e)[0].parentNode.appendChild(o), t.cookie = r.cookie, t.queue = [], i = ["Event", "Exception", "Metric", "PageView", "Trace"]; i.length;) {
                            s("track" + i.pop());
                        }return config.disableExceptionTracking || (i = "onerror", s("_" + i), u = f[i], f[i] = function (config, r, f, e, o) {
                            var s = u && u(config, r, f, e, o);return s !== !0 && t["_" + i](config, r, f, e, o), s;
                        }), t;
                    }({
                        instrumentationKey: "59b21429-9914-42a4-bf83-e62860e9722f"
                    });
                    window.appInsights = this.server;
                }

                AppInsights.prototype.run = function run(routingContext, next) {
                    var origin = window.location.pathname + window.location.hash;
                    var path = origin.replace("/#/", "/").replace("#", "");

                    this.server.trackPageView(path);
                    return next();
                };

                return AppInsights;
            }());

            _export("AppInsights", AppInsights);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2FwcGxpY2F0aW9uLWluc2lnaHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OzttQ0FBYSxXO0FBR1QsdUNBQWM7QUFBQTs7QUFDVix5QkFBSyxNQUFMLEdBQWMsT0FBTyxXQUFQLElBQXNCLFVBQVUsTUFBVixFQUFrQjtBQUNsRCxpQ0FBUyxDQUFULENBQVcsTUFBWCxFQUFtQjtBQUFFLDhCQUFFLE1BQUYsSUFBWSxZQUFZO0FBQUUsb0NBQUksSUFBSSxTQUFSLENBQW1CLEVBQUUsS0FBRixDQUFRLElBQVIsQ0FBYSxZQUFZO0FBQUUsc0NBQUUsTUFBRixFQUFVLEtBQVYsQ0FBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkI7QUFBdUIsaUNBQWxEO0FBQXFELDZCQUFsRztBQUFvRyx5QkFBQyxJQUFJLElBQUksRUFBRSxRQUFRLE1BQVYsRUFBUjtBQUFBLDRCQUE0QixJQUFJLFFBQWhDO0FBQUEsNEJBQTBDLElBQUksTUFBOUM7QUFBQSw0QkFBc0QsSUFBSSxRQUExRDtBQUFBLDRCQUFvRSxJQUFJLEVBQUUsYUFBRixDQUFnQixDQUFoQixDQUF4RTtBQUFBLDRCQUE0RixDQUE1RjtBQUFBLDRCQUErRixDQUEvRixDQUFrRyxLQUFLLEVBQUUsR0FBRixHQUFRLE9BQU8sR0FBUCxJQUFjLDRDQUF0QixFQUFvRSxFQUFFLG9CQUFGLENBQXVCLENBQXZCLEVBQTBCLENBQTFCLEVBQTZCLFVBQTdCLENBQXdDLFdBQXhDLENBQW9ELENBQXBELENBQXBFLEVBQTRILEVBQUUsTUFBRixHQUFXLEVBQUUsTUFBekksRUFBaUosRUFBRSxLQUFGLEdBQVUsRUFBM0osRUFBK0osSUFBSSxDQUFDLE9BQUQsRUFBVSxXQUFWLEVBQXVCLFFBQXZCLEVBQWlDLFVBQWpDLEVBQTZDLE9BQTdDLENBQXhLLEVBQStOLEVBQUUsTUFBak87QUFBME8sOEJBQUUsVUFBVSxFQUFFLEdBQUYsRUFBWjtBQUExTyx5QkFBZ1EsT0FBTyxPQUFPLHdCQUFQLEtBQW9DLElBQUksU0FBSixFQUFlLEVBQUUsTUFBTSxDQUFSLENBQWYsRUFBMkIsSUFBSSxFQUFFLENBQUYsQ0FBL0IsRUFBcUMsRUFBRSxDQUFGLElBQU8sVUFBVSxNQUFWLEVBQWtCLENBQWxCLEVBQXFCLENBQXJCLEVBQXdCLENBQXhCLEVBQTJCLENBQTNCLEVBQThCO0FBQUUsZ0NBQUksSUFBSSxLQUFLLEVBQUUsTUFBRixFQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLENBQWIsQ0FBb0MsT0FBTyxNQUFNLENBQUMsQ0FBUCxJQUFZLEVBQUUsTUFBTSxDQUFSLEVBQVcsTUFBWCxFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixDQUFaLEVBQTRDLENBQW5EO0FBQXNELHlCQUExTSxHQUE2TSxDQUFwTjtBQUMvZCxxQkFGbUMsQ0FFbEM7QUFDRSw0Q0FBb0I7QUFEdEIscUJBRmtDLENBQXBDO0FBS0EsMkJBQU8sV0FBUCxHQUFxQixLQUFLLE1BQTFCO0FBQ0g7O3NDQUVELEcsZ0JBQUksYyxFQUFnQixJLEVBQU07QUFDdEIsd0JBQUksU0FBUyxPQUFPLFFBQVAsQ0FBZ0IsUUFBaEIsR0FBMkIsT0FBTyxRQUFQLENBQWdCLElBQXhEO0FBQ0Esd0JBQUksT0FBTyxPQUFPLE9BQVAsQ0FBZSxLQUFmLEVBQXNCLEdBQXRCLEVBQTJCLE9BQTNCLENBQW1DLEdBQW5DLEVBQXdDLEVBQXhDLENBQVg7O0FBRUEseUJBQUssTUFBTCxDQUFZLGFBQVosQ0FBMEIsSUFBMUI7QUFDQSwyQkFBTyxNQUFQO0FBQ0gsaUIiLCJmaWxlIjoic2VydmljZXMvYXBwbGljYXRpb24taW5zaWdodC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
