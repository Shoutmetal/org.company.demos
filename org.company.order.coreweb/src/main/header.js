import {AuthService} from 'aurelia-authentication';
import {inject} from 'aurelia-framework';

@inject(AuthService)
export class Header{

    constructor(authService){
        this.authService = authService;
    }

    attached(){
        //this.authService.getMe()
        //   .then(profile => {
        //       console.log(profile.username);
        //   });
    }

    logout() {
        return this.authService.logout();
    }
}