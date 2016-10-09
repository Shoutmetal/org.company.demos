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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZ3VyYXRpb24vYm9vdHN0cmFwLXZhbGlkYXRpb24vYm9vdHN0cmFwLWZvcm0tdmFsaWRhdGlvbi1yZW5kZXJlci5qcyJdLCJuYW1lcyI6WyJpbmplY3QiLCJ2YWxpZGF0aW9uUmVuZGVyZXIiLCJCb290c3RyYXBGb3JtVmFsaWRhdGlvblJlbmRlcmVyIiwiRWxlbWVudCIsImJvdW5kYXJ5RWxlbWVudCIsInJlbmRlciIsImVycm9yIiwidGFyZ2V0IiwiY29udGFpbnMiLCJlcnJvcnMiLCJNYXAiLCJzZXQiLCJmb3JtR3JvdXAiLCJxdWVyeVNlbGVjdG9yIiwiY2xvc2VzdCIsImNsYXNzTGlzdCIsImFkZCIsIm1lc3NhZ2UiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImFwcGVuZENoaWxkIiwidW5yZW5kZXIiLCJoYXMiLCJkZWxldGUiLCJyZW1vdmUiLCJtZXNzYWdlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpIiwibGVuZ3RoIiwiRUxFTUVOVCIsIm1hdGNoZXMiLCJtb3pNYXRjaGVzU2VsZWN0b3IiLCJtc01hdGNoZXNTZWxlY3RvciIsIm9NYXRjaGVzU2VsZWN0b3IiLCJ3ZWJraXRNYXRjaGVzU2VsZWN0b3IiLCJzZWxlY3RvciIsImVsZW1lbnQiLCJwYXJlbnRFbGVtZW50IiwicHJvdG90eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBUUEsa0IscUJBQUFBLE07O0FBQ0FDLDhCLHNCQUFBQSxrQjs7O3VEQUlLQywrQixXQURaRixPQUFPRyxPQUFQLEMsRUFEQUYsa0I7QUFHRyx5REFBWUcsZUFBWixFQUE2QjtBQUFBOztBQUN6Qix5QkFBS0EsZUFBTCxHQUF1QkEsZUFBdkI7QUFDSDs7MERBRURDLE0sbUJBQU9DLEssRUFBT0MsTSxFQUFRO0FBQ2xCLHdCQUFJLENBQUNBLE1BQUQsSUFBVyxFQUFFLEtBQUtILGVBQUwsS0FBeUJHLE1BQXpCLElBQW1DLEtBQUtILGVBQUwsQ0FBcUJJLFFBQXJCLENBQThCRCxNQUE5QixDQUFyQyxDQUFmLEVBQTRGO0FBQ3hGO0FBQ0g7O0FBR0RBLDJCQUFPRSxNQUFQLEdBQWlCRixPQUFPRSxNQUFQLElBQWlCLElBQUlDLEdBQUosRUFBbEM7QUFDQUgsMkJBQU9FLE1BQVAsQ0FBY0UsR0FBZCxDQUFrQkwsS0FBbEI7O0FBR0Esd0JBQU1NLFlBQVlMLE9BQU9NLGFBQVAsQ0FBcUIsYUFBckIsS0FBdUNOLE9BQU9PLE9BQVAsQ0FBZSxhQUFmLENBQXpEO0FBQ0FGLDhCQUFVRyxTQUFWLENBQW9CQyxHQUFwQixDQUF3QixXQUF4Qjs7QUFHQSx3QkFBTUMsVUFBVUMsU0FBU0MsYUFBVCxDQUF1QixNQUF2QixDQUFoQjtBQUNBRiw0QkFBUUYsU0FBUixDQUFrQkMsR0FBbEIsQ0FBc0IsWUFBdEI7QUFDQUMsNEJBQVFGLFNBQVIsQ0FBa0JDLEdBQWxCLENBQXNCLGtCQUF0QjtBQUNBQyw0QkFBUUcsV0FBUixHQUFzQmQsTUFBTVcsT0FBNUI7QUFDQUEsNEJBQVFYLEtBQVIsR0FBZ0JBLEtBQWhCO0FBQ0FNLDhCQUFVUyxXQUFWLENBQXNCSixPQUF0QjtBQUNILGlCOzswREFFREssUSxxQkFBU2hCLEssRUFBT0MsTSxFQUFRO0FBQ3BCLHdCQUFJLENBQUNBLE1BQUQsSUFBVyxDQUFDQSxPQUFPRSxNQUFuQixJQUE2QixDQUFDRixPQUFPRSxNQUFQLENBQWNjLEdBQWQsQ0FBa0JqQixLQUFsQixDQUFsQyxFQUE0RDtBQUN4RDtBQUNIO0FBQ0RDLDJCQUFPRSxNQUFQLENBQWNlLE1BQWQsQ0FBcUJsQixLQUFyQjs7QUFHQSx3QkFBTU0sWUFBWUwsT0FBT00sYUFBUCxDQUFxQixhQUFyQixLQUF1Q04sT0FBT08sT0FBUCxDQUFlLGFBQWYsQ0FBekQ7QUFDQUYsOEJBQVVHLFNBQVYsQ0FBb0JVLE1BQXBCLENBQTJCLFdBQTNCOztBQUdBLHdCQUFJQyxXQUFXZCxVQUFVZSxnQkFBVixDQUEyQixtQkFBM0IsQ0FBZjtBQUNBLHdCQUFJQyxJQUFJRixTQUFTRyxNQUFqQjtBQUNBLDJCQUFNRCxHQUFOLEVBQVc7QUFDUCw0QkFBSVgsVUFBVVMsU0FBU0UsQ0FBVCxDQUFkO0FBQ0EsNEJBQUlYLFFBQVFYLEtBQVIsS0FBa0JBLEtBQXRCLEVBQTZCO0FBQ3pCO0FBQ0g7QUFDRFcsZ0NBQVFYLEtBQVIsR0FBZ0IsSUFBaEI7QUFDQVcsZ0NBQVFRLE1BQVI7QUFDSDtBQUNKLGlCOzs7Ozs7O0FBS0osdUJBQVVLLE9BQVYsRUFBbUI7QUFDaEJBLHdCQUFRQyxPQUFSLEdBQWtCRCxRQUFRQyxPQUFSLElBQW1CRCxRQUFRRSxrQkFBM0IsSUFBaURGLFFBQVFHLGlCQUF6RCxJQUE4RUgsUUFBUUksZ0JBQXRGLElBQTBHSixRQUFRSyxxQkFBcEk7O0FBRUFMLHdCQUFRaEIsT0FBUixHQUFrQmdCLFFBQVFoQixPQUFSLElBQW1CLFNBQVNBLE9BQVQsQ0FBaUJzQixRQUFqQixFQUEyQjtBQUM1RCx3QkFBSUMsVUFBVSxJQUFkOztBQUVBLDJCQUFPQSxPQUFQLEVBQWdCO0FBQ1osNEJBQUlBLFFBQVFOLE9BQVIsQ0FBZ0JLLFFBQWhCLENBQUosRUFBK0I7QUFDM0I7QUFDSDs7QUFFREMsa0NBQVVBLFFBQVFDLGFBQWxCO0FBQ0g7O0FBRUQsMkJBQU9ELE9BQVA7QUFDSCxpQkFaRDtBQWFILGFBaEJBLEVBZ0JDbEMsUUFBUW9DLFNBaEJULENBQUQiLCJmaWxlIjoiY29uZmlndXJhdGlvbi9ib290c3RyYXAtdmFsaWRhdGlvbi9ib290c3RyYXAtZm9ybS12YWxpZGF0aW9uLXJlbmRlcmVyLmpzIiwic291cmNlUm9vdCI6Ii9zcmMifQ==
