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
                    if (error.statusCode == 401) {}
                    throw error;
                };

                return ServiceInterceptor;
            }());

            _export("ServiceInterceptor", ServiceInterceptor);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3NlcnZpY2UtaW50ZXJjZXB0b3IuanMiXSwibmFtZXMiOlsiU2VydmljZUludGVyY2VwdG9yIiwicmVxdWVzdCIsInJlcXVlc3RFcnJvciIsImVycm9yIiwicmVzcG9uc2UiLCJyZXNwb25zZUVycm9yIiwic3RhdHVzQ29kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OzswQ0FBYUEsa0I7Ozs7OzZDQUVUQyxPLG9CQUFRQSxRLEVBQVM7QUFDYiwyQkFBT0EsUUFBUDtBQUNILGlCOzs2Q0FFREMsWSx5QkFBYUMsSyxFQUFNO0FBQ2YsMEJBQU1BLEtBQU47QUFDSCxpQjs7NkNBRURDLFEscUJBQVNBLFMsRUFBVTtBQUNmLDJCQUFPQSxTQUFQO0FBQ0gsaUI7OzZDQUVEQyxhLDBCQUFjRixLLEVBQU07QUFDaEIsd0JBQUlBLE1BQU1HLFVBQU4sSUFBb0IsR0FBeEIsRUFBNkIsQ0FFNUI7QUFDRCwwQkFBTUgsS0FBTjtBQUNILGlCIiwiZmlsZSI6InNlcnZpY2VzL3NlcnZpY2UtaW50ZXJjZXB0b3IuanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
