import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {AuthService} from 'aurelia-authentication';

@inject(EventAggregator, AuthService)
export class Storage
{
    constructor(event, authService){
        this.event = event;
        this.authService = authService;
        this.user = JSON.parse(sessionStorage.getItem("profile") || "{}");
        this.eventName = "storage::";
    }

    storageKey(key)
    {
        return (this.user.userid+  "::" + key).toUpperCase();
    }

    getStorage(key){
        let storagekey = this.storageKey(key)
        return this.get(storagekey);
    }

    get(key){
        let storage = localStorage.getItem(key);
        return JSON.parse(storage || "[]");
    }

    exists(key, condition){
        let storagekey = this.storageKey(key)
        let items = this.getItem(storagekey, condition);
        return items ? true : false;
    }

    getItem(key, condition){
        let arr = this.get(key);
        let item = {};

        if(!arr.length) return;
            
        return arr.filter(condition)[0];
    }

    save(key, object){
        let storagekey = this.storageKey(key)
        let arr = this.get(storagekey);
        arr.push(object);
        localStorage.setItem(storagekey, JSON.stringify(arr));
        this.notify(storagekey, arr);
    }

    update(key, object, condition){
        let storagekey = this.storageKey(key)
        let arr = this.get(storagekey);
        arr.forEach( item => {
            let isEquals = condition(item);
            if(isEquals) item = $.extend(item, object);
        });

        localStorage.setItem(storagekey, JSON.stringify(arr));
        this.notify(storagekey, arr);
    }

    delete(key, condition){

        let storagekey = this.storageKey(key);
        let arr = this.get(storagekey);

        if(!arr.length) return;

        let newCondition = (item) => { 
            let isEquals = condition(item); 
            return !isEquals;
        }

        arr = arr.filter(newCondition);
        localStorage.setItem(storagekey, JSON.stringify(arr));

        this.notify(storagekey, arr);
    }

    clear(key){
        let storagekey = this.storageKey(key)
        localStorage.removeItem(storagekey);
    }

    notify(key, arr){
        let eventName = this.eventName.concat(key)
        this.event.publish(eventName, arr);
    }

    getEventName(key){
        let storagekey = this.storageKey(key)
        return this.eventName.concat(storagekey)
    }

}