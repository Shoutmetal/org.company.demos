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
                    this.pause = false;

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
                        if (!me.pause) {
                            me.expiresIn--;

                            console.log("event listener : ", me.expiresIn);

                            if (!me.expiresIn) {
                                me.event.publish("event::inactivity");
                                clearInterval(inverval);
                                me.expiresIn = me.restartTime;
                                inverval = setInterval(fn, me.sandbox);
                            }
                        }
                    };

                    var inverval = setInterval(fn, this.sandbox);
                };

                return ServiceEventListener;
            }()) || _class));

            _export('ServiceEventListener', ServiceEventListener);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3NlcnZpY2UtZXZlbnQtbGlzdGVuZXIuanMiXSwibmFtZXMiOlsiaW5qZWN0IiwiRXZlbnRBZ2dyZWdhdG9yIiwiU2VydmljZUV2ZW50TGlzdGVuZXIiLCJldmVudCIsImV4cGlyZXNJbiIsInJlc3RhcnRUaW1lIiwic2FuZGJveCIsInBhdXNlIiwiaGFuZGxlQm9keUNsaWNrIiwiYWRkRXZlbnRzIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNvbmZpZ3VyZSIsImNvbmZpZyIsInN0YXJ0IiwibWUiLCJmbiIsImNvbnNvbGUiLCJsb2ciLCJwdWJsaXNoIiwiY2xlYXJJbnRlcnZhbCIsImludmVydmFsIiwic2V0SW50ZXJ2YWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFRQSxrQixxQkFBQUEsTTs7QUFDQUMsMkIsMkJBQUFBLGU7Ozs0Q0FHS0Msb0IsV0FEWkYsT0FBT0MsZUFBUCxDO0FBR0csOENBQVlFLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZix5QkFBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0EseUJBQUtDLFNBQUwsR0FBaUIsQ0FBakI7QUFDQSx5QkFBS0MsV0FBTCxHQUFtQixDQUFuQjtBQUNBLHlCQUFLQyxPQUFMLEdBQWUsSUFBZjtBQUNBLHlCQUFLQyxLQUFMLEdBQWEsS0FBYjs7QUFFQSx5QkFBS0MsZUFBTCxHQUF1QixhQUFLO0FBQ3hCLDhCQUFLSixTQUFMLEdBQWlCLE1BQUtDLFdBQXRCO0FBQ0gscUJBRkQ7QUFHSDs7K0NBRURJLFMsd0JBQVc7QUFDUEMsNkJBQVNDLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLEtBQUtILGVBQXhDO0FBQ0FFLDZCQUFTQyxnQkFBVCxDQUEwQixXQUExQixFQUF1QyxLQUFLSCxlQUE1QztBQUNBRSw2QkFBU0MsZ0JBQVQsQ0FBMEIsV0FBMUIsRUFBdUMsS0FBS0gsZUFBNUM7QUFDQUUsNkJBQVNDLGdCQUFULENBQTBCLFVBQTFCLEVBQXNDLEtBQUtILGVBQTNDO0FBQ0FFLDZCQUFTQyxnQkFBVCxDQUEwQixnQkFBMUIsRUFBNEMsS0FBS0gsZUFBakQ7QUFDQUUsNkJBQVNDLGdCQUFULENBQTBCLFlBQTFCLEVBQXdDLEtBQUtILGVBQTdDO0FBQ0FFLDZCQUFTQyxnQkFBVCxDQUEwQixXQUExQixFQUF1QyxLQUFLSCxlQUE1QztBQUNBRSw2QkFBU0MsZ0JBQVQsQ0FBMEIsZUFBMUIsRUFBMkMsS0FBS0gsZUFBaEQ7QUFDSCxpQjs7K0NBRURJLFksMkJBQWM7QUFDVkYsNkJBQVNHLG1CQUFULENBQTZCLE9BQTdCLEVBQXNDLEtBQUtMLGVBQTNDO0FBQ0FFLDZCQUFTRyxtQkFBVCxDQUE2QixXQUE3QixFQUEwQyxLQUFLTCxlQUEvQztBQUNBRSw2QkFBU0csbUJBQVQsQ0FBNkIsV0FBN0IsRUFBMEMsS0FBS0wsZUFBL0M7QUFDQUUsNkJBQVNHLG1CQUFULENBQTZCLFVBQTdCLEVBQXlDLEtBQUtMLGVBQTlDO0FBQ0FFLDZCQUFTRyxtQkFBVCxDQUE2QixnQkFBN0IsRUFBK0MsS0FBS0wsZUFBcEQ7QUFDQUUsNkJBQVNHLG1CQUFULENBQTZCLFlBQTdCLEVBQTJDLEtBQUtMLGVBQWhEO0FBQ0FFLDZCQUFTRyxtQkFBVCxDQUE2QixXQUE3QixFQUEwQyxLQUFLTCxlQUEvQztBQUNBRSw2QkFBU0csbUJBQVQsQ0FBNkIsZUFBN0IsRUFBOEMsS0FBS0wsZUFBbkQ7QUFDSCxpQjs7K0NBRURNLFMsc0JBQVVDLE0sRUFBTztBQUNiLHlCQUFLVCxPQUFMLEdBQWVTLE9BQU9ULE9BQVAsSUFBa0IsS0FBS0EsT0FBdEM7QUFDQSx5QkFBS0YsU0FBTCxHQUFpQlcsT0FBT1gsU0FBeEI7QUFDQSx5QkFBS0MsV0FBTCxHQUFtQixLQUFLRCxTQUF4QjtBQUNILGlCOzsrQ0FFRFksSyxvQkFBTzs7QUFFSCx5QkFBS1AsU0FBTDs7QUFFQSx3QkFBSVEsS0FBSyxJQUFUOztBQUVBLHdCQUFJQyxLQUFLLFNBQUxBLEVBQUssR0FBTTtBQUNYLDRCQUFHLENBQUNELEdBQUdWLEtBQVAsRUFBYTtBQUNUVSwrQkFBR2IsU0FBSDs7QUFFQWUsb0NBQVFDLEdBQVIsQ0FBWSxtQkFBWixFQUFpQ0gsR0FBR2IsU0FBcEM7O0FBRUEsZ0NBQUcsQ0FBQ2EsR0FBR2IsU0FBUCxFQUNBO0FBQ0lhLG1DQUFHZCxLQUFILENBQVNrQixPQUFULENBQWlCLG1CQUFqQjtBQUNBQyw4Q0FBY0MsUUFBZDtBQUNBTixtQ0FBR2IsU0FBSCxHQUFlYSxHQUFHWixXQUFsQjtBQUNBa0IsMkNBQVdDLFlBQVlOLEVBQVosRUFBZ0JELEdBQUdYLE9BQW5CLENBQVg7QUFDSDtBQUNKO0FBRUoscUJBZkQ7O0FBaUJBLHdCQUFJaUIsV0FBV0MsWUFBWU4sRUFBWixFQUFnQixLQUFLWixPQUFyQixDQUFmO0FBRUgsaUIiLCJmaWxlIjoic2VydmljZXMvc2VydmljZS1ldmVudC1saXN0ZW5lci5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
