'use strict';

System.register(['numeral'], function (_export, _context) {
    "use strict";

    var numeral, CurrencyFormatValueConverter;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_numeral) {
            numeral = _numeral.default;
        }],
        execute: function () {
            _export('CurrencyFormatValueConverter', CurrencyFormatValueConverter = function () {
                function CurrencyFormatValueConverter() {
                    _classCallCheck(this, CurrencyFormatValueConverter);
                }

                CurrencyFormatValueConverter.prototype.toView = function toView(value) {

                    if (!value) return numeral(0).format('($0,0.00)');

                    return numeral(value).format('($0,0.00)');
                };

                return CurrencyFormatValueConverter;
            }());

            _export('CurrencyFormatValueConverter', CurrencyFormatValueConverter);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi9jb252ZXJ0ZXJzL2N1cnJlbmN5LmpzIl0sIm5hbWVzIjpbIm51bWVyYWwiLCJDdXJyZW5jeUZvcm1hdFZhbHVlQ29udmVydGVyIiwidG9WaWV3IiwidmFsdWUiLCJmb3JtYXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFPQSxtQjs7O29EQUVNQyw0Qjs7Ozs7dURBQ1RDLE0sbUJBQU9DLEssRUFBTzs7QUFFVix3QkFBRyxDQUFDQSxLQUFKLEVBQ0ksT0FBT0gsUUFBUSxDQUFSLEVBQVdJLE1BQVgsQ0FBa0IsV0FBbEIsQ0FBUDs7QUFFSiwyQkFBT0osUUFBUUcsS0FBUixFQUFlQyxNQUFmLENBQXNCLFdBQXRCLENBQVA7QUFDSCxpQiIsImZpbGUiOiJjb21tb24vY29udmVydGVycy9jdXJyZW5jeS5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
