'use strict';

System.register(['bootstrap-touchspin', 'aurelia-framework'], function (_export, _context) {
    "use strict";

    var bindable, bindingMode, _dec, _class, NumberSpin;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_bootstrapTouchspin) {}, function (_aureliaFramework) {
            bindable = _aureliaFramework.bindable;
            bindingMode = _aureliaFramework.bindingMode;
        }],
        execute: function () {
            _export('NumberSpin', NumberSpin = (_dec = bindable({ name: "value", defaultBindingMode: bindingMode.twoWay }), _dec(_class = function () {
                function NumberSpin() {
                    _classCallCheck(this, NumberSpin);
                }

                NumberSpin.prototype.attached = function attached() {
                    this.start();

                    var self = this;

                    $(this.quantity).on("change", function (element) {
                        self.value = element.target.value;
                    });
                };

                NumberSpin.prototype.start = function start() {
                    $(this.quantity).TouchSpin({
                        buttondown_class: "btn quantity-down",
                        buttonup_class: "btn quantity-up"
                    });
                    $(".quantity-down").html("<i class='fa fa-angle-down'></i>");
                    $(".quantity-up").html("<i class='fa fa-angle-up'></i>");
                };

                return NumberSpin;
            }()) || _class));

            _export('NumberSpin', NumberSpin);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi9jb21wb25lbnRzL251bWJlci1zcGluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNRLG9CLHFCQUFBLFE7QUFBVSx1QixxQkFBQSxXOzs7a0NBR0wsVSxXQURaLFNBQVMsRUFBRSxNQUFNLE9BQVIsRUFBaUIsb0JBQW9CLFlBQVksTUFBakQsRUFBVCxDOzs7OztxQ0FJRyxRLHVCQUFVO0FBQ04seUJBQUssS0FBTDs7QUFFQSx3QkFBSSxPQUFPLElBQVg7O0FBRUEsc0JBQUUsS0FBSyxRQUFQLEVBQWlCLEVBQWpCLENBQW9CLFFBQXBCLEVBQTZCLFVBQUMsT0FBRCxFQUFhO0FBQ3RDLDZCQUFLLEtBQUwsR0FBYSxRQUFRLE1BQVIsQ0FBZSxLQUE1QjtBQUNILHFCQUZEO0FBR0gsaUI7O3FDQUVELEssb0JBQU87QUFDSCxzQkFBRSxLQUFLLFFBQVAsRUFBaUIsU0FBakIsQ0FBMkI7QUFDdkIsMENBQWtCLG1CQURLO0FBRXZCLHdDQUFnQjtBQUZPLHFCQUEzQjtBQUlBLHNCQUFFLGdCQUFGLEVBQW9CLElBQXBCLENBQXlCLGtDQUF6QjtBQUNBLHNCQUFFLGNBQUYsRUFBa0IsSUFBbEIsQ0FBdUIsZ0NBQXZCO0FBQ0gsaUIiLCJmaWxlIjoiY29tbW9uL2NvbXBvbmVudHMvbnVtYmVyLXNwaW4uanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
