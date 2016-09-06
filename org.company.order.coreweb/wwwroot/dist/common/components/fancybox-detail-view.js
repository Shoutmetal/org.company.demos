"use strict";

System.register(["aurelia-framework"], function (_export, _context) {
    "use strict";

    var bindable, bindingMode, _dec, _dec2, _dec3, _dec4, _class, FancyboxDetailView;

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
            _export("FancyboxDetailView", FancyboxDetailView = (_dec = bindable("name"), _dec2 = bindable("path"), _dec3 = bindable("target"), _dec4 = bindable({ name: "model", defaultBindingMode: bindingMode.twoWay }), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = function () {
                function FancyboxDetailView() {
                    _classCallCheck(this, FancyboxDetailView);
                }

                FancyboxDetailView.prototype.attached = function attached() {
                    $(".fancybox-fast-view").fancybox();
                };

                return FancyboxDetailView;
            }()) || _class) || _class) || _class) || _class));

            _export("FancyboxDetailView", FancyboxDetailView);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi9jb21wb25lbnRzL2ZhbmN5Ym94LWRldGFpbC12aWV3LmpzIl0sIm5hbWVzIjpbImJpbmRhYmxlIiwiYmluZGluZ01vZGUiLCJGYW5jeWJveERldGFpbFZpZXciLCJuYW1lIiwiZGVmYXVsdEJpbmRpbmdNb2RlIiwidHdvV2F5IiwiYXR0YWNoZWQiLCIkIiwiZmFuY3lib3giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFRQSxvQixxQkFBQUEsUTtBQUFVQyx1QixxQkFBQUEsVzs7OzBDQU1MQyxrQixXQUpaRixTQUFTLE1BQVQsQyxVQUNBQSxTQUFTLE1BQVQsQyxVQUNBQSxTQUFTLFFBQVQsQyxVQUNBQSxTQUFTLEVBQUVHLE1BQU0sT0FBUixFQUFpQkMsb0JBQW9CSCxZQUFZSSxNQUFqRCxFQUFULEM7Ozs7OzZDQUdHQyxRLHVCQUFVO0FBQ05DLHNCQUFFLHFCQUFGLEVBQXlCQyxRQUF6QjtBQUNILGlCIiwiZmlsZSI6ImNvbW1vbi9jb21wb25lbnRzL2ZhbmN5Ym94LWRldGFpbC12aWV3LmpzIiwic291cmNlUm9vdCI6Ii9zcmMifQ==
