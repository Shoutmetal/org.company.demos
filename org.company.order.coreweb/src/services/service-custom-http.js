import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import {Spinner} from 'common/components/spinner';
import {AuthService} from 'aurelia-authentication';
import {ServiceInterceptor} from 'services/service-interceptor'
import {ServiceRefreshToken} from 'services/service-refresh-token'

@inject(HttpClient, Spinner, AuthService, ServiceRefreshToken)
export class CustomHttp
{
    constructor(http, spinner, authService, serviceRefreshToken){
        this.http = http;
        this.spinner = spinner;
        this.authService = authService;

        this.http.configure(x => {
            x.withBaseUrl( this.authService.client.client.baseUrl + "/api/" );
            x.withHeader('Accept', 'application/json');
            x.withHeader('Authorization', 'bearer ' + this.authService.getAccessToken());
            x.withInterceptor(new ServiceInterceptor(serviceRefreshToken));
        });
    }

    get(url) {
        this.spinner.on();
        let http = this.http;
        let promise = new Promise((resolve, reject) => {
            http.createRequest(url)
				.asGet()
				.send()
				.then(response => resolve(response.content))
				.then( ()=> { this.spinner.off() }
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
				.then(response => resolve(response))
				.then( ()=> { this.spinner.off() }
                , err =>
                {
                    reject(err);
                    this.spinner.off();
                    
                });
        });

        return promise;
    }

}