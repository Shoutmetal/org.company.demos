'use strict';

System.register(['aurelia-framework', 'aurelia-event-aggregator'], function (_export, _context) {
    "use strict";

    var inject, EventAggregator, _dec, _class, Storage;

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
        }],
        execute: function () {
            _export('Storage', Storage = (_dec = inject(EventAggregator), _dec(_class = function () {
                function Storage(event) {
                    _classCallCheck(this, Storage);

                    this.event = event;
                    this.eventName = "storage:";
                }

                Storage.prototype.get = function get(key) {
                    var storage = localStorage.getItem(key);
                    return JSON.parse(storage || "[]");
                };

                Storage.prototype.exists = function exists(key, condition) {
                    var items = this.getItem(key, condition);
                    return items ? true : false;
                };

                Storage.prototype.getItem = function getItem(key, condition) {
                    var arr = this.get(key);
                    var item = {};

                    if (!arr.length) return;

                    return arr.filter(condition)[0];
                };

                Storage.prototype.save = function save(key, object) {
                    var arr = this.get(key);
                    arr.push(object);
                    localStorage.setItem(key, JSON.stringify(arr));
                    this.notify(key, arr);
                };

                Storage.prototype.update = function update(key, object, condition) {
                    var arr = this.get(key);
                    arr.forEach(function (item) {
                        var isEquals = condition(item);
                        if (isEquals) item = $.extend(item, object);
                    });

                    localStorage.setItem(key, JSON.stringify(arr));
                    this.notify(key, arr);
                };

                Storage.prototype.delete = function _delete(key, condition) {
                    var arr = this.get(key);

                    if (!arr.length) return;

                    var newCondition = function newCondition(item) {
                        var isEquals = condition(item);
                        return !isEquals;
                    };

                    arr = arr.filter(newCondition);
                    localStorage.setItem(key, JSON.stringify(arr));

                    this.notify(key, arr);
                };

                Storage.prototype.clear = function clear(key) {
                    localStorage.removeItem(key);
                };

                Storage.prototype.notify = function notify(key, arr) {
                    var eventName = this.eventName.concat(key);
                    this.event.publish(eventName, arr);
                };

                return Storage;
            }()) || _class));

            _export('Storage', Storage);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,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
