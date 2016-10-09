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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4vbmF2YmFyLmpzIl0sIm5hbWVzIjpbImluamVjdCIsIkV2ZW50QWdncmVnYXRvciIsIk5hdkJhciIsIkVsZW1lbnQiLCJlbGVtZW50IiwiZXZlbnQiLCJjdXJyZW50Iiwic2VsZWN0ZWQiLCJleHBhbmRlZCIsInJvdXRlIiwicGFyZW50U3ViIiwiY3VycmVudFN1YiIsInNlbGVjdGVkU3ViIiwiYWN0aXZhdGUiLCJyb3V0ZXIiLCJhdHRhY2hlZCIsImRlZmF1bHRSb3V0ZSIsImNvb2tpZU1lbnUiLCJzdWJzY3JpYmUiLCJpbnN0cnVjdGlvbiIsImNvbmZpZyIsInBhcmVudE5hbWUiLCIkIiwiZmluZCIsIm5hbWUiLCJpcyIsInJlbW92ZUNsYXNzIiwiaGlkZSIsImFkZENsYXNzIiwib3BlbiIsImhhc0NoaWxkcyIsImlzT3BlbiIsImhhc0NsYXNzIiwiZWFjaCIsInNob3ciLCJnZXRSb3V0ZSIsIm5hdmlnYXRpb24iLCJmaWx0ZXIiLCJpdGVtIiwiaXNBY3RpdmUiLCJpc0Nsb3NlZCIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsInNsaWRlclRvZ2dsZSIsImJvZHkiLCJzaWRlYmFyIiwic2lkZWJhck1lbnUiLCJzZXRJdGVtIiwidHJpZ2dlciIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQVFBLGtCLHFCQUFBQSxNOztBQUNBQywyQiwyQkFBQUEsZTs7OzhCQUdLQyxNLFdBRFpGLE9BQU9HLE9BQVAsRUFBZ0JGLGVBQWhCLEM7QUFHRyxnQ0FBWUcsT0FBWixFQUFxQkMsS0FBckIsRUFBMkI7QUFBQTs7QUFDdkIseUJBQUtELE9BQUwsR0FBZUEsT0FBZjtBQUNBLHlCQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSx5QkFBS0MsT0FBTCxHQUFlLElBQWY7QUFDQSx5QkFBS0MsUUFBTCxHQUFnQixJQUFoQjtBQUNBLHlCQUFLQyxRQUFMLEdBQWdCLElBQWhCO0FBQ0EseUJBQUtDLEtBQUwsR0FBYSxJQUFiOztBQUVBLHlC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
