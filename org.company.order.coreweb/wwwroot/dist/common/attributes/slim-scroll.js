'use strict';

System.register(['aurelia-framework', 'jquery-slimscroll'], function (_export, _context) {
    "use strict";

    var customAttribute, inject, _dec, _dec2, _class, SlimScroll;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_aureliaFramework) {
            customAttribute = _aureliaFramework.customAttribute;
            inject = _aureliaFramework.inject;
        }, function (_jquerySlimscroll) {}],
        execute: function () {
            _export('SlimScroll', SlimScroll = (_dec = customAttribute("slimscroll"), _dec2 = inject(Element), _dec(_class = _dec2(_class = function () {
                function SlimScroll(element) {
                    _classCallCheck(this, SlimScroll);

                    this.element = element;
                }

                SlimScroll.prototype.attached = function attached() {
                    var height;
                    if ($(this.element).attr("data-height")) height = $(this.element).attr("data-height");else height = $(this.element).css('height');

                    $(this.element).slimScroll({
                        allowPageScroll: true,
                        size: '7px',
                        color: '#bbb',
                        railColor: '#eaeaea',
                        position: 'right',
                        height: height,
                        alwaysVisible: true,
                        railVisible: true,
                        disableFadeOut: true
                    });
                };

                return SlimScroll;
            }()) || _class) || _class));

            _export('SlimScroll', SlimScroll);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi9hdHRyaWJ1dGVzL3NsaW0tc2Nyb2xsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFRLDJCLHFCQUFBLGU7QUFBaUIsa0IscUJBQUEsTTs7O2tDQUtaLFUsV0FGWixnQkFBZ0IsWUFBaEIsQyxVQUNBLE9BQU8sT0FBUCxDO0FBR0csb0NBQVksT0FBWixFQUFvQjtBQUFBOztBQUNoQix5QkFBSyxPQUFMLEdBQWUsT0FBZjtBQUNIOztxQ0FFRCxRLHVCQUFVO0FBQ04sd0JBQUksTUFBSjtBQUNBLHdCQUFJLEVBQUUsS0FBSyxPQUFQLEVBQWdCLElBQWhCLENBQXFCLGFBQXJCLENBQUosRUFDSSxTQUFTLEVBQUUsS0FBSyxPQUFQLEVBQWdCLElBQWhCLENBQXFCLGFBQXJCLENBQVQsQ0FESixLQUdJLFNBQVMsRUFBRSxLQUFLLE9BQVAsRUFBZ0IsR0FBaEIsQ0FBb0IsUUFBcEIsQ0FBVDs7QUFFSixzQkFBRSxLQUFLLE9BQVAsRUFBZ0IsVUFBaEIsQ0FBMkI7QUFDdkIseUNBQWlCLElBRE07QUFFdkIsOEJBQU0sS0FGaUI7QUFHdkIsK0JBQU8sTUFIZ0I7QUFJdkIsbUNBQVcsU0FKWTtBQUt2QixrQ0FBUyxPQUxjO0FBTXZCLGdDQUFRLE1BTmU7QUFPdkIsdUNBQWUsSUFQUTtBQVF2QixxQ0FBYSxJQVJVO0FBU3ZCLHdDQUFnQjtBQVRPLHFCQUEzQjtBQVlILGlCIiwiZmlsZSI6ImNvbW1vbi9hdHRyaWJ1dGVzL3NsaW0tc2Nyb2xsLmpzIiwic291cmNlUm9vdCI6Ii9zcmMifQ==
