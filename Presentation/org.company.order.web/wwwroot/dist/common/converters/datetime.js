'use strict';

System.register(['moment'], function (_export, _context) {
    "use strict";

    var moment, DateFormatValueConverter;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_moment) {
            moment = _moment.default;
        }],
        execute: function () {
            _export('DateFormatValueConverter', DateFormatValueConverter = function () {
                function DateFormatValueConverter() {
                    _classCallCheck(this, DateFormatValueConverter);
                }

                DateFormatValueConverter.prototype.toView = function toView(value) {

                    return moment(new Date(value)).format('DD/MM/YYYY hh:mm');
                };

                return DateFormatValueConverter;
            }());

            _export('DateFormatValueConverter', DateFormatValueConverter);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi9jb252ZXJ0ZXJzL2RhdGV0aW1lLmpzIl0sIm5hbWVzIjpbIm1vbWVudCIsIkRhdGVGb3JtYXRWYWx1ZUNvbnZlcnRlciIsInRvVmlldyIsInZhbHVlIiwiRGF0ZSIsImZvcm1hdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQU9BLGtCOzs7Z0RBRU1DLHdCOzs7OzttREFDVEMsTSxtQkFBT0MsSyxFQUFPOztBQUVWLDJCQUFPSCxPQUFPLElBQUlJLElBQUosQ0FBU0QsS0FBVCxDQUFQLEVBQXdCRSxNQUF4QixDQUErQixrQkFBL0IsQ0FBUDtBQUNILGlCIiwiZmlsZSI6ImNvbW1vbi9jb252ZXJ0ZXJzL2RhdGV0aW1lLmpzIiwic291cmNlUm9vdCI6Ii9zcmMifQ==
