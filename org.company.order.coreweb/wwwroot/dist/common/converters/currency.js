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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi9jb252ZXJ0ZXJzL2N1cnJlbmN5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFPLG1COzs7b0RBRU0sNEI7Ozs7O3VEQUNULE0sbUJBQU8sSyxFQUFPOztBQUVWLHdCQUFHLENBQUMsS0FBSixFQUNJLE9BQU8sUUFBUSxDQUFSLEVBQVcsTUFBWCxDQUFrQixXQUFsQixDQUFQOztBQUVKLDJCQUFPLFFBQVEsS0FBUixFQUFlLE1BQWYsQ0FBc0IsV0FBdEIsQ0FBUDtBQUNILGlCIiwiZmlsZSI6ImNvbW1vbi9jb252ZXJ0ZXJzL2N1cnJlbmN5LmpzIiwic291cmNlUm9vdCI6Ii9zcmMifQ==
