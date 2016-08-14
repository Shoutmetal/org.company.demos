'use strict';

System.register(['aurelia-framework', 'aurelia-validation'], function (_export, _context) {
    "use strict";

    var inject, validationRenderer, _dec, _class, BootstrapFormValidationRenderer;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
        }, function (_aureliaValidation) {
            validationRenderer = _aureliaValidation.validationRenderer;
        }],
        execute: function () {
            _export('BootstrapFormValidationRenderer', BootstrapFormValidationRenderer = (_dec = inject(Element), validationRenderer(_class = _dec(_class = function () {
                function BootstrapFormValidationRenderer(boundaryElement) {
                    _classCallCheck(this, BootstrapFormValidationRenderer);

                    this.boundaryElement = boundaryElement;
                }

                BootstrapFormValidationRenderer.prototype.render = function render(error, target) {
                    if (!target || !(this.boundaryElement === target || this.boundaryElement.contains(target))) {
                        return;
                    }

                    target.errors = target.errors || new Map();
                    target.errors.set(error);

                    var formGroup = target.querySelector('.form-group') || target.closest('.form-group');
                    formGroup.classList.add('has-error');

                    var message = document.createElement('span');
                    message.classList.add('help-block');
                    message.classList.add('validation-error');
                    message.textContent = error.message;
                    message.error = error;
                    formGroup.appendChild(message);
                };

                BootstrapFormValidationRenderer.prototype.unrender = function unrender(error, target) {
                    if (!target || !target.errors || !target.errors.has(error)) {
                        return;
                    }
                    target.errors.delete(error);

                    var formGroup = target.querySelector('.form-group') || target.closest('.form-group');
                    formGroup.classList.remove('has-error');

                    var messages = formGroup.querySelectorAll('.validation-error');
                    var i = messages.length;
                    while (i--) {
                        var message = messages[i];
                        if (message.error !== error) {
                            continue;
                        }
                        message.error = null;
                        message.remove();
                    }
                };

                return BootstrapFormValidationRenderer;
            }()) || _class) || _class));

            _export('BootstrapFormValidationRenderer', BootstrapFormValidationRenderer);

            (function (ELEMENT) {
                ELEMENT.matches = ELEMENT.matches || ELEMENT.mozMatchesSelector || ELEMENT.msMatchesSelector || ELEMENT.oMatchesSelector || ELEMENT.webkitMatchesSelector;

                ELEMENT.closest = ELEMENT.closest || function closest(selector) {
                    var element = this;

                    while (element) {
                        if (element.matches(selector)) {
                            break;
                        }

                        element = element.parentElement;
                    }

                    return element;
                };
            })(Element.prototype);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZ3VyYXRpb24vYm9vdHN0cmFwLXZhbGlkYXRpb24vYm9vdHN0cmFwLWZvcm0tdmFsaWRhdGlvbi1yZW5kZXJlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBUSxrQixxQkFBQSxNOztBQUNBLDhCLHNCQUFBLGtCOzs7dURBSUssK0IsV0FEWixPQUFPLE9BQVAsQyxFQURBLGtCO0FBR0cseURBQVksZUFBWixFQUE2QjtBQUFBOztBQUN6Qix5QkFBSyxlQUFMLEdBQXVCLGVBQXZCO0FBQ0g7OzBEQUVELE0sbUJBQU8sSyxFQUFPLE0sRUFBUTtBQUNsQix3QkFBSSxDQUFDLE1BQUQsSUFBVyxFQUFFLEtBQUssZUFBTCxLQUF5QixNQUF6QixJQUFtQyxLQUFLLGVBQUwsQ0FBcUIsUUFBckIsQ0FBOEIsTUFBOUIsQ0FBckMsQ0FBZixFQUE0RjtBQUN4RjtBQUNIOztBQUdELDJCQUFPLE1BQVAsR0FBaUIsT0FBTyxNQUFQLElBQWlCLElBQUksR0FBSixFQUFsQztBQUNBLDJCQUFPLE1BQVAsQ0FBYyxHQUFkLENBQWtCLEtBQWxCOztBQUdBLHdCQUFNLFlBQVksT0FBTyxhQUFQLENBQXFCLGFBQXJCLEtBQXVDLE9BQU8sT0FBUCxDQUFlLGFBQWYsQ0FBekQ7QUFDQSw4QkFBVSxTQUFWLENBQW9CLEdBQXBCLENBQXdCLFdBQXhCOztBQUdBLHdCQUFNLFVBQVUsU0FBUyxhQUFULENBQXVCLE1BQXZCLENBQWhCO0FBQ0EsNEJBQVEsU0FBUixDQUFrQixHQUFsQixDQUFzQixZQUF0QjtBQUNBLDRCQUFRLFNBQVIsQ0FBa0IsR0FBbEIsQ0FBc0Isa0JBQXRCO0FBQ0EsNEJBQVEsV0FBUixHQUFzQixNQUFNLE9BQTVCO0FBQ0EsNEJBQVEsS0FBUixHQUFnQixLQUFoQjtBQUNBLDhCQUFVLFdBQVYsQ0FBc0IsT0FBdEI7QUFDSCxpQjs7MERBRUQsUSxxQkFBUyxLLEVBQU8sTSxFQUFRO0FBQ3BCLHdCQUFJLENBQUMsTUFBRCxJQUFXLENBQUMsT0FBTyxNQUFuQixJQUE2QixDQUFDLE9BQU8sTUFBUCxDQUFjLEdBQWQsQ0FBa0IsS0FBbEIsQ0FBbEMsRUFBNEQ7QUFDeEQ7QUFDSDtBQUNELDJCQUFPLE1BQVAsQ0FBYyxNQUFkLENBQXFCLEtBQXJCOztBQUdBLHdCQUFNLFlBQVksT0FBTyxhQUFQLENBQXFCLGFBQXJCLEtBQXVDLE9BQU8sT0FBUCxDQUFlLGFBQWYsQ0FBekQ7QUFDQSw4QkFBVSxTQUFWLENBQW9CLE1BQXBCLENBQTJCLFdBQTNCOztBQUdBLHdCQUFJLFdBQVcsVUFBVSxnQkFBVixDQUEyQixtQkFBM0IsQ0FBZjtBQUNBLHdCQUFJLElBQUksU0FBUyxNQUFqQjtBQUNBLDJCQUFNLEdBQU4sRUFBVztBQUNQLDRCQUFJLFVBQVUsU0FBUyxDQUFULENBQWQ7QUFDQSw0QkFBSSxRQUFRLEtBQVIsS0FBa0IsS0FBdEIsRUFBNkI7QUFDekI7QUFDSDtBQUNELGdDQUFRLEtBQVIsR0FBZ0IsSUFBaEI7QUFDQSxnQ0FBUSxNQUFSO0FBQ0g7QUFDSixpQjs7Ozs7OztBQUtKLHVCQUFVLE9BQVYsRUFBbUI7QUFDaEIsd0JBQVEsT0FBUixHQUFrQixRQUFRLE9BQVIsSUFBbUIsUUFBUSxrQkFBM0IsSUFBaUQsUUFBUSxpQkFBekQsSUFBOEUsUUFBUSxnQkFBdEYsSUFBMEcsUUFBUSxxQkFBcEk7O0FBRUEsd0JBQVEsT0FBUixHQUFrQixRQUFRLE9BQVIsSUFBbUIsU0FBUyxPQUFULENBQWlCLFFBQWpCLEVBQTJCO0FBQzVELHdCQUFJLFVBQVUsSUFBZDs7QUFFQSwyQkFBTyxPQUFQLEVBQWdCO0FBQ1osNEJBQUksUUFBUSxPQUFSLENBQWdCLFFBQWhCLENBQUosRUFBK0I7QUFDM0I7QUFDSDs7QUFFRCxrQ0FBVSxRQUFRLGFBQWxCO0FBQ0g7O0FBRUQsMkJBQU8sT0FBUDtBQUNILGlCQVpEO0FBYUgsYUFoQkEsRUFnQkMsUUFBUSxTQWhCVCxDQUFEIiwiZmlsZSI6ImNvbmZpZ3VyYXRpb24vYm9vdHN0cmFwLXZhbGlkYXRpb24vYm9vdHN0cmFwLWZvcm0tdmFsaWRhdGlvbi1yZW5kZXJlci5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
