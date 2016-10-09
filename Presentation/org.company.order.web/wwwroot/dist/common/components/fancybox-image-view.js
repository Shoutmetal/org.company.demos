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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi9jb21wb25lbnRzL2ZhbmN5Ym94LWltYWdlLXZpZXcuanMiXSwibmFtZXMiOlsiYmluZGFibGUiLCJGYW5jeWJveEltYWdlVmlldyIsImF0dGFjaGVkIiwiJCIsImZhbmN5Ym94IiwiZ3JvdXBBdHRyIiwicHJldkVmZmVjdCIsIm5leHRFZmZlY3QiLCJjbG9zZUJ0biIsImhlbHBlcnMiLCJ0aXRsZSIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFRQSxvQixxQkFBQUEsUTs7O3lDQUlLQyxpQixXQUZaRCxTQUFTLE1BQVQsQyxVQUNBQSxTQUFTLFVBQVQsQzs7Ozs7NENBR0dFLFEsdUJBQVU7QUFDTkMsc0JBQUUsa0JBQUYsRUFBc0JDLFFBQXRCLENBQStCO0FBQzNCQyxtQ0FBVyxVQURnQjtBQUUzQkMsb0NBQVksTUFGZTtBQUczQkMsb0NBQVksTUFIZTtBQUkzQkMsa0NBQVUsSUFKaUI7QUFLM0JDLGlDQUFTO0FBQ0xDLG1DQUFPO0FBQ0hDLHNDQUFNO0FBREg7QUFERjtBQUxrQixxQkFBL0I7QUFXSCxpQiIsImZpbGUiOiJjb21tb24vY29tcG9uZW50cy9mYW5jeWJveC1pbWFnZS12aWV3LmpzIiwic291cmNlUm9vdCI6Ii9zcmMifQ==
