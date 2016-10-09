import {AuthService} from 'aurelia-authentication';
import {inject, computedFrom} from 'aurelia-framework';

@inject(AuthService)
export class Header{

    constructor(authService){
        this.authService = authService;
        this.user = JSON.parse(sessionStorage.getItem("profile") || "{}");
        this.username = this.user.username;
        this.firstname = this.user.firstname;
        this.lastname = this.user.lastname;
    }



    @computedFrom('firstname', 'lastname')
    get fullname(){
    
        return this.firstname + ' ' + this.lastname;
    }

    logout() {
        return this.authService.logout();
    }
}