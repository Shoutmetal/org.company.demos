"use strict";

System.register(["aurelia-framework"], function (_export, _context) {
    "use strict";

    var bindable, bindingMode, _dec, _class, count, Spinner;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_aureliaFramework) {
            bindable = _aureliaFramework.bindable;
            bindingMode = _aureliaFramework.bindingMode;
        }],
        execute: function () {
            count = 1;

            _export("Spinner", Spinner = (_dec = bindable({ name: "spin" }), _dec(_class = function () {
                function Spinner() {
                    _classCallCheck(this, Spinner);
                }

                Spinner.prototype.on = function on() {
                    count++;
                    this.calculate();
                };

                Spinner.prototype.off = function off() {
                    count--;
                    this.calculate();
                };

                Spinner.prototype.spinChanged = function spinChanged(spin) {
                    if (spin) count++;else count--;

                    this.calculate();
                };

                Spinner.prototype.calculate = function calculate() {
                    if (count === 0) $("#spinner").hide();else $("#spinner").is(":visible") ? '' : $("#spinner").show();
                };

                return Spinner;
            }()) || _class));

            _export("Spinner", Spinner);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi9jb21wb25lbnRzL3NwaW5uZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQVEsb0IscUJBQUEsUTtBQUFVLHVCLHFCQUFBLFc7OztBQUVkLGlCLEdBQVEsQzs7K0JBR0MsTyxXQURaLFNBQVMsRUFBRSxNQUFNLE1BQVIsRUFBVCxDOzs7OztrQ0FHRyxFLGlCQUFJO0FBQ0E7QUFDQSx5QkFBSyxTQUFMO0FBQ0gsaUI7O2tDQUVELEcsa0JBQUs7QUFDRDtBQUNBLHlCQUFLLFNBQUw7QUFDSCxpQjs7a0NBRUQsVyx3QkFBWSxJLEVBQUs7QUFDYix3QkFBRyxJQUFILEVBQ0ksUUFESixLQUdJOztBQUVKLHlCQUFLLFNBQUw7QUFDSCxpQjs7a0NBRUQsUyx3QkFBVztBQUNQLHdCQUFHLFVBQVUsQ0FBYixFQUNJLEVBQUUsVUFBRixFQUFjLElBQWQsR0FESixLQUdJLEVBQUUsVUFBRixFQUFjLEVBQWQsQ0FBaUIsVUFBakIsSUFBK0IsRUFBL0IsR0FBb0MsRUFBRSxVQUFGLEVBQWMsSUFBZCxFQUFwQztBQUNQLGlCIiwiZmlsZSI6ImNvbW1vbi9jb21wb25lbnRzL3NwaW5uZXIuanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
