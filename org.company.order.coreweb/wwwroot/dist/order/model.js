'use strict';

System.register(['aurelia-validatejs', 'aurelia-validation', 'aurelia-dependency-injection', 'aurelia-framework'], function (_export, _context) {
    "use strict";

    var required, validateTrigger, ValidationController, Container, computedFrom, _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, Product;

    function _initDefineProp(target, property, descriptor, context) {
        if (!descriptor) return;
        Object.defineProperty(target, property, {
            enumerable: descriptor.enumerable,
            configurable: descriptor.configurable,
            writable: descriptor.writable,
            value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
        });
    }

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

    function _initializerWarningHelper(descriptor, context) {
        throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
    }

    return {
        setters: [function (_aureliaValidatejs) {
            required = _aureliaValidatejs.required;
        }, function (_aureliaValidation) {
            validateTrigger = _aureliaValidation.validateTrigger;
            ValidationController = _aureliaValidation.ValidationController;
        }, function (_aureliaDependencyInjection) {
            Container = _aureliaDependencyInjection.Container;
        }, function (_aureliaFramework) {
            computedFrom = _aureliaFramework.computedFrom;
        }],
        execute: function () {
            _export('Product', Product = (_class = function Product(product) {
                _classCallCheck(this, Product);

                _initDefineProp(this, 'productId', _descriptor, this);

                _initDefineProp(this, 'name', _descriptor2, this);

                _initDefineProp(this, 'description', _descriptor3, this);

                _initDefineProp(this, 'price', _descriptor4, this);

                _initDefineProp(this, 'imageUrl', _descriptor5, this);

                this.productTypeId = 0;

                _initDefineProp(this, 'quantity', _descriptor6, this);

                this.inventories = [];


                $.extend(this, product);

                var container = Container.instance;
                var controller = container.registerTransient(ValidationController);

                this.controller = controller;
                this.controller.validateTrigger = validateTrigger.change;
            }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'productId', [required], {
                enumerable: true,
                initializer: function initializer() {
                    return 0;
                }
            }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'name', [required], {
                enumerable: true,
                initializer: function initializer() {
                    return "";
                }
            }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'description', [required], {
                enumerable: true,
                initializer: function initializer() {
                    return "";
                }
            }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'price', [required], {
                enumerable: true,
                initializer: function initializer() {
                    return 0.0;
                }
            }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, 'imageUrl', [required], {
                enumerable: true,
                initializer: function initializer() {
                    return "";
                }
            }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, 'quantity', [required], {
                enumerable: true,
                initializer: function initializer() {
                    return 1;
                }
            })), _class));

            _export('Product', Product);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyL21vZGVsLmpzIl0sIm5hbWVzIjpbInJlcXVpcmVkIiwidmFsaWRhdGVUcmlnZ2VyIiwiVmFsaWRhdGlvbkNvbnRyb2xsZXIiLCJDb250YWluZXIiLCJjb21wdXRlZEZyb20iLCJQcm9kdWN0IiwicHJvZHVjdCIsInByb2R1Y3RUeXBlSWQiLCJpbnZlbnRvcmllcyIsIiQiLCJleHRlbmQiLCJjb250YWluZXIiLCJpbnN0YW5jZSIsImNvbnRyb2xsZXIiLCJyZWdpc3RlclRyYW5zaWVudCIsImNoYW5nZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFRQSxvQixzQkFBQUEsUTs7QUFDQUMsMkIsc0JBQUFBLGU7QUFDQUMsZ0Msc0JBQUFBLG9COztBQUNBQyxxQiwrQkFBQUEsUzs7QUFDQUMsd0IscUJBQUFBLFk7OzsrQkFFS0MsTyxhQXdCVCxpQkFBWUMsT0FBWixFQUFxQjtBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBLHFCQVByQkMsYUFPcUIsR0FQTCxDQU9LOztBQUFBOztBQUFBLHFCQUZyQkMsV0FFcUIsR0FGUCxFQUVPOzs7QUFFakJDLGtCQUFFQyxNQUFGLENBQVMsSUFBVCxFQUFlSixPQUFmOztBQUVBLG9CQUFJSyxZQUFZUixVQUFVUyxRQUExQjtBQUNBLG9CQUFJQyxhQUFhRixVQUFVRyxpQkFBVixDQUE0Qlosb0JBQTVCLENBQWpCOztBQUVBLHFCQUFLVyxVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLHFCQUFLQSxVQUFMLENBQWdCWixlQUFoQixHQUFrQ0EsZ0JBQWdCYyxNQUFsRDtBQUNILGEsMkVBL0JBZixROzs7MkJBQ1csQzs7b0ZBRVhBLFE7OzsyQkFDTSxFOzsyRkFFTkEsUTs7OzJCQUNhLEU7O3FGQUViQSxROzs7MkJBQ08sRzs7d0ZBRVBBLFE7OzsyQkFDVSxFOzt3RkFJVkEsUTs7OzJCQUNVLEMiLCJmaWxlIjoib3JkZXIvbW9kZWwuanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
