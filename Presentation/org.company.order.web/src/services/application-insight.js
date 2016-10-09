export class AppInsights {
    server;

    constructor() {
        this.server = window.appInsights || function (config) {
            function s(config) { t[config] = function () { var i = arguments; t.queue.push(function () { t[config].apply(t, i) }) } } var t = { config: config }, r = document, f = window, e = "script", o = r.createElement(e), i, u; for (o.src = config.url || "//az416426.vo.msecnd.net/scripts/a/ai.0.js", r.getElementsByTagName(e)[0].parentNode.appendChild(o), t.cookie = r.cookie, t.queue = [], i = ["Event", "Exception", "Metric", "PageView", "Trace"]; i.length;) s("track" + i.pop()); return config.disableExceptionTracking || (i = "onerror", s("_" + i), u = f[i], f[i] = function (config, r, f, e, o) { var s = u && u(config, r, f, e, o); return s !== !0 && t["_" + i](config, r, f, e, o), s }), t
        }({
            instrumentationKey: "d166fa91-be12-495f-a662-97d443fcba26"
        });
        window.appInsights = this.server;
    }

    run(routingContext, next) {
        var origin = window.location.pathname + window.location.hash;
        var path = origin.replace("/#/", "/").replace("#", "");
        //console.log("[AppInsights] Tracking for %s", path);
        this.server.trackPageView(path);
        return next();
    }
}