import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import {AuthService} from 'aurelia-authentication';
import {EventAggregator} from 'aurelia-event-aggregator'

@inject(HttpClient, AuthService, EventAggregator)
export class ServiceRefreshToken
{
    constructor(http, authService, event){
        this.http = http;
        this.authService = authService;
        this.event = event;
        this.expiresIn = 0;
        this.restartTime = 0;
        this.sandbox = 1000;
        this.stop = false;
        this.pause = false;

        this.http.configure(x => {
            x.withBaseUrl(this.authService.client.client.baseUrl);
            x.withHeader('Accept', 'application/json');
            x.withHeader('Content-Type', 'application/x-www-form-urlencoded');
        });

        this.event.subscribe("event::inactivity", () => {
           
            $('body').append('<div class="modal fade" id="idle-timeout-dialog" data-backdrop="static"><div class="modal-dialog modal-small"><div class="modal-content"><div class="modal-header"><h4 class="modal-title">Your session is about to expire.</h4></div><div class="modal-body"><p><i class="fa fa-warning"></i> You session will be locked in <span id="idle-timeout-counter"></span> seconds.</p><p>Do you want to continue your session?</p></div><div class="modal-footer"><button id="idle-timeout-dialog-logout" type="button" class="btn btn-default">No, Logout</button><button id="idle-timeout-dialog-keepalive" type="button" class="btn btn-primary" data-dismiss="modal">Yes, Keep Working</button></div></div></div></div>');

            $('#idle-timeout-dialog').modal('show');
        });
    }

    refresh(){
        let http = this.http;
                   
        let data = "grant_type=refresh_token&refresh_token=" + encodeURIComponent(this.authService.getRefreshToken());
        let auth = this.authService;
        let url = this.authService.client.client.baseUrl + "/connect/token"

        let promise = new Promise((resolve, reject) => {
            http.createRequest(url)
				.asPost()
				.withContent(data)
				.send()
				.then( response =>{ 
				    auth.setResponseObject(response.content)
				})
                , err => reject(err);
        });

        return promise;
    }

    configure(config){
        this.sandbox = config.sandbox || this.sandbox;
        this.expiresIn = config.expiresIn;
        this.restartTime = this.expiresIn;
        this.stop = config.stop || false;
    }

    start(){
        if(!this.expiresIn) throw Error("No expiration time set on the configuration.");

        let me = this;

        let fn = () => {
            if(!me.pause){

                me.expiresIn--;

                console.log("refresh token : ", me.expiresIn);

                if(!me.expiresIn)
                {
                    me.refresh();
                    clearInterval(inverval);
                    me.expiresIn = me.restartTime
                    inverval = setInterval(fn, me.sandbox); 
                }

            }

        }

        let inverval = setInterval(fn , this.sandbox)
    }

    restart(){
        this.expiresIn = this.restartTime;
    }
}