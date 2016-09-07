import {AuthService} from 'aurelia-authentication';
import {inject} from 'aurelia-framework';

@inject(AuthService)
export class Login
{
    constructor(authService) {
        this.authService   = authService;
        this.header =  { headers: {'Content-Type': 'application/x-www-form-urlencoded','Accept': 'application/json' }};

        this.showLogin = true;
        this.showSignup = false;

    };

    attached(){
        $('body').attr("class", "login");
        this.vm = this;
    }

    login() {
        let credentials = { username: this.username, password: this.password, grant_type: "password" };

        this.authService.login(credentials, this.header)
            .catch(error => {
                error.json().then(ex=>  {
                       
                    $(this.loginForm).find("div").eq(0).find("span").eq(0).html("Invalid Username or Password")
                    $(this.loginForm).find("div").eq(0).show();
                });
            })
    };

    authenticate(name) {
        this.authService.authenticate(name)
          .then(response => {
              this.provider[name] = true;
          });
    }

    back(){
        this.showSignup = false;
        this.showLogin = true;
        
    }

    openSignup(){
        this.showLogin = false;
        this.showSignup = true;
        
    }

}