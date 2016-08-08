import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class Storage
{
    constructor(event){
        this.event = event;
        this.eventName = "storage:";
    }

    get(key){
        let storage = localStorage.getItem(key);
        return JSON.parse(storage || "[]");
    }

    exists(key, condition){
        let items = this.getItem(key, condition);
        return items ? true : false;
    }

    getItem(key, condition){
        let arr = this.get(key);
        let item = {};

        if(!arr.length) return;
            
        return arr.filter(condition)[0];
    }

    save(key, object){
        let arr = this.get(key);
        arr.push(object);
        localStorage.setItem(key, JSON.stringify(arr));
        this.notify(key, arr);
    }

    update(key, object, condition){
        let arr = this.get(key);
        arr.forEach( item => {
            let isEquals = condition(item);
            if(isEquals) item = $.extend(item, object);
        });

        localStorage.setItem(key, JSON.stringify(arr));
        this.notify(key, arr);
    }

    delete(key, condition)
    {
        let arr = this.get(key);

        if(!arr.length) return;

        let newCondition = (item) => { 
            let isEquals = condition(item); 
            return !isEquals;
        }

        arr = arr.filter(newCondition);
        localStorage.setItem(key, JSON.stringify(arr));

        this.notify(key, arr);
    }

    clear(key){
        localStorage.removeItem(key);
    }

    notify(key, arr){
        let eventName = this.eventName.concat(key)
        this.event.publish(eventName, arr);
    }

}