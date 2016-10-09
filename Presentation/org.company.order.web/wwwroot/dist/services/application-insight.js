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
                        instrumentationKey: "d166fa91-be12-495f-a662-97d443fcba26"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2FwcGxpY2F0aW9uLWluc2lnaHQuanMiXSwibmFtZXMiOlsiQXBwSW5zaWdodHMiLCJzZXJ2ZXIiLCJ3aW5kb3ciLCJhcHBJbnNpZ2h0cyIsImNvbmZpZyIsInMiLCJ0IiwiaSIsImFyZ3VtZW50cyIsInF1ZXVlIiwicHVzaCIsImFwcGx5IiwiciIsImRvY3VtZW50IiwiZiIsImUiLCJvIiwiY3JlYXRlRWxlbWVudCIsInUiLCJzcmMiLCJ1cmwiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInBhcmVudE5vZGUiLCJhcHBlbmRDaGlsZCIsImNvb2tpZSIsImxlbmd0aCIsInBvcCIsImRpc2FibGVFeGNlcHRpb25UcmFja2luZyIsImluc3RydW1lbnRhdGlvbktleSIsInJ1biIsInJvdXRpbmdDb250ZXh0IiwibmV4dCIsIm9yaWdpbiIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJoYXNoIiwicGF0aCIsInJlcGxhY2UiLCJ0cmFja1BhZ2VWaWV3Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O21DQUFhQSxXO0FBR1QsdUNBQWM7QUFBQTs7QUFDVix5QkFBS0MsTUFBTCxHQUFjQyxPQUFPQyxXQUFQLElBQXNCLFVBQVVDLE1BQVYsRUFBa0I7QUFDbEQsaUNBQVNDLENBQVQsQ0FBV0QsTUFBWCxFQUFtQjtBQUFFRSw4QkFBRUYsTUFBRixJQUFZLFlBQVk7QUFBRSxvQ0FBSUcsSUFBSUMsU0FBUixDQUFtQkYsRUFBRUcsS0FBRixDQUFRQyxJQUFSLENBQWEsWUFBWTtBQUFFSixzQ0FBRUYsTUFBRixFQUFVTyxLQUFWLENBQWdCTCxDQUFoQixFQUFtQkMsQ0FBbkI7QUFBdUIsaUNBQWxEO0FBQXFELDZCQUFsRztBQUFvRyx5QkFBQyxJQUFJRCxJQUFJLEVBQUVGLFFBQVFBLE1BQVYsRUFBUjtBQUFBLDRCQUE0QlEsSUFBSUMsUUFBaEM7QUFBQSw0QkFBMENDLElBQUlaLE1BQTlDO0FBQUEsNEJBQXNEYSxJQUFJLFFBQTFEO0FBQUEsNEJBQW9FQyxJQUFJSixFQUFFSyxhQUFGLENBQWdCRixDQUFoQixDQUF4RTtBQUFBLDRCQUE0RlIsQ0FBNUY7QUFBQSw0QkFBK0ZXLENBQS9GLENBQWtHLEtBQUtGLEVBQUVHLEdBQUYsR0FBUWYsT0FBT2dCLEdBQVAsSUFBYyw0Q0FBdEIsRUFBb0VSLEVBQUVTLG9CQUFGLENBQXVCTixDQUF2QixFQUEwQixDQUExQixFQUE2Qk8sVUFBN0IsQ0FBd0NDLFdBQXhDLENBQW9EUCxDQUFwRCxDQUFwRSxFQUE0SFYsRUFBRWtCLE1BQUYsR0FBV1osRUFBRVksTUFBekksRUFBaUpsQixFQUFFRyxLQUFGLEdBQVUsRUFBM0osRUFBK0pGLElBQUksQ0FBQyxPQUFELEVBQVUsV0FBVixFQUF1QixRQUF2QixFQUFpQyxVQUFqQyxFQUE2QyxPQUE3QyxDQUF4SyxFQUErTkEsRUFBRWtCLE1BQWpPO0FBQTBPcEIsOEJBQUUsVUFBVUUsRUFBRW1CLEdBQUYsRUFBWjtBQUExTyx5QkFBZ1EsT0FBT3RCLE9BQU91Qix3QkFBUCxLQUFvQ3BCLElBQUksU0FBSixFQUFlRixFQUFFLE1BQU1FLENBQVIsQ0FBZixFQUEyQlcsSUFBSUosRUFBRVAsQ0FBRixDQUEvQixFQUFxQ08sRUFBRVAsQ0FBRixJQUFPLFVBQVVILE1BQVYsRUFBa0JRLENBQWxCLEVBQXFCRSxDQUFyQixFQUF3QkMsQ0FBeEIsRUFBMkJDLENBQTNCLEVBQThCO0FBQUUsZ0NBQUlYLElBQUlhLEtBQUtBLEVBQUVkLE1BQUYsRUFBVVEsQ0FBVixFQUFhRSxDQUFiLEVBQWdCQyxDQUFoQixFQUFtQkMsQ0FBbkIsQ0FBYixDQUFvQyxPQUFPWCxNQUFNLENBQUMsQ0FBUCxJQUFZQyxFQUFFLE1BQU1DLENBQVIsRUFBV0gsTUFBWCxFQUFtQlEsQ0FBbkIsRUFBc0JFLENBQXRCLEVBQXlCQyxDQUF6QixFQUE0QkMsQ0FBNUIsQ0FBWixFQUE0Q1gsQ0FBbkQ7QUFBc0QseUJBQTFNLEdBQTZNQyxDQUFwTjtBQUMvZCxxQkFGbUMsQ0FFbEM7QUFDRXNCLDRDQUFvQjtBQUR0QixxQkFGa0MsQ0FBcEM7QUFLQTFCLDJCQUFPQyxXQUFQLEdBQXFCLEtBQUtGLE1BQTFCO0FBQ0g7O3NDQUVENEIsRyxnQkFBSUMsYyxFQUFnQkMsSSxFQUFNO0FBQ3RCLHdCQUFJQyxTQUFTOUIsT0FBTytCLFFBQVAsQ0FBZ0JDLFFBQWhCLEdBQTJCaEMsT0FBTytCLFFBQVAsQ0FBZ0JFLElBQXhEO0FBQ0Esd0JBQUlDLE9BQU9KLE9BQU9LLE9BQVAsQ0FBZSxLQUFmLEVBQXNCLEdBQXRCLEVBQTJCQSxPQUEzQixDQUFtQyxHQUFuQyxFQUF3QyxFQUF4QyxDQUFYOztBQUVBLHlCQUFLcEMsTUFBTCxDQUFZcUMsYUFBWixDQUEwQkYsSUFBMUI7QUFDQSwyQkFBT0wsTUFBUDtBQUNILGlCIiwiZmlsZSI6InNlcnZpY2VzL2FwcGxpY2F0aW9uLWluc2lnaHQuanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
