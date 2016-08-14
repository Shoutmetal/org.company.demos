"use strict";

System.register(["aurelia-framework"], function (_export, _context) {
    "use strict";

    var bindable, _dec, _dec2, _class, FancyboxImageView;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_aureliaFramework) {
            bindable = _aureliaFramework.bindable;
        }],
        execute: function () {
            _export("FancyboxImageView", FancyboxImageView = (_dec = bindable("name"), _dec2 = bindable("imageUrl"), _dec(_class = _dec2(_class = function () {
                function FancyboxImageView() {
                    _classCallCheck(this, FancyboxImageView);
                }

                FancyboxImageView.prototype.attached = function attached() {
                    $(".fancybox-button").fancybox({
                        groupAttr: 'data-rel',
                        prevEffect: 'none',
                        nextEffect: 'none',
                        closeBtn: true,
                        helpers: {
                            title: {
                                type: 'inside'
                            }
                        }
                    });
                };

                return FancyboxImageView;
            }()) || _class) || _class));

            _export("FancyboxImageView", FancyboxImageView);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi9jb21wb25lbnRzL2ZhbmN5Ym94LWltYWdlLXZpZXcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQVEsb0IscUJBQUEsUTs7O3lDQUlLLGlCLFdBRlosU0FBUyxNQUFULEMsVUFDQSxTQUFTLFVBQVQsQzs7Ozs7NENBR0csUSx1QkFBVTtBQUNOLHNCQUFFLGtCQUFGLEVBQXNCLFFBQXRCLENBQStCO0FBQzNCLG1DQUFXLFVBRGdCO0FBRTNCLG9DQUFZLE1BRmU7QUFHM0Isb0NBQVksTUFIZTtBQUkzQixrQ0FBVSxJQUppQjtBQUszQixpQ0FBUztBQUNMLG1DQUFPO0FBQ0gsc0NBQU07QUFESDtBQURGO0FBTGtCLHFCQUEvQjtBQVdILGlCIiwiZmlsZSI6ImNvbW1vbi9jb21wb25lbnRzL2ZhbmN5Ym94LWltYWdlLXZpZXcuanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
