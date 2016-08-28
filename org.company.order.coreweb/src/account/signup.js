import {required, email, equality} from 'aurelia-validatejs' 
import {validateTrigger} from 'aurelia-validation';
import {ValidationController} from 'aurelia-validation';

import {AuthService} from 'aurelia-authentication';
import {inject, transient, NewInstance} from 'aurelia-framework';

@inject(AuthService, NewInstance.of(ValidationController))
@transient()
export class Signup
{
    @required firstName
    @required lastName;
    @required @email email;
    @required signupUsername;
    @required signupPassword;
    @required @equality("signupPassword") rpassword;
    

    constructor(authService, controller) {
        this.authService   = authService;
        this.header =  { headers: {'Content-Type': 'application/x-www-form-urlencoded','Accept': 'application/json' }};
        this.controller = controller;
        this.controller.validateTrigger = validateTrigger.change;  
    }

    attached(){
        $(this.signupForm).show();
    }

    activate(model){
        if(model)
            this.model = model.vm;
    }

    signup(){
        let errors = this.controller.validate();
        
        if(!errors.length){

            this.authService.signup({
                firstName: this.firstName,
                lastName: this.lastName,
                userName: this.signupUsername,
                email: this.email,
                password: this.signupPassword
            },this.header)
           .then(response => {
               this.model.username = this.signupUsername;
               this.model.password = this.signupPassword;
               this.model.login()
           }).catch( error => {
               error.json().then(ex=>  {

                   if(Array.isArray(ex))
                   {
                       let ul = "";
               
                       ex.forEach(item => { ul = item.description + "<br />"; })

                       $(this.signupForm).find("div").eq(0).find("span").eq(0).html(ul)
                       $(this.signupForm).find("div").eq(0).show();
                   }
               });
        
           })
        }
    
    }
}