import {AuthService} from 'aurelia-authentication';
import {inject, computedFrom} from 'aurelia-framework';

@inject(AuthService)
export class Header{

    constructor(authService){
        this.authService = authService;
        this.username;
        this.firstname;
        this.lastname;
    }

    attached(){
        this.authService.getMe()
           .then(profile => {
               this.username = profile.username;
               this.firstname = profile.firstname;
               this.lastname = profile.lastname;
           });
    }

    @computedFrom('firstname', 'lastname')
    get fullname(){
    
        return this.firstname + ' ' + this.lastname;
    }

    logout() {
        return this.authService.logout();
    }
}