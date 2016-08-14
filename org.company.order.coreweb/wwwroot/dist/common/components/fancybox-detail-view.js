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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi9jb21wb25lbnRzL2ZhbmN5Ym94LWRldGFpbC12aWV3LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFRLG9CLHFCQUFBLFE7QUFBVSx1QixxQkFBQSxXOzs7MENBTUwsa0IsV0FKWixTQUFTLE1BQVQsQyxVQUNBLFNBQVMsTUFBVCxDLFVBQ0EsU0FBUyxRQUFULEMsVUFDQSxTQUFTLEVBQUUsTUFBTSxPQUFSLEVBQWlCLG9CQUFvQixZQUFZLE1BQWpELEVBQVQsQzs7Ozs7NkNBR0csUSx1QkFBVTtBQUNOLHNCQUFFLHFCQUFGLEVBQXlCLFFBQXpCO0FBQ0gsaUIiLCJmaWxlIjoiY29tbW9uL2NvbXBvbmVudHMvZmFuY3lib3gtZGV0YWlsLXZpZXcuanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
