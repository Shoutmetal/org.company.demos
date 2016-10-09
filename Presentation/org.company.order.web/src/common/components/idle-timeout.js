import {inject, computedFrom} from 'aurelia-framework';
import {ServiceEventListener} from 'services/service-event-listener';
import {ServiceRefreshToken} from 'services/service-refresh-token';
import {EventAggregator} from 'aurelia-event-aggregator';
import {AuthService} from 'aurelia-authentication';

@inject(ServiceEventListener, ServiceRefreshToken, AuthService, EventAggregator)
export class IdleTimeout
{
    constructor(serviceEventListener, serviceRefreshToken, authService, event){
        this._countdown = 10;
        this.stop = false;
        this.serviceEventListener =serviceEventListener
        this.serviceRefreshToken = serviceRefreshToken
        this.authService = authService;
        this.event = event;

        let auth_object = this.authService.authentication.getResponseObject();

        let refreshTokenTime = auth_object.expires_in - (auth_object.expires_in * 0.02);
        let eventListenerTime = auth_object.expires_in - (auth_object.expires_in * 0.03);

        this.serviceRefreshToken.configure({
            expiresIn : parseInt(refreshTokenTime)
        });

        this.serviceEventListener.configure({
            expiresIn : parseInt(eventListenerTime)
        });

    }

    run(){
        this.serviceRefreshToken.start();
        this.serviceEventListener.start(); 
    }

    attached(){
        this.run();

        this.event.subscribe("event::inactivity", () => {
            this.serviceRefreshToken.pause();
            this.startCountdown()

            $('#idle-timeout-dialog').modal('show');
        });

    }

    @computedFrom('_countdown')
    get countdown(){
        return this._countdown;
    }

    acept(){
        this.stop = true;
        this.serviceRefreshToken.refresh();
        this.serviceRefreshToken.restart();
        this.serviceRefreshToken.continue();
        this.serviceEventListener.continue();

        $('#idle-timeout-dialog').modal('hide');
    }

    cancel(){
        this.authService.logout();
        $('#idle-timeout-dialog').modal('hide');  
    }


    startCountdown(){
        let me = this;

        let fn = () => {
            me._countdown--

            if(!me._countdown){
                if(!me.stop){ 
                    me.authService.logout();
                }else{
                    me._countdown = 10;
                    me.stop = false;
                    clearInterval(interval)
                }
            }
        
        }

        let interval = setInterval(fn , 1000)
    }
}