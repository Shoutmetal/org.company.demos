import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import {Configure} from 'aurelia-configuration';
import {Spinner} from 'services/spinner';

@inject(HttpClient, Configure, Spinner)
export class GenericService
{
    constructor(http, config, spinner){
        this.http = http;
        this.config = config;
        this.spinner = spinner;

        this.http.configure(x => {
            x.withBaseUrl(this.config.get('baseUrl'));
            x.withHeader('accept', 'application/json');
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