'use strict';

System.register(['aurelia-framework', 'owl.carousel'], function (_export, _context) {
    "use strict";

    var bindable, computedFrom, _createClass, _dec, _dec2, _dec3, _dec4, _class, _desc, _value, _class2, Carousel;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
        var desc = {};
        Object['ke' + 'ys'](descriptor).forEach(function (key) {
            desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;

        if ('value' in desc || desc.initializer) {
            desc.writable = true;
        }

        desc = decorators.slice().reverse().reduce(function (desc, decorator) {
            return decorator(target, property, desc) || desc;
        }, desc);

        if (context && desc.initializer !== void 0) {
            desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
            desc.initializer = undefined;
        }

        if (desc.initializer === void 0) {
            Object['define' + 'Property'](target, property, desc);
            desc = null;
        }

        return desc;
    }

    return {
        setters: [function (_aureliaFramework) {
            bindable = _aureliaFramework.bindable;
            computedFrom = _aureliaFramework.computedFrom;
        }, function (_owlCarousel) {}],
        execute: function () {
            _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            _export('Carousel', Carousel = (_dec = bindable({ name: "items" }), _dec2 = bindable({ name: "path" }), _dec3 = computedFrom('items'), _dec4 = computedFrom('items'), _dec(_class = _dec2(_class = (_class2 = function () {
                function Carousel() {
                    _classCallCheck(this, Carousel);
                }

                Carousel.prototype.detached = function detached() {
                    $(this.carousel).trigger('destroy.owl.carousel');
                };

                Carousel.prototype.start = function start() {
                    $(this.carousel).owlCarousel({
                        nav: true,
                        items: 5,
                        onInitialized: this.callback,
                        responsive: {
                            0: { items: 1 },
                            480: { items: 2 },
                            700: { items: 3 },
                            992: { items: 4 },
                            1200: { items: 5 }
                        }

                    });
                };

                _createClass(Carousel, [{
                    key: 'first',
                    get: function get() {
                        return this.items[0];
                    }
                }, {
                    key: 'last',
                    get: function get() {
                        return this.items[this.items.length - 1];
                    }
                }]);

                return Carousel;
            }(), (_applyDecoratedDescriptor(_class2.prototype, 'first', [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, 'first'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'last', [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, 'last'), _class2.prototype)), _class2)) || _class) || _class));

            _export('Carousel', Carousel);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi9jb21wb25lbnRzL2Nhcm91c2VsLmpzIl0sIm5hbWVzIjpbImJpbmRhYmxlIiwiY29tcHV0ZWRGcm9tIiwiQ2Fyb3VzZWwiLCJuYW1lIiwiZGV0YWNoZWQiLCIkIiwiY2Fyb3VzZWwiLCJ0cmlnZ2VyIiwic3RhcnQiLCJvd2xDYXJvdXNlbCIsIm5hdiIsIml0ZW1zIiwib25Jbml0aWFsaXplZCIsImNhbGxiYWNrIiwicmVzcG9uc2l2ZSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBUUEsb0IscUJBQUFBLFE7QUFBVUMsd0IscUJBQUFBLFk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQ0FLTEMsUSxXQUZaRixTQUFTLEVBQUNHLE1BQUssT0FBTixFQUFULEMsVUFDQUgsU0FBUyxFQUFDRyxNQUFLLE1BQU4sRUFBVCxDLFVBeUJJRixhQUFhLE9BQWIsQyxVQUtBQSxhQUFhLE9BQWIsQzs7Ozs7bUNBM0JERyxRLHVCQUNBO0FBQ0lDLHNCQUFFLEtBQUtDLFFBQVAsRUFBaUJDLE9BQWpCLENBQXlCLHNCQUF6QjtBQUNILGlCOzttQ0FFREMsSyxvQkFBTztBQUNISCxzQkFBRSxLQUFLQyxRQUFQLEVBQWlCRyxXQUFqQixDQUE2QjtBQUN6QkMsNkJBQUssSUFEb0I7QUFFekJDLCtCQUFPLENBRmtCO0FBR3pCQyx1Q0FBZSxLQUFLQyxRQUhLO0FBSXpCQyxvQ0FBVztBQUNQLCtCQUFLLEVBQUVILE9BQU0sQ0FBUixFQURFO0FBRVAsaUNBQUssRUFBRUEsT0FBTSxDQUFSLEVBRkU7QUFHUCxpQ0FBSyxFQUFFQSxPQUFNLENBQVIsRUFIRTtBQUlQLGlDQUFLLEVBQUVBLE9BQU0sQ0FBUixFQUpFO0FBS1Asa0NBQUssRUFBRUEsT0FBTSxDQUFSO0FBTEU7O0FBSmMscUJBQTdCO0FBY0gsaUI7Ozs7d0NBR1U7QUFDUCwrQkFBTyxLQUFLQSxLQUFMLENBQVcsQ0FBWCxDQUFQO0FBQ0g7Ozt3Q0FHUztBQUNOLCtCQUFPLEtBQUtBLEtBQUwsQ0FBVyxLQUFLQSxLQUFMLENBQVdJLE1BQVgsR0FBb0IsQ0FBL0IsQ0FBUDtBQUNIIiwiZmlsZSI6ImNvbW1vbi9jb21wb25lbnRzL2Nhcm91c2VsLmpzIiwic291cmNlUm9vdCI6Ii9zcmMifQ==
