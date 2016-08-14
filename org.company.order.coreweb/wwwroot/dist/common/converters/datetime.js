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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi9jb252ZXJ0ZXJzL2RhdGV0aW1lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFPLGtCOzs7Z0RBRU0sd0I7Ozs7O21EQUNULE0sbUJBQU8sSyxFQUFPOztBQUVWLDJCQUFPLE9BQU8sSUFBSSxJQUFKLENBQVMsS0FBVCxDQUFQLEVBQXdCLE1BQXhCLENBQStCLGtCQUEvQixDQUFQO0FBQ0gsaUIiLCJmaWxlIjoiY29tbW9uL2NvbnZlcnRlcnMvZGF0ZXRpbWUuanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
