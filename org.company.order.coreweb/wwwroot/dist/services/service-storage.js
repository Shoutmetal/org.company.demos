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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3NlcnZpY2Utc3RvcmFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBUSxrQixxQkFBQSxNOztBQUNBLDJCLDJCQUFBLGU7O0FBQ0EsdUIsMEJBQUEsVzs7OytCQUdLLE8sV0FEWixPQUFPLGVBQVAsRUFBd0IsV0FBeEIsQztBQUdHLGlDQUFZLEtBQVosRUFBbUIsV0FBbkIsRUFBK0I7QUFBQTs7QUFDM0IseUJBQUssS0FBTCxHQUFhLEtBQWI7QUFDQSx5QkFBSyxXQUFMLEdBQW1CLFdBQW5CO0FBQ0EseUJBQUssSUFBTCxHQUFZLEtBQUssS0FBTCxDQUFXLGVBQWUsT0FBZixDQUF1QixTQUF2QixLQUFxQyxJQUFoRCxDQUFaO0FBQ0EseUJBQUssU0FBTCxHQUFpQixXQUFqQjtBQUNIOztrQ0FFRCxVLHVCQUFXLEcsRUFDWDtBQUNJLDJCQUFPLENBQUMsS0FBSyxJQUFMLENBQVUsTUFBVixHQUFtQixJQUFuQixHQUEwQixHQUEzQixFQUFnQyxXQUFoQyxFQUFQO0FBQ0gsaUI7O2tDQUVELFUsdUJBQVcsRyxFQUFJO0FBQ1gsd0JBQUksYUFBYSxLQUFLLFVBQUwsQ0FBZ0IsR0FBaEIsQ0FBakI7QUFDQSwyQkFBTyxLQUFLLEdBQUwsQ0FBUyxVQUFULENBQVA7QUFDSCxpQjs7a0NBRUQsRyxnQkFBSSxHLEVBQUk7QUFDSix3QkFBSSxVQUFVLGFBQWEsT0FBYixDQUFxQixHQUFyQixDQUFkO0FBQ0EsMkJBQU8sS0FBSyxLQUFMLENBQVcsV0FBVyxJQUF0QixDQUFQO0FBQ0gsaUI7O2tDQUVELE0sbUJBQU8sRyxFQUFLLFMsRUFBVTtBQUNsQix3QkFBSSxhQUFhLEtBQUssVUFBTCxDQUFnQixHQUFoQixDQUFqQjtBQUNBLHdCQUFJLFFBQVEsS0FBSyxPQUFMLENBQWEsVUFBYixFQUF5QixTQUF6QixDQUFaO0FBQ0EsMkJBQU8sUUFBUSxJQUFSLEdBQWUsS0FBdEI7QUFDSCxpQjs7a0NBRUQsTyxvQkFBUSxHLEVBQUssUyxFQUFVO0FBQ25CLHdCQUFJLE1BQU0sS0FBSyxHQUFMLENBQVMsR0FBVCxDQUFWO0FBQ0Esd0JBQUksT0FBTyxFQUFYOztBQUVBLHdCQUFHLENBQUMsSUFBSSxNQUFSLEVBQWdCOztBQUVoQiwyQkFBTyxJQUFJLE1BQUosQ0FBVyxTQUFYLEVBQXNCLENBQXRCLENBQVA7QUFDSCxpQjs7a0NBRUQsSSxpQkFBSyxHLEVBQUssTSxFQUFPO0FBQ2Isd0JBQUksYUFBYSxLQUFLLFVBQUwsQ0FBZ0IsR0FBaEIsQ0FBakI7QUFDQSx3QkFBSSxNQUFNLEtBQUssR0FBTCxDQUFTLFVBQVQsQ0FBVjtBQUNBLHdCQUFJLElBQUosQ0FBUyxNQUFUO0FBQ0EsaUNBQWEsT0FBYixDQUFxQixVQUFyQixFQUFpQyxLQUFLLFNBQUwsQ0FBZSxHQUFmLENBQWpDO0FBQ0EseUJBQUssTUFBTCxDQUFZLFVBQVosRUFBd0IsR0FBeEI7QUFDSCxpQjs7a0NBRUQsTSxtQkFBTyxHLEVBQUssTSxFQUFRLFMsRUFBVTtBQUMxQix3QkFBSSxhQUFhLEtBQUssVUFBTCxDQUFnQixHQUFoQixDQUFqQjtBQUNBLHdCQUFJLE1BQU0sS0FBSyxHQUFMLENBQVMsVUFBVCxDQUFWO0FBQ0Esd0JBQUksT0FBSixDQUFhLGdCQUFRO0FBQ2pCLDRCQUFJLFdBQVcsVUFBVSxJQUFWLENBQWY7QUFDQSw0QkFBRyxRQUFILEVBQWEsT0FBTyxFQUFFLE1BQUYsQ0FBUyxJQUFULEVBQWUsTUFBZixDQUFQO0FBQ2hCLHFCQUhEOztBQUtBLGlDQUFhLE9BQWIsQ0FBcUIsVUFBckIsRUFBaUMsS0FBSyxTQUFMLENBQWUsR0FBZixDQUFqQztBQUNBLHlCQUFLLE1BQUwsQ0FBWSxVQUFaLEVBQXdCLEdBQXhCO0FBQ0gsaUI7O2tDQUVELE0sb0JBQU8sRyxFQUFLLFMsRUFBVTs7QUFFbEIsd0JBQUksYUFBYSxLQUFLLFVBQUwsQ0FBZ0IsR0FBaEIsQ0FBakI7QUFDQSx3QkFBSSxNQUFNLEtBQUssR0FBTCxDQUFTLFVBQVQsQ0FBVjs7QUFFQSx3QkFBRyxDQUFDLElBQUksTUFBUixFQUFnQjs7QUFFaEIsd0JBQUksZUFBZSxTQUFmLFlBQWUsQ0FBQyxJQUFELEVBQVU7QUFDekIsNEJBQUksV0FBVyxVQUFVLElBQVYsQ0FBZjtBQUNBLCtCQUFPLENBQUMsUUFBUjtBQUNILHFCQUhEOztBQUtBLDBCQUFNLElBQUksTUFBSixDQUFXLFlBQVgsQ0FBTjtBQUNBLGlDQUFhLE9BQWIsQ0FBcUIsVUFBckIsRUFBaUMsS0FBSyxTQUFMLENBQWUsR0FBZixDQUFqQzs7QUFFQSx5QkFBSyxNQUFMLENBQVksVUFBWixFQUF3QixHQUF4QjtBQUNILGlCOztrQ0FFRCxLLGtCQUFNLEcsRUFBSTtBQUNOLHdCQUFJLGFBQWEsS0FBSyxVQUFMLENBQWdCLEdBQWhCLENBQWpCO0FBQ0EsaUNBQWEsVUFBYixDQUF3QixVQUF4QjtBQUNILGlCOztrQ0FFRCxNLG1CQUFPLEcsRUFBSyxHLEVBQUk7QUFDWix3QkFBSSxZQUFZLEtBQUssU0FBTCxDQUFlLE1BQWYsQ0FBc0IsR0FBdEIsQ0FBaEI7QUFDQSx5QkFBSyxLQUFMLENBQVcsT0FBWCxDQUFtQixTQUFuQixFQUE4QixHQUE5QjtBQUNILGlCOztrQ0FFRCxZLHlCQUFhLEcsRUFBSTtBQUNiLHdCQUFJLGFBQWEsS0FBSyxVQUFMLENBQWdCLEdBQWhCLENBQWpCO0FBQ0EsMkJBQU8sS0FBSyxTQUFMLENBQWUsTUFBZixDQUFzQixVQUF0QixDQUFQO0FBQ0gsaUIiLCJmaWxlIjoic2VydmljZXMvc2VydmljZS1zdG9yYWdlLmpzIiwic291cmNlUm9vdCI6Ii9zcmMifQ==
