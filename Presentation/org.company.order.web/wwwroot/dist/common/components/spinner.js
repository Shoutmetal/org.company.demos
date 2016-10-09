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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi9jb21wb25lbnRzL3NwaW5uZXIuanMiXSwibmFtZXMiOlsiYmluZGFibGUiLCJiaW5kaW5nTW9kZSIsImNvdW50IiwiU3Bpbm5lciIsIm5hbWUiLCJvbiIsImNhbGN1bGF0ZSIsIm9mZiIsInNwaW5DaGFuZ2VkIiwic3BpbiIsIiQiLCJoaWRlIiwiaXMiLCJzaG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBUUEsb0IscUJBQUFBLFE7QUFBVUMsdUIscUJBQUFBLFc7OztBQUVkQyxpQixHQUFRLEM7OytCQUdDQyxPLFdBRFpILFNBQVMsRUFBRUksTUFBTSxNQUFSLEVBQVQsQzs7Ozs7a0NBR0dDLEUsaUJBQUk7QUFDQUg7QUFDQSx5QkFBS0ksU0FBTDtBQUNILGlCOztrQ0FFREMsRyxrQkFBSztBQUNETDtBQUNBLHlCQUFLSSxTQUFMO0FBQ0gsaUI7O2tDQUVERSxXLHdCQUFZQyxJLEVBQUs7QUFDYix3QkFBR0EsSUFBSCxFQUNJUCxRQURKLEtBR0lBOztBQUVKLHlCQUFLSSxTQUFMO0FBQ0gsaUI7O2tDQUVEQSxTLHdCQUFXO0FBQ1Asd0JBQUdKLFVBQVUsQ0FBYixFQUNJUSxFQUFFLFVBQUYsRUFBY0MsSUFBZCxHQURKLEtBR0lELEVBQUUsVUFBRixFQUFjRSxFQUFkLENBQWlCLFVBQWpCLElBQStCLEVBQS9CLEdBQW9DRixFQUFFLFVBQUYsRUFBY0csSUFBZCxFQUFwQztBQUNQLGlCIiwiZmlsZSI6ImNvbW1vbi9jb21wb25lbnRzL3NwaW5uZXIuanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
