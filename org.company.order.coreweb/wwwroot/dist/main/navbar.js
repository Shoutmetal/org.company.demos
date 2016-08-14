'use strict';

System.register(['aurelia-framework', 'aurelia-event-aggregator'], function (_export, _context) {
    "use strict";

    var inject, EventAggregator, _dec, _class, NavBar;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
        }, function (_aureliaEventAggregator) {
            EventAggregator = _aureliaEventAggregator.EventAggregator;
        }],
        execute: function () {
            _export('NavBar', NavBar = (_dec = inject(Element, EventAggregator), _dec(_class = function () {
                function NavBar(element, event) {
                    _classCallCheck(this, NavBar);

                    this.element = element;
                    this.event = event;
                    this.current = null;
                    this.selected = null;
                    this.expanded = true;
                    this.route = null;

                    this.parentSub = null;
                    this.currentSub = null;
                    this.selectedSub = null;
                }

                NavBar.prototype.activate = function activate(router) {
                    this.router = router;
                };

                NavBar.prototype.attached = function attached() {
                    var _this = this;

                    this.defaultRoute();
                    this.cookieMenu();

                    this.event.subscribe("router:navigation:success", function (route) {
                        _this.route = route.instruction;

                        if (!_this.route.config.parentName) {

                            _this.selected = _this.selected || _this.current;
                            _this.current = $(_this.element).find("#" + _this.route.config.name);

                            if (_this.selected.is(_this.current)) return true;

                            if (_this.selected) {
                                _this.selected.removeClass("start active open");
                                _this.selected.find(".arrow").removeClass("open");
                                _this.selected.find("ul").hide();
                            }

                            if (_this.selectedSub) _this.selectedSub.removeClass("active");

                            _this.current.addClass("start active");
                            _this.selected = _this.current;
                        } else {

                            _this.parentSub = $(_this.element).find("#" + _this.route.config.parentName);

                            _this.selectedSub = _this.selectedSub || _this.currentSub;
                            _this.currentSub = $(_this.element).find("#" + _this.route.config.name);

                            if (_this.selected && !_this.selected.is(_this.parentSub)) {
                                _this.selected.removeClass("start active open");
                                _this.selected.find(".arrow").removeClass("open");
                                _this.selected.find("ul").hide();
                            }

                            _this.selected = $(_this.element).find("#" + _this.route.config.parentName);
                            _this.selected.addClass("start active open");

                            if (_this.selectedSub) _this.selectedSub.removeClass("active");
                            _this.currentSub.addClass("active");
                            _this.selectedSub = _this.currentSub;
                        }
                    });
                };

                NavBar.prototype.open = function open(route) {
                    this.route = route;

                    if (this.route.config.hasChilds) {
                        this.selected = this.selected || this.current;
                        this.current = $(this.element).find("#" + this.route.config.name);

                        var isOpen = this.current.hasClass("open");

                        $(".parent-router").each(function () {
                            $(this).removeClass("open");
                            $(this).find("ul").hide();
                            $(this).find("span.arrow").removeClass("open");
                        });

                        if (isOpen) {
                            this.current.removeClass("open");
                            this.current.find("ul").hide();
                            this.current.find("span.arrow").removeClass("open");
                        } else {
                            this.current.addClass("open");
                            this.current.find("ul").show();
                            this.current.find("span.arrow").addClass("open");
                        }
                    }

                    return true;
                };

                NavBar.prototype.getRoute = function getRoute(name) {
                    var current = this.router.navigation.filter(function (item) {
                        return item.config.name === name;
                    })[0];
                    return current;
                };

                NavBar.prototype.defaultRoute = function defaultRoute() {
                    var current = this.router.navigation.filter(function (item) {
                        return item.isActive;
                    })[0];

                    if (!current) return;

                    if (current.config.parentName) {
                        this.current = $(this.element).find("#" + current.config.parentName);
                        this.currentSub = $(this.element).find("#" + current.config.name);
                        this.current.addClass("start active open");
                        this.current.find("span.arrow").addClass("open");
                        this.currentSub.addClass("active");
                    } else {
                        this.current = $(this.element).find("#" + current.config.name);
                        this.current.addClass("start active");
                    }
                };

                NavBar.prototype.cookieMenu = function cookieMenu() {

                    var isClosed = sessionStorage.getItem("sidebar_closed");

                    if (isClosed === '1') {
                        $('body').addClass('page-sidebar-closed');
                        $('.page-sidebar-menu').addClass('page-sidebar-menu-closed');
                    }
                };

                NavBar.prototype.sliderToggle = function sliderToggle() {
                    var body = $('body');
                    var sidebar = $('.page-sidebar');
                    var sidebarMenu = $('.page-sidebar-menu');
                    $(".sidebar-search", sidebar).removeClass("open");

                    if (body.hasClass("page-sidebar-closed")) {
                        body.removeClass("page-sidebar-closed");
                        sidebarMenu.removeClass("page-sidebar-menu-closed");
                        sessionStorage.setItem("sidebar_closed", "0");
                    } else {
                        body.addClass("page-sidebar-closed");
                        sidebarMenu.addClass("page-sidebar-menu-closed");
                        if (body.hasClass("page-sidebar-fixed")) {
                            sidebarMenu.trigger("mouseleave");
                        }
                        sessionStorage.setItem("sidebar_closed", "1");
                    }

                    $(window).trigger('resize');
                };

                return NavBar;
            }()) || _class));

            _export('NavBar', NavBar);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4vbmF2YmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFRLGtCLHFCQUFBLE07O0FBQ0EsMkIsMkJBQUEsZTs7OzhCQUdLLE0sV0FEWixPQUFPLE9BQVAsRUFBZ0IsZUFBaEIsQztBQUdHLGdDQUFZLE9BQVosRUFBcUIsS0FBckIsRUFBMkI7QUFBQTs7QUFDdkIseUJBQUssT0FBTCxHQUFlLE9BQWY7QUFDQSx5QkFBSyxLQUFMLEdBQWEsS0FBYjtBQUNBLHlCQUFLLE9BQUwsR0FBZSxJQUFmO0FBQ0EseUJBQUssUUFBTCxHQUFnQixJQUFoQjtBQUNBLHlCQUFLLFFBQUwsR0FBZ0IsSUFBaEI7QUFDQSx5QkFBSyxLQUFMLEdBQWEsSUFBYjs7QUFFQSx5QkFBSyxTQUFMLEdBQWlCLElBQWpCO0FBQ0EseUJBQUssVUFBTCxHQUFrQixJQUFsQjtBQUNBLHlCQUFLLFdBQUwsR0FBbUIsSUFBbkI7QUFDSDs7aUNBRUQsUSxxQkFBUyxNLEVBQU87QUFDWix5QkFBSyxNQUFMLEdBQWMsTUFBZDtBQUNILGlCOztpQ0FFRCxRLHVCQUFVO0FBQUE7O0FBQ04seUJBQUssWUFBTDtBQUNBLHlCQUFLLFVBQUw7O0FBRUEseUJBQUssS0FBTCxDQUFXLFNBQVgsQ0FBcUIsMkJBQXJCLEVBQWtELFVBQUMsS0FBRCxFQUFXO0FBQ3pELDhCQUFLLEtBQUwsR0FBYSxNQUFNLFdBQW5COztBQUVBLDRCQUFHLENBQUMsTUFBSyxLQUFMLENBQVcsTUFBWCxDQUFrQixVQUF0QixFQUFpQzs7QUFFN0Isa0NBQUssUUFBTCxHQUFnQixNQUFLLFFBQUwsSUFBaUIsTUFBSyxPQUF0QztBQUNBLGtDQUFLLE9BQUwsR0FBZSxFQUFFLE1BQUssT0FBUCxFQUFnQixJQUFoQixDQUFxQixNQUFNLE1BQUssS0FBTCxDQUFXLE1BQVgsQ0FBa0IsSUFBN0MsQ0FBZjs7QUFFQSxnQ0FBSSxNQUFLLFFBQU4sQ0FBZ0IsRUFBaEIsQ0FBbUIsTUFBSyxPQUF4QixDQUFILEVBQXFDLE9BQU8sSUFBUDs7QUFFckMsZ0NBQUcsTUFBSyxRQUFSLEVBQWlCO0FBQ2Isc0NBQUssUUFBTCxDQUFjLFdBQWQsQ0FBMEIsbUJBQTFCO0FBQ0Esc0NBQUssUUFBTCxDQUFjLElBQWQsQ0FBbUIsUUFBbkIsRUFBNkIsV0FBN0IsQ0FBeUMsTUFBekM7QUFDQSxzQ0FBSyxRQUFMLENBQWMsSUFBZCxDQUFtQixJQUFuQixFQUF5QixJQUF6QjtBQUNIOztBQUVELGdDQUFHLE1BQUssV0FBUixFQUNJLE1BQUssV0FBTCxDQUFpQixXQUFqQixDQUE2QixRQUE3Qjs7QUFFSixrQ0FBSyxPQUFMLENBQWEsUUFBYixDQUFzQixjQUF0QjtBQUNBLGtDQUFLLFFBQUwsR0FBZ0IsTUFBSyxPQUFyQjtBQUNILHlCQWxCRCxNQWtCSzs7QUFFRCxrQ0FBSyxTQUFMLEdBQWlCLEVBQUUsTUFBSyxPQUFQLEVBQWdCLElBQWhCLENBQXFCLE1BQU0sTUFBSyxLQUFMLENBQVcsTUFBWCxDQUFrQixVQUE3QyxDQUFqQjs7QUFFQSxrQ0FBSyxXQUFMLEdBQW1CLE1BQUssV0FBTCxJQUFvQixNQUFLLFVBQTVDO0FBQ0Esa0NBQUssVUFBTCxHQUFrQixFQUFFLE1BQUssT0FBUCxFQUFnQixJQUFoQixDQUFxQixNQUFNLE1BQUssS0FBTCxDQUFXLE1BQVgsQ0FBa0IsSUFBN0MsQ0FBbEI7O0FBSUEsZ0NBQUcsTUFBSyxRQUFMLElBQWlCLENBQUUsTUFBSyxRQUFOLENBQWdCLEVBQWhCLENBQW1CLE1BQUssU0FBeEIsQ0FBckIsRUFBd0Q7QUFDcEQsc0NBQUssUUFBTCxDQUFjLFdBQWQsQ0FBMEIsbUJBQTFCO0FBQ0Esc0NBQUssUUFBTCxDQUFjLElBQWQsQ0FBbUIsUUFBbkIsRUFBNkIsV0FBN0IsQ0FBeUMsTUFBekM7QUFDQSxzQ0FBSyxRQUFMLENBQWMsSUFBZCxDQUFtQixJQUFuQixFQUF5QixJQUF6QjtBQUNIOztBQUVELGtDQUFLLFFBQUwsR0FBZ0IsRUFBRSxNQUFLLE9BQVAsRUFBZ0IsSUFBaEIsQ0FBcUIsTUFBTSxNQUFLLEtBQUwsQ0FBVyxNQUFYLENBQWtCLFVBQTdDLENBQWhCO0FBQ0Esa0NBQUssUUFBTCxDQUFjLFFBQWQsQ0FBdUIsbUJBQXZCOztBQUVBLGdDQUFHLE1BQUssV0FBUixFQUNJLE1BQUssV0FBTCxDQUFpQixXQUFqQixDQUE2QixRQUE3QjtBQUNKLGtDQUFLLFVBQUwsQ0FBZ0IsUUFBaEIsQ0FBeUIsUUFBekI7QUFDQSxrQ0FBSyxXQUFMLEdBQW1CLE1BQUssVUFBeEI7QUFFSDtBQUVKLHFCQTlDRDtBQStDSCxpQjs7aUNBQ0QsSSxpQkFBSyxLLEVBQU07QUFDUCx5QkFBSyxLQUFMLEdBQWEsS0FBYjs7QUFFQSx3QkFBRyxLQUFLLEtBQUwsQ0FBVyxNQUFYLENBQWtCLFNBQXJCLEVBQStCO0FBQzNCLDZCQUFLLFFBQUwsR0FBZ0IsS0FBSyxRQUFMLElBQWlCLEtBQUssT0FBdEM7QUFDQSw2QkFBSyxPQUFMLEdBQWUsRUFBRSxLQUFLLE9BQVAsRUFBZ0IsSUFBaEIsQ0FBcUIsTUFBTSxLQUFLLEtBQUwsQ0FBVyxNQUFYLENBQWtCLElBQTdDLENBQWY7O0FBRUEsNEJBQUksU0FBUyxLQUFLLE9BQUwsQ0FBYSxRQUFiLENBQXNCLE1BQXRCLENBQWI7O0FBRUEsMEJBQUUsZ0JBQUYsRUFBb0IsSUFBcEIsQ0FBeUIsWUFBVTtBQUMvQiw4QkFBRSxJQUFGLEVBQVEsV0FBUixDQUFvQixNQUFwQjtBQUNBLDhCQUFFLElBQUYsRUFBUSxJQUFSLENBQWEsSUFBYixFQUFtQixJQUFuQjtBQUNBLDhCQUFFLElBQUYsRUFBUSxJQUFSLENBQWEsWUFBYixFQUEyQixXQUEzQixDQUF1QyxNQUF2QztBQUNILHlCQUpEOztBQU1BLDRCQUFHLE1BQUgsRUFBVztBQUNQLGlDQUFLLE9BQUwsQ0FBYSxXQUFiLENBQXlCLE1BQXpCO0FBQ0EsaUNBQUssT0FBTCxDQUFhLElBQWIsQ0FBa0IsSUFBbEIsRUFBd0IsSUFBeEI7QUFDQSxpQ0FBSyxPQUFMLENBQWEsSUFBYixDQUFrQixZQUFsQixFQUFnQyxXQUFoQyxDQUE0QyxNQUE1QztBQUNILHlCQUpELE1BS0s7QUFDRCxpQ0FBSyxPQUFMLENBQWEsUUFBYixDQUFzQixNQUF0QjtBQUNBLGlDQUFLLE9BQUwsQ0FBYSxJQUFiLENBQWtCLElBQWxCLEVBQXdCLElBQXhCO0FBQ0EsaUNBQUssT0FBTCxDQUFhLElBQWIsQ0FBa0IsWUFBbEIsRUFBZ0MsUUFBaEMsQ0FBeUMsTUFBekM7QUFDSDtBQUNKOztBQUVELDJCQUFPLElBQVA7QUFDSCxpQjs7aUNBRUQsUSxxQkFBUyxJLEVBQUs7QUFDVix3QkFBSSxVQUFVLEtBQUssTUFBTCxDQUFZLFVBQVosQ0FBdUIsTUFBdkIsQ0FBK0I7QUFBQSwrQkFBUSxLQUFLLE1BQUwsQ0FBWSxJQUFaLEtBQXFCLElBQTdCO0FBQUEscUJBQS9CLEVBQW1FLENBQW5FLENBQWQ7QUFDQSwyQkFBTyxPQUFQO0FBQ0gsaUI7O2lDQUdELFksMkJBQWM7QUFDVix3QkFBSSxVQUFVLEtBQUssTUFBTCxDQUFZLFVBQVosQ0FBdUIsTUFBdkIsQ0FBK0I7QUFBQSwrQkFBUSxLQUFLLFFBQWI7QUFBQSxxQkFBL0IsRUFBc0QsQ0FBdEQsQ0FBZDs7QUFFQSx3QkFBRyxDQUFDLE9BQUosRUFBYTs7QUFFYix3QkFBRyxRQUFRLE1BQVIsQ0FBZSxVQUFsQixFQUE2QjtBQUN6Qiw2QkFBSyxPQUFMLEdBQWUsRUFBRSxLQUFLLE9BQVAsRUFBZ0IsSUFBaEIsQ0FBcUIsTUFBTSxRQUFRLE1BQVIsQ0FBZSxVQUExQyxDQUFmO0FBQ0EsNkJBQUssVUFBTCxHQUFrQixFQUFFLEtBQUssT0FBUCxFQUFnQixJQUFoQixDQUFxQixNQUFNLFFBQVEsTUFBUixDQUFlLElBQTFDLENBQWxCO0FBQ0EsNkJBQUssT0FBTCxDQUFhLFFBQWIsQ0FBc0IsbUJBQXRCO0FBQ0EsNkJBQUssT0FBTCxDQUFhLElBQWIsQ0FBa0IsWUFBbEIsRUFBZ0MsUUFBaEMsQ0FBeUMsTUFBekM7QUFDQSw2QkFBSyxVQUFMLENBQWdCLFFBQWhCLENBQXlCLFFBQXpCO0FBQ0gscUJBTkQsTUFNSztBQUNELDZCQUFLLE9BQUwsR0FBZSxFQUFFLEtBQUssT0FBUCxFQUFnQixJQUFoQixDQUFxQixNQUFNLFFBQVEsTUFBUixDQUFlLElBQTFDLENBQWY7QUFDQSw2QkFBSyxPQUFMLENBQWEsUUFBYixDQUFzQixjQUF0QjtBQUNIO0FBQ0osaUI7O2lDQUVELFUseUJBQVk7O0FBRVIsd0JBQUksV0FBVyxlQUFlLE9BQWYsQ0FBdUIsZ0JBQXZCLENBQWY7O0FBRUEsd0JBQUksYUFBYSxHQUFqQixFQUF1QjtBQUNuQiwwQkFBRSxNQUFGLEVBQVUsUUFBVixDQUFtQixxQkFBbkI7QUFDQSwwQkFBRSxvQkFBRixFQUF3QixRQUF4QixDQUFpQywwQkFBakM7QUFDSDtBQUNKLGlCOztpQ0FJRCxZLDJCQUFjO0FBQ1Ysd0JBQUksT0FBTyxFQUFFLE1BQUYsQ0FBWDtBQUNBLHdCQUFJLFVBQVUsRUFBRSxlQUFGLENBQWQ7QUFDQSx3QkFBSSxjQUFjLEVBQUUsb0JBQUYsQ0FBbEI7QUFDQSxzQkFBRSxpQkFBRixFQUFxQixPQUFyQixFQUE4QixXQUE5QixDQUEwQyxNQUExQzs7QUFFQSx3QkFBSSxLQUFLLFFBQUwsQ0FBYyxxQkFBZCxDQUFKLEVBQTBDO0FBQ3RDLDZCQUFLLFdBQUwsQ0FBaUIscUJBQWpCO0FBQ0Esb0NBQVksV0FBWixDQUF3QiwwQkFBeEI7QUFDQSx1Q0FBZSxPQUFmLENBQXVCLGdCQUF2QixFQUF5QyxHQUF6QztBQUNILHFCQUpELE1BSU87QUFDSCw2QkFBSyxRQUFMLENBQWMscUJBQWQ7QUFDQSxvQ0FBWSxRQUFaLENBQXFCLDBCQUFyQjtBQUNBLDRCQUFJLEtBQUssUUFBTCxDQUFjLG9CQUFkLENBQUosRUFBeUM7QUFDckMsd0NBQVksT0FBWixDQUFvQixZQUFwQjtBQUNIO0FBQ0QsdUNBQWUsT0FBZixDQUF1QixnQkFBdkIsRUFBeUMsR0FBekM7QUFDSDs7QUFFRCxzQkFBRSxNQUFGLEVBQVUsT0FBVixDQUFrQixRQUFsQjtBQUNILGlCIiwiZmlsZSI6Im1haW4vbmF2YmFyLmpzIiwic291cmNlUm9vdCI6Ii9zcmMifQ==
