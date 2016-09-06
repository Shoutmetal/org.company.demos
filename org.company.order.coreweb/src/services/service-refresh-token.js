import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import {AuthService} from 'aurelia-authentication';

@inject(HttpClient, AuthService)
export class ServiceRefreshToken
{
    constructor(http, authService){
        this.http = http;
        this.authService = authService;
        this.expiresIn = 0;
        this.restartTime = 0;
        this.sandbox = 1000;
        this.stop = false;

        this.http.configure(x => {
            x.withBaseUrl(this.authService.client.client.baseUrl);
            x.withHeader('Accept', 'application/json');
            x.withHeader('Content-Type', 'application/x-www-form-urlencoded');
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
        this.stop = config.stop;
    }

    start(){
        if(!this.expiresIn) throw Error("No expiration time set on the configuration.")

        let me = this;
        this.restartTime = me.expiresIn

        let fn = () => {
            me.expiresIn--;
            //console.log(me.expiresIn)
            if(!me.expiresIn && !me.stop)
            {
                me.refresh();
                clearInterval(inverval);
                me.expiresIn = me.restartTime
                inverval = setInterval(fn, me.sandbox); 
            }
        }

        let inverval = setInterval(fn , this.sandbox)
    }

    restart(){
        this.expiresIn = this.restartTime;
    }
}