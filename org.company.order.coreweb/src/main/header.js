import {AuthService} from 'aurelia-authentication';
import {inject} from 'aurelia-framework';

@inject(AuthService)
export class Header{

    constructor(authService){
        this.authService = authService;
    }

    logout() {
        return this.authService.logout();
    }
}