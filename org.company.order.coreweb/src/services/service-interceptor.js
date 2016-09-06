import {computedFrom} from 'aurelia-framework';
import {AuthService} from 'aurelia-authentication';
import {Container} from 'aurelia-dependency-injection';

export class ServiceInterceptor
{
    constructor(serviceRefreshToken){
        this.expires_in = 0;
       
        let container = Container.instance;
        this.authService = container.get(AuthService);
        this.auth_object = this.authService.authentication.getResponseObject();

        this.serviceRefreshToken = serviceRefreshToken;
        this.serviceRefreshToken.configure({
            expiresIn : (this.auth_object.expires_in - 45)
        });

        this.serviceRefreshToken.start();
    }

    request(request) {  
        return request; 
    }

    requestError(error){
        throw error;
    }

    response(response) {
        //this.serviceRefreshToken.restart();

        return response; 
    }

    responseError(error){
        if (error.statusCode == 401) {
           // this.serviceRefreshToken.stop(); //let die the session
        }
        throw error;
    }



}