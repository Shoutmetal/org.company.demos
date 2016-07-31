export class ProductDetail
{
    add(){
        console.log(this)
    }

    activate(product){
        $.extend(this, product)
    }
}