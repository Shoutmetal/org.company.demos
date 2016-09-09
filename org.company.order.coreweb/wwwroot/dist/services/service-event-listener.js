'use strict';

System.register(['aurelia-framework', 'aurelia-event-aggregator'], function (_export, _context) {
    "use strict";

    var inject, EventAggregator, _dec, _class, ServiceEventListener;

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
            _export('ServiceEventListener', ServiceEventListener = (_dec = inject(EventAggregator), _dec(_class = function () {
                function ServiceEventListener(event) {
                    var _this = this;

                    _classCallCheck(this, ServiceEventListener);

                    this.event = event;
                    this.expiresIn = 0;
                    this.restartTime = 0;
                    this.sandbox = 1000;
                    this._pause = false;

                    this.handleBodyClick = function (e) {
                        _this.expiresIn = _this.restartTime;
                    };
                }

                ServiceEventListener.prototype.addEvents = function addEvents() {
                    document.addEventListener('click', this.handleBodyClick);
                    document.addEventListener("mousemove", this.handleBodyClick);
                    document.addEventListener("mousedown", this.handleBodyClick);
                    document.addEventListener("keypress", this.handleBodyClick);
                    document.addEventListener("DOMMouseScroll", this.handleBodyClick);
                    document.addEventListener("mousewheel", this.handleBodyClick);
                    document.addEventListener("touchmove", this.handleBodyClick);
                    document.addEventListener("MSPointerMove", this.handleBodyClick);
                };

                ServiceEventListener.prototype.removeEvents = function removeEvents() {
                    document.removeEventListener('click', this.handleBodyClick);
                    document.removeEventListener("mousemove", this.handleBodyClick);
                    document.removeEventListener("mousedown", this.handleBodyClick);
                    document.removeEventListener("keypress", this.handleBodyClick);
                    document.removeEventListener("DOMMouseScroll", this.handleBodyClick);
                    document.removeEventListener("mousewheel", this.handleBodyClick);
                    document.removeEventListener("touchmove", this.handleBodyClick);
                    document.removeEventListener("MSPointerMove", this.handleBodyClick);
                };

                ServiceEventListener.prototype.configure = function configure(config) {
                    this.sandbox = config.sandbox || this.sandbox;
                    this.expiresIn = config.expiresIn;
                    this.restartTime = this.expiresIn;
                };

                ServiceEventListener.prototype.start = function start() {
                    this.addEvents();

                    var me = this;

                    var fn = function fn() {
                        if (!me._pause) {
                            me.expiresIn--;

                            if (!me.expiresIn) {
                                me.event.publish("event::inactivity");
                                me._pause = true;
                                clearInterval(inverval);
                                me.expiresIn = me.restartTime;
                                inverval = setInterval(fn, me.sandbox);
                            }
                        }
                    };

                    var inverval = setInterval(fn, this.sandbox);
                };

                ServiceEventListener.prototype.pause = function pause() {
                    this._pause = true;
                };

                ServiceEventListener.prototype.continue = function _continue() {
                    this._pause = false;
                };

                return ServiceEventListener;
            }()) || _class));

            _export('ServiceEventListener', ServiceEventListener);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3NlcnZpY2UtZXZlbnQtbGlzdGVuZXIuanMiXSwibmFtZXMiOlsiaW5qZWN0IiwiRXZlbnRBZ2dyZWdhdG9yIiwiU2VydmljZUV2ZW50TGlzdGVuZXIiLCJldmVudCIsImV4cGlyZXNJbiIsInJlc3RhcnRUaW1lIiwic2FuZGJveCIsIl9wYXVzZSIsImhhbmRsZUJvZHlDbGljayIsImFkZEV2ZW50cyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50cyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjb25maWd1cmUiLCJjb25maWciLCJzdGFydCIsIm1lIiwiZm4iLCJwdWJsaXNoIiwiY2xlYXJJbnRlcnZhbCIsImludmVydmFsIiwic2V0SW50ZXJ2YWwiLCJwYXVzZSIsImNvbnRpbnVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBUUEsa0IscUJBQUFBLE07O0FBQ0FDLDJCLDJCQUFBQSxlOzs7NENBR0tDLG9CLFdBRFpGLE9BQU9DLGVBQVAsQztBQUdHLDhDQUFZRSxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YseUJBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNBLHlCQUFLQyxTQUFMLEdBQWlCLENBQWpCO0FBQ0EseUJBQUtDLFdBQUwsR0FBbUIsQ0FBbkI7QUFDQSx5QkFBS0MsT0FBTCxHQUFlLElBQWY7QUFDQSx5QkFBS0MsTUFBTCxHQUFjLEtBQWQ7O0FBRUEseUJBQUtDLGVBQUwsR0FBdUIsYUFBSztBQUN4Qiw4QkFBS0osU0FBTCxHQUFpQixNQUFLQyxXQUF0QjtBQUNILHFCQUZEO0FBR0g7OytDQUVESSxTLHdCQUFXO0FBQ1BDLDZCQUFTQyxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxLQUFLSCxlQUF4QztBQUNBRSw2QkFBU0MsZ0JBQVQsQ0FBMEIsV0FBMUIsRUFBdUMsS0FBS0gsZUFBNUM7QUFDQUUsNkJBQVNDLGdCQUFULENBQTBCLFdBQTFCLEVBQXVDLEtBQUtILGVBQTVDO0FBQ0FFLDZCQUFTQyxnQkFBVCxDQUEwQixVQUExQixFQUFzQyxLQUFLSCxlQUEzQztBQUNBRSw2QkFBU0MsZ0JBQVQsQ0FBMEIsZ0JBQTFCLEVBQTRDLEtBQUtILGVBQWpEO0FBQ0FFLDZCQUFTQyxnQkFBVCxDQUEwQixZQUExQixFQUF3QyxLQUFLSCxlQUE3QztBQUNBRSw2QkFBU0MsZ0JBQVQsQ0FBMEIsV0FBMUIsRUFBdUMsS0FBS0gsZUFBNUM7QUFDQUUsNkJBQVNDLGdCQUFULENBQTBCLGVBQTFCLEVBQTJDLEtBQUtILGVBQWhEO0FBQ0gsaUI7OytDQUVESSxZLDJCQUFjO0FBQ1ZGLDZCQUFTRyxtQkFBVCxDQUE2QixPQUE3QixFQUFzQyxLQUFLTCxlQUEzQztBQUNBRSw2QkFBU0csbUJBQVQsQ0FBNkIsV0FBN0IsRUFBMEMsS0FBS0wsZUFBL0M7QUFDQUUsNkJBQVNHLG1CQUFULENBQTZCLFdBQTdCLEVBQTBDLEtBQUtMLGVBQS9DO0FBQ0FFLDZCQUFTRyxtQkFBVCxDQUE2QixVQUE3QixFQUF5QyxLQUFLTCxlQUE5QztBQUNBRSw2QkFBU0csbUJBQVQsQ0FBNkIsZ0JBQTdCLEVBQStDLEtBQUtMLGVBQXBEO0FBQ0FFLDZCQUFTRyxtQkFBVCxDQUE2QixZQUE3QixFQUEyQyxLQUFLTCxlQUFoRDtBQUNBRSw2QkFBU0csbUJBQVQsQ0FBNkIsV0FBN0IsRUFBMEMsS0FBS0wsZUFBL0M7QUFDQUUsNkJBQVNHLG1CQUFULENBQTZCLGVBQTdCLEVBQThDLEtBQUtMLGVBQW5EO0FBQ0gsaUI7OytDQUVETSxTLHNCQUFVQyxNLEVBQU87QUFDYix5QkFBS1QsT0FBTCxHQUFlUyxPQUFPVCxPQUFQLElBQWtCLEtBQUtBLE9BQXRDO0FBQ0EseUJBQUtGLFNBQUwsR0FBaUJXLE9BQU9YLFNBQXhCO0FBQ0EseUJBQUtDLFdBQUwsR0FBbUIsS0FBS0QsU0FBeEI7QUFDSCxpQjs7K0NBRURZLEssb0JBQU87QUFDSCx5QkFBS1AsU0FBTDs7QUFFQSx3QkFBSVEsS0FBSyxJQUFUOztBQUVBLHdCQUFJQyxLQUFLLFNBQUxBLEVBQUssR0FBTTtBQUNYLDRCQUFHLENBQUNELEdBQUdWLE1BQVAsRUFBYztBQUNWVSwrQkFBR2IsU0FBSDs7QUFFQSxnQ0FBRyxDQUFDYSxHQUFHYixTQUFQLEVBQ0E7QUFDSWEsbUNBQUdkLEtBQUgsQ0FBU2dCLE9BQVQsQ0FBaUIsbUJBQWpCO0FBQ0FGLG1DQUFHVixNQUFILEdBQVUsSUFBVjtBQUNBYSw4Q0FBY0MsUUFBZDtBQUNBSixtQ0FBR2IsU0FBSCxHQUFlYSxHQUFHWixXQUFsQjtBQUNBZ0IsMkNBQVdDLFlBQVlKLEVBQVosRUFBZ0JELEdBQUdYLE9BQW5CLENBQVg7QUFDSDtBQUNKO0FBRUoscUJBZEQ7O0FBZ0JBLHdCQUFJZSxXQUFXQyxZQUFZSixFQUFaLEVBQWdCLEtBQUtaLE9BQXJCLENBQWY7QUFFSCxpQjs7K0NBRURpQixLLG9CQUFPO0FBQ0gseUJBQUtoQixNQUFMLEdBQWMsSUFBZDtBQUNILGlCOzsrQ0FFRGlCLFEsd0JBQVU7QUFDTix5QkFBS2pCLE1BQUwsR0FBYyxLQUFkO0FBQ0gsaUIiLCJmaWxlIjoic2VydmljZXMvc2VydmljZS1ldmVudC1saXN0ZW5lci5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
