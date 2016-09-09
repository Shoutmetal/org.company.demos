import {inject} from 'aurelia-framework'
import {EventAggregator} from 'aurelia-event-aggregator'

@inject(EventAggregator)
export class ServiceEventListener
{
    constructor(event) {
        this.event = event;
        this.expiresIn = 0;
        this.restartTime = 0;
        this.sandbox = 1000;
        this._pause = false;

        this.handleBodyClick = e => {
            this.expiresIn = this.restartTime;
        };
    }

    addEvents(){
        document.addEventListener('click', this.handleBodyClick);
        document.addEventListener("mousemove", this.handleBodyClick);
        document.addEventListener("mousedown", this.handleBodyClick);
        document.addEventListener("keypress", this.handleBodyClick);
        document.addEventListener("DOMMouseScroll", this.handleBodyClick);
        document.addEventListener("mousewheel", this.handleBodyClick);
        document.addEventListener("touchmove", this.handleBodyClick);
        document.addEventListener("MSPointerMove", this.handleBodyClick);
    }

    removeEvents(){
        document.removeEventListener('click', this.handleBodyClick);
        document.removeEventListener("mousemove", this.handleBodyClick);
        document.removeEventListener("mousedown", this.handleBodyClick);
        document.removeEventListener("keypress", this.handleBodyClick);
        document.removeEventListener("DOMMouseScroll", this.handleBodyClick);
        document.removeEventListener("mousewheel", this.handleBodyClick);
        document.removeEventListener("touchmove", this.handleBodyClick);
        document.removeEventListener("MSPointerMove", this.handleBodyClick);
    }

    configure(config){
        this.sandbox = config.sandbox || this.sandbox;
        this.expiresIn = config.expiresIn;
        this.restartTime = this.expiresIn;
    }

    start(){
        this.addEvents();

        let me = this;

        let fn = () => {
            if(!me._pause){
                me.expiresIn--;

                if(!me.expiresIn)
                {
                    me.event.publish("event::inactivity");
                    me._pause=true;
                    clearInterval(inverval);
                    me.expiresIn = me.restartTime
                    inverval = setInterval(fn, me.sandbox); 
                }
            }
        
        }

        let inverval = setInterval(fn, this.sandbox)
    
    }

    pause(){
        this._pause = true;
    }

    continue(){
        this._pause = false;
    }
}