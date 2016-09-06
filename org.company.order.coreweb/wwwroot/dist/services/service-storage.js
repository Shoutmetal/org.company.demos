'use strict';

System.register(['aurelia-framework', 'aurelia-event-aggregator', 'aurelia-authentication'], function (_export, _context) {
    "use strict";

    var inject, EventAggregator, AuthService, _dec, _class, Storage;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
        }, function (_aureliaEventAggregator) {
            EventAggregator = _aureliaEventAggregator.EventAggregator;
        }, function (_aureliaAuthentication) {
            AuthService = _aureliaAuthentication.AuthService;
        }],
        execute: function () {
            _export('Storage', Storage = (_dec = inject(EventAggregator, AuthService), _dec(_class = function () {
                function Storage(event, authService) {
                    _classCallCheck(this, Storage);

                    this.event = event;
                    this.authService = authService;
                    this.user = JSON.parse(sessionStorage.getItem("profile") || "{}");
                    this.eventName = "storage::";
                }

                Storage.prototype.storageKey = function storageKey(key) {
                    return (this.user.userid + "::" + key).toUpperCase();
                };

                Storage.prototype.getStorage = function getStorage(key) {
                    var storagekey = this.storageKey(key);
                    return this.get(storagekey);
                };

                Storage.prototype.get = function get(key) {
                    var storage = localStorage.getItem(key);
                    return JSON.parse(storage || "[]");
                };

                Storage.prototype.exists = function exists(key, condition) {
                    var storagekey = this.storageKey(key);
                    var items = this.getItem(storagekey, condition);
                    return items ? true : false;
                };

                Storage.prototype.getItem = function getItem(key, condition) {
                    var arr = this.get(key);
                    var item = {};

                    if (!arr.length) return;

                    return arr.filter(condition)[0];
                };

                Storage.prototype.save = function save(key, object) {
                    var storagekey = this.storageKey(key);
                    var arr = this.get(storagekey);
                    arr.push(object);
                    localStorage.setItem(storagekey, JSON.stringify(arr));
                    this.notify(storagekey, arr);
                };

                Storage.prototype.update = function update(key, object, condition) {
                    var storagekey = this.storageKey(key);
                    var arr = this.get(storagekey);
                    arr.forEach(function (item) {
                        var isEquals = condition(item);
                        if (isEquals) item = $.extend(item, object);
                    });

                    localStorage.setItem(storagekey, JSON.stringify(arr));
                    this.notify(storagekey, arr);
                };

                Storage.prototype.delete = function _delete(key, condition) {

                    var storagekey = this.storageKey(key);
                    var arr = this.get(storagekey);

                    if (!arr.length) return;

                    var newCondition = function newCondition(item) {
                        var isEquals = condition(item);
                        return !isEquals;
                    };

                    arr = arr.filter(newCondition);
                    localStorage.setItem(storagekey, JSON.stringify(arr));

                    this.notify(storagekey, arr);
                };

                Storage.prototype.clear = function clear(key) {
                    var storagekey = this.storageKey(key);
                    localStorage.removeItem(storagekey);
                };

                Storage.prototype.notify = function notify(key, arr) {
                    var eventName = this.eventName.concat(key);
                    this.event.publish(eventName, arr);
                };

                Storage.prototype.getEventName = function getEventName(key) {
                    var storagekey = this.storageKey(key);
                    return this.eventName.concat(storagekey);
                };

                return Storage;
            }()) || _class));

            _export('Storage', Storage);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3NlcnZpY2Utc3RvcmFnZS5qcyJdLCJuYW1lcyI6WyJpbmplY3QiLCJFdmVudEFnZ3JlZ2F0b3IiLCJBdXRoU2VydmljZSIsIlN0b3JhZ2UiLCJldmVudCIsImF1dGhTZXJ2aWNlIiwidXNlciIsIkpTT04iLCJwYXJzZSIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsImV2ZW50TmFtZSIsInN0b3JhZ2VLZXkiLCJrZXkiLCJ1c2VyaWQiLCJ0b1VwcGVyQ2FzZSIsImdldFN0b3JhZ2UiLCJzdG9yYWdla2V5IiwiZ2V0Iiwic3RvcmFnZSIsImxvY2FsU3RvcmFnZSIsImV4aXN0cyIsImNvbmRpdGlvbiIsIml0ZW1zIiwiYXJyIiwiaXRlbSIsImxlbmd0aCIsImZpbHRlciIsInNhdmUiLCJvYmplY3QiLCJwdXNoIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsIm5vdGlmeSIsInVwZGF0ZSIsImZvckVhY2giLCJpc0VxdWFscyIsIiQiLCJleHRlbmQiLCJkZWxldGUiLCJuZXdDb25kaXRpb24iLCJjbGVhciIsInJlbW92ZUl0ZW0iLCJjb25jYXQiLCJwdWJsaXNoIiwiZ2V0RXZlbnROYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBUUEsa0IscUJBQUFBLE07O0FBQ0FDLDJCLDJCQUFBQSxlOztBQUNBQyx1QiwwQkFBQUEsVzs7OytCQUdLQyxPLFdBRFpILE9BQU9DLGVBQVAsRUFBd0JDLFdBQXhCLEM7QUFHRyxpQ0FBWUUsS0FBWixFQUFtQkMsV0FBbkIsRUFBK0I7QUFBQTs7QUFDM0IseUJBQUtELEtBQUwsR0FBYUEsS0FBYjtBQUNBLHlCQUFLQyxXQUFMLEdBQW1CQSxXQUFuQjtBQUNBLHlCQUFLQyxJQUFMLEdBQVlDLEtBQUtDLEtBQUwsQ0FBV0MsZUFBZUMsT0FBZixDQUF1QixTQUF2QixLQUFxQyxJQUFoRCxDQUFaO0FBQ0EseUJBQUtDLFNBQUwsR0FBaUIsV0FBakI7QUFDSDs7a0NBRURDLFUsdUJBQVdDLEcsRUFDWDtB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Qjs7a0NBRURpQixLLGtCQUFNNUIsRyxFQUFJO0FBQ04sd0JBQUlJLGFBQWEsS0FBS0wsVUFBTCxDQUFnQkMsR0FBaEIsQ0FBakI7QUFDQU8saUNBQWFzQixVQUFiLENBQXdCekIsVUFBeEI7QUFDSCxpQjs7a0NBRURnQixNLG1CQUFPcEIsRyxFQUFLVyxHLEVBQUk7QUFDWix3QkFBSWIsWUFBWSxLQUFLQSxTQUFMLENBQWVnQyxNQUFmLENBQXNCOUIsR0FBdEIsQ0FBaEI7QUFDQSx5QkFBS1QsS0FBTCxDQUFXd0MsT0FBWCxDQUFtQmpDLFNBQW5CLEVBQThCYSxHQUE5QjtBQUNILGlCOztrQ0FFRHFCLFkseUJBQWFoQyxHLEVBQUk7QUFDYix3QkFBSUksYUFBYSxLQUFLTCxVQUFMLENBQWdCQyxHQUFoQixDQUFqQjtBQUNBLDJCQUFPLEtBQUtGLFNBQUwsQ0FBZWdDLE1BQWYsQ0FBc0IxQixVQUF0QixDQUFQO0FBQ0gsaUIiLCJmaWxlIjoic2VydmljZXMvc2VydmljZS1zdG9yYWdlLmpzIiwic291cmNlUm9vdCI6Ii9zcmMifQ==
