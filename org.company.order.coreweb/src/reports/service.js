import {inject} from 'aurelia-framework';
import {GenericService} from 'services/service-generic';
import {AuthService} from 'aurelia-authentication';

@inject(GenericService, AuthService)
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