import {inject, NewInstance} from 'aurelia-dependency-injection';  
import {ValidationController} from 'aurelia-validation';
import {Order, Product} from './model';
import {Service} from './service';
import {Router} from 'aurelia-router';

@inject(NewInstance.of(ValidationController), Service, Router)
export class OrderPegeOne
{
    constructor(controller, service, router) {
        
        this.service = service;
        this.router = router;

        this.products = [
            new Product({ productId:1, name:"Berry Lace Dress1", price:29.00 , imageUrl:"../styles/assets/frontend/pages/img/products/model1.jpg", description:"Lorem ipsum dolor ut sit ame dolore  adipiscing elit, sed nonumy nibh sed euismod laoreet dolore magna aliquarm erat volutpat Nostrud duis molestie at dolore."}),
            new Product({ productId:2, name:"Berry Lace Dress2", price:30.00 , imageUrl:"../styles/assets/frontend/pages/img/products/model2.jpg", description:"Lorem ipsum dolor ut sit ame dolore  adipiscing elit, sed nonumy nibh sed euismod laoreet dolore magna aliquarm erat volutpat Nostrud duis molestie at dolore."}),
            new Product({ productId:3, name:"Berry Lace Dress3", price:31.00 , imageUrl:"../styles/assets/frontend/pages/img/products/model3.jpg", description:"Lorem ipsum dolor ut sit ame dolore  adipiscing elit, sed nonumy nibh sed euismod laoreet dolore magna aliquarm erat volutpat Nostrud duis molestie at dolore."}),
            new Product({ productId:4, name:"Berry Lace Dress4", price:32.00 , imageUrl:"../styles/assets/frontend/pages/img/products/model4.jpg", description:"Lorem ipsum dolor ut sit ame dolore  adipiscing elit, sed nonumy nibh sed euismod laoreet dolore magna aliquarm erat volutpat Nostrud duis molestie at dolore."}),
            new Product({ productId:5, name:"Berry Lace Dress5", price:33.00 , imageUrl:"../styles/assets/frontend/pages/img/products/model5.jpg", description:"Lorem ipsum dolor ut sit ame dolore  adipiscing elit, sed nonumy nibh sed euismod laoreet dolore magna aliquarm erat volutpat Nostrud duis molestie at dolore."}),
            new Product({ productId:6, name:"Berry Lace Dress6", price:34.00 , imageUrl:"../styles/assets/frontend/pages/img/products/model6.jpg", description:"Lorem ipsum dolor ut sit ame dolore  adipiscing elit, sed nonumy nibh sed euismod laoreet dolore magna aliquarm erat volutpat Nostrud duis molestie at dolore."}),
            new Product({ productId:7, name:"Berry Lace Dress7", price:35.00 , imageUrl:"../styles/assets/frontend/pages/img/products/model7.jpg", description:"Lorem ipsum dolor ut sit ame dolore  adipiscing elit, sed nonumy nibh sed euismod laoreet dolore magna aliquarm erat volutpat Nostrud duis molestie at dolore."})
        ]
        
    }

  
   attached(){
        //this.service.getProducts().then( response => { this.products = response });
    }


}