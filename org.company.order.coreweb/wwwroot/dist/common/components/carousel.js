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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi9jb21wb25lbnRzL2Nhcm91c2VsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVEsb0IscUJBQUEsUTtBQUFVLHdCLHFCQUFBLFk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQ0FLTCxRLFdBRlosU0FBUyxFQUFDLE1BQUssT0FBTixFQUFULEMsVUFDQSxTQUFTLEVBQUMsTUFBSyxNQUFOLEVBQVQsQyxVQXlCSSxhQUFhLE9BQWIsQyxVQUtBLGFBQWEsT0FBYixDOzs7OzttQ0EzQkQsUSx1QkFDQTtBQUNJLHNCQUFFLEtBQUssUUFBUCxFQUFpQixPQUFqQixDQUF5QixzQkFBekI7QUFDSCxpQjs7bUNBRUQsSyxvQkFBTztBQUNILHNCQUFFLEtBQUssUUFBUCxFQUFpQixXQUFqQixDQUE2QjtBQUN6Qiw2QkFBSyxJQURvQjtBQUV6QiwrQkFBTyxDQUZrQjtBQUd6Qix1Q0FBZSxLQUFLLFFBSEs7QUFJekIsb0NBQVc7QUFDUCwrQkFBSyxFQUFFLE9BQU0sQ0FBUixFQURFO0FBRVAsaUNBQUssRUFBRSxPQUFNLENBQVIsRUFGRTtBQUdQLGlDQUFLLEVBQUUsT0FBTSxDQUFSLEVBSEU7QUFJUCxpQ0FBSyxFQUFFLE9BQU0sQ0FBUixFQUpFO0FBS1Asa0NBQUssRUFBRSxPQUFNLENBQVI7QUFMRTs7QUFKYyxxQkFBN0I7QUFjSCxpQjs7Ozt3Q0FHVTtBQUNQLCtCQUFPLEtBQUssS0FBTCxDQUFXLENBQVgsQ0FBUDtBQUNIOzs7d0NBR1M7QUFDTiwrQkFBTyxLQUFLLEtBQUwsQ0FBVyxLQUFLLEtBQUwsQ0FBVyxNQUFYLEdBQW9CLENBQS9CLENBQVA7QUFDSCIsImZpbGUiOiJjb21tb24vY29tcG9uZW50cy9jYXJvdXNlbC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
