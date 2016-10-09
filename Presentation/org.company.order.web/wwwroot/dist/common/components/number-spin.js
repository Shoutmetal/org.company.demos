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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi9jb21wb25lbnRzL251bWJlci1zcGluLmpzIl0sIm5hbWVzIjpbImJpbmRhYmxlIiwiYmluZGluZ01vZGUiLCJOdW1iZXJTcGluIiwibmFtZSIsImRlZmF1bHRCaW5kaW5nTW9kZSIsInR3b1dheSIsImF0dGFjaGVkIiwic3RhcnQiLCJzZWxmIiwiJCIsInF1YW50aXR5Iiwib24iLCJlbGVtZW50IiwidmFsdWUiLCJ0YXJnZXQiLCJUb3VjaFNwaW4iLCJidXR0b25kb3duX2NsYXNzIiwiYnV0dG9udXBfY2xhc3MiLCJodG1sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDUUEsb0IscUJBQUFBLFE7QUFBVUMsdUIscUJBQUFBLFc7OztrQ0FHTEMsVSxXQURaRixTQUFTLEVBQUVHLE1BQU0sT0FBUixFQUFpQkMsb0JBQW9CSCxZQUFZSSxNQUFqRCxFQUFULEM7Ozs7O3FDQUlHQyxRLHVCQUFVO0FBQ04seUJBQUtDLEtBQUw7O0FBRUEsd0JBQUlDLE9BQU8sSUFBWDs7QUFFQUMsc0JBQUUsS0FBS0MsUUFBUCxFQUFpQkMsRUFBakIsQ0FBb0IsUUFBcEIsRUFBNkIsVUFBQ0MsT0FBRCxFQUFhO0FBQ3RDSiw2QkFBS0ssS0FBTCxHQUFhRCxRQUFRRSxNQUFSLENBQWVELEtBQTVCO0FBQ0gscUJBRkQ7QUFHSCxpQjs7cUNBRUROLEssb0JBQU87QUFDSEUsc0JBQUUsS0FBS0MsUUFBUCxFQUFpQkssU0FBakIsQ0FBMkI7QUFDdkJDLDBDQUFrQixtQkFESztBQUV2QkMsd0NBQWdCO0FBRk8scUJBQTNCO0FBSUFSLHNCQUFFLGdCQUFGLEVBQW9CUyxJQUFwQixDQUF5QixrQ0FBekI7QUFDQVQsc0JBQUUsY0FBRixFQUFrQlMsSUFBbEIsQ0FBdUIsZ0NBQXZCO0FBQ0gsaUIiLCJmaWxlIjoiY29tbW9uL2NvbXBvbmVudHMvbnVtYmVyLXNwaW4uanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
