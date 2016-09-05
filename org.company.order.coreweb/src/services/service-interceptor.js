import {computedFrom} from 'aurelia-framework';
import {AuthService} from 'aurelia-authentication';
import {Container} from 'aurelia-dependency-injection';

export class ServiceInterceptor
{

    constructor(){
        this.expires_in = 0;

        let container = Container.instance;
        this.authService = container.get(AuthService);
        this.auth_object = this.authService.authentication.getResponseObject();
    }

    request(request) {  
        return request; 
    }

    requestError(error){
        throw error;
    }

    response(response) {
        this.expires_in = this.auth_object.expires_in;

        this.calculate()

        return response; 
    }

    responseError(error){
        if (error.statusCode == 401) {

            let container = Container.instance;
            let auth = container.get(AuthService);
            auth.logout();

            window.location.href = "/"
        }
        throw error;
    }

    calculate(){
        //setInterval(()=>{
        //    console.log(this.expires_in)
            
        //} ,this.expires_in * 10)
    }

}