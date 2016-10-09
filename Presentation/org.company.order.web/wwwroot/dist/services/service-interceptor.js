"use strict";

System.register([], function (_export, _context) {
    "use strict";

    var ServiceInterceptor;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [],
        execute: function () {
            _export("ServiceInterceptor", ServiceInterceptor = function () {
                function ServiceInterceptor() {
                    _classCallCheck(this, ServiceInterceptor);
                }

                ServiceInterceptor.prototype.request = function request(_request) {
                    return _request;
                };

                ServiceInterceptor.prototype.requestError = function requestError(error) {
                    throw error;
                };

                ServiceInterceptor.prototype.response = function response(_response) {
                    return _response;
                };

                ServiceInterceptor.prototype.responseError = function responseError(error) {
                    throw error;
                };

                return ServiceInterceptor;
            }());

            _export("ServiceInterceptor", ServiceInterceptor);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3NlcnZpY2UtaW50ZXJjZXB0b3IuanMiXSwibmFtZXMiOlsiU2VydmljZUludGVyY2VwdG9yIiwicmVxdWVzdCIsInJlcXVlc3RFcnJvciIsImVycm9yIiwicmVzcG9uc2UiLCJyZXNwb25zZUVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OzBDQUFhQSxrQjs7Ozs7NkNBRVRDLE8sb0JBQVFBLFEsRUFBUztBQUNiLDJCQUFPQSxRQUFQO0FBQ0gsaUI7OzZDQUVEQyxZLHlCQUFhQyxLLEVBQU07QUFDZiwwQkFBTUEsS0FBTjtBQUNILGlCOzs2Q0FFREMsUSxxQkFBU0EsUyxFQUFVO0FBQ2YsMkJBQU9BLFNBQVA7QUFDSCxpQjs7NkNBRURDLGEsMEJBQWNGLEssRUFBTTtBQUNoQiwwQkFBTUEsS0FBTjtBQUNILGlCIiwiZmlsZSI6InNlcnZpY2VzL3NlcnZpY2UtaW50ZXJjZXB0b3IuanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
