'use strict';

System.register([], function (_export, _context) {
    "use strict";

    var ServiceEventListener;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [],
        execute: function () {
            _export('ServiceEventListener', ServiceEventListener = function () {
                function ServiceEventListener() {
                    _classCallCheck(this, ServiceEventListener);

                    this.handleBodyClick = function (e) {
                        console.log(e.target);
                    };
                }

                ServiceEventListener.prototype.attached = function attached() {
                    document.addEventListener('click', this.handleBodyClick);
                };

                ServiceEventListener.prototype.detached = function detached() {
                    document.removeEventListener('click', this.handleBodyClick);
                };

                return ServiceEventListener;
            }());

            _export('ServiceEventListener', ServiceEventListener);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3NlcnZpY2UtZXZlbnQtbGlzdGVuZXIuanMiXSwibmFtZXMiOlsiU2VydmljZUV2ZW50TGlzdGVuZXIiLCJoYW5kbGVCb2R5Q2xpY2siLCJjb25zb2xlIiwibG9nIiwiZSIsInRhcmdldCIsImF0dGFjaGVkIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZGV0YWNoZWQiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OzRDQUFhQSxvQjtBQUVULGdEQUFjO0FBQUE7O0FBQ1YseUJBQUtDLGVBQUwsR0FBdUIsYUFBSztBQUN4QkMsZ0NBQVFDLEdBQVIsQ0FBWUMsRUFBRUMsTUFBZDtBQUNILHFCQUZEO0FBR0g7OytDQUVEQyxRLHVCQUFXO0FBQ1BDLDZCQUFTQyxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxLQUFLUCxlQUF4QztBQUNILGlCOzsrQ0FFRFEsUSx1QkFBVztBQUNQRiw2QkFBU0csbUJBQVQsQ0FBNkIsT0FBN0IsRUFBc0MsS0FBS1QsZUFBM0M7QUFDSCxpQiIsImZpbGUiOiJzZXJ2aWNlcy9zZXJ2aWNlLWV2ZW50LWxpc3RlbmVyLmpzIiwic291cmNlUm9vdCI6Ii9zcmMifQ==
