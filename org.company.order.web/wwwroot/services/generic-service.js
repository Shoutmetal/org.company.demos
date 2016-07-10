import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import {Configure} from 'aurelia-configuration';

@inject(HttpClient, Configure)
export class GenericService
{

    constructor(http, config){
        this.http = http;
        this.config = config;

        console.log(this.config.get('baseUrl'))

        this.http.configure(x => {
            x.withBaseUrl(this.config.get('baseUrl'));
            x.withHeader('accept', 'application/json');
        });
    }

    get(url) {
        
        let http = this.http;
        let promise = new Promise((resolve, reject) => {
            http.createRequest(url)
				.asGet()
				.send()
				.then(response => resolve(response.content), err => reject());
        });
        return promise;
    }

    post(url, data) {
       
        let http = this.http;
        let promise = new Promise((resolve, reject) => {
            http.createRequest(url)
				.asPost()
				.withContent(data)
				.send()
				.then(response => resolve(response.content), err => reject());
        });

        return promise;
    }

}