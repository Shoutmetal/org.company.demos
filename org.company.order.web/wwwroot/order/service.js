import {inject} from 'aurelia-framework';
import {GenericService} from 'services/generic-service';

@inject(GenericService)
export class Service
{
    constructor(service){
        this.service = service;
        //this.data = {};
        //this.service.get("order/orders/1").then((data) => {this.data = data; });
    }

    save(){
        this.service.post("order/save", {}).then((data) => {this.data = data; });
    }

}