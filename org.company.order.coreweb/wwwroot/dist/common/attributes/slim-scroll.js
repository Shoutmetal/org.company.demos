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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi9hdHRyaWJ1dGVzL3NsaW0tc2Nyb2xsLmpzIl0sIm5hbWVzIjpbImN1c3RvbUF0dHJpYnV0ZSIsImluamVjdCIsIlNsaW1TY3JvbGwiLCJFbGVtZW50IiwiZWxlbWVudCIsImF0dGFjaGVkIiwiaGVpZ2h0IiwiJCIsImF0dHIiLCJjc3MiLCJzbGltU2Nyb2xsIiwiYWxsb3dQYWdlU2Nyb2xsIiwic2l6ZSIsImNvbG9yIiwicmFpbENvbG9yIiwicG9zaXRpb24iLCJhbHdheXNWaXNpYmxlIiwicmFpbFZpc2libGUiLCJkaXNhYmxlRmFkZU91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQVFBLDJCLHFCQUFBQSxlO0FBQWlCQyxrQixxQkFBQUEsTTs7O2tDQUtaQyxVLFdBRlpGLGdCQUFnQixZQUFoQixDLFVBQ0FDLE9BQU9FLE9BQVAsQztBQUdHLG9DQUFZQyxPQUFaLEVBQW9CO0FBQUE7O0FBQ2hCLHlCQUFLQSxPQUFMLEdBQWVBLE9BQWY7QUFDSDs7cUNBRURDLFEsdUJBQVU7QUFDTix3QkFBSUMsTUFBSjtBQUNBLHdCQUFJQyxFQUFFLEtBQUtILE9BQVAsRUFBZ0JJLElBQWhCLENBQXFCLGFBQXJCLENBQUosRUFDSUYsU0FBU0MsRUFBRSxLQUFLSCxPQUFQLEVBQWdCSSxJQUFoQixDQUFxQixhQUFyQixDQUFULENBREosS0FHSUYsU0FBU0MsRUFBRSxLQUFLSCxPQUFQLEVBQWdCSyxHQUFoQixDQUFvQixRQUFwQixDQUFUOztBQUVKRixzQkFBRSxLQUFLSCxPQUFQLEVBQWdCTSxVQUFoQixDQUEyQjtBQUN2QkMseUNBQWlCLElBRE07QUFFdkJDLDhCQUFNLEtBRmlCO0FBR3ZCQywrQkFBTyxNQUhnQjtBQUl2QkMsbUNBQVcsU0FKWTtBQUt2QkMsa0NBQVMsT0FMYztBQU12QlQsZ0NBQVFBLE1BTmU7QUFPdkJVLHVDQUFlLElBUFE7QUFRdkJDLHFDQUFhLElBUlU7QUFTdkJDLHdDQUFnQjtBQVRPLHFCQUEzQjtBQVlILGlCIiwiZmlsZSI6ImNvbW1vbi9hdHRyaWJ1dGVzL3NsaW0tc2Nyb2xsLmpzIiwic291cmNlUm9vdCI6Ii9zcmMifQ==
