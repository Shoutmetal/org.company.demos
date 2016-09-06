import {inject} from 'aurelia-framework';
import {CustomHttp} from 'services/service-custom-http';
import {AuthService} from 'aurelia-authentication';

@inject(CustomHttp, AuthService)
export class Service
{
    constructor(service, authService){
        this.service = service;
        this.authService = authService;
    }

    getOrdersByCustomerId(id){
        return this.service.get("order/orders/" + id).then(response => response );
    }

    getUserProfile(){
        return this.authService.getMe().then( response => response );
    }

}