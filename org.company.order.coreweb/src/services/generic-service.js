import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import {Configure} from 'aurelia-configuration';
import {Spinner} from 'services/spinner';
import {AuthService} from 'aurelia-authentication';

@inject(HttpClient, Configure, Spinner, AuthService)
export class GenericService
{
    constructor(http, config, spinner, authService){
        this.http = http;
        this.config = config;
        this.spinner = spinner;
        this.authService = authService;

        console.log(this.authService.getAccessToken())

        this.http.configure(x => {
            x.withBaseUrl(this.config.get('baseUrl'));
            x.withHeader('Accept', 'application/json');
            x.withHeader('Authorization', 'bearer ' + this.authService.getAccessToken());

        });
    }

    get(url) {
        this.spinner.on();
        let http = this.http;
        let promise = new Promise((resolve, reject) => {
            http.createRequest(url)
				.asGet()
				.send()
				.then(response => 
				{
                console.log(response)
				    resolve(response.content);
				    this.spinner.off();
				}
                , err =>
                {
                    reject(err);
                    this.spinner.off();
                    
                });
        });
        return promise;
    }

    post(url, data) {
        this.spinner.on();
        let http = this.http;
        let promise = new Promise((resolve, reject) => {
            http.createRequest(url)
				.asPost()
				.withContent(data)
				.send()
				.then(response =>
				{
				    resolve(response.isSuccess);
				    this.spinner.off();
				}
                , err =>
                {
                    reject(err);
                    this.spinner.off();
                });
        });

        return promise;
    }

}