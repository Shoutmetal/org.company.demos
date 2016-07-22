import {logger, loader} from 'decorators/loader-decorator'


@loader(true)
export class Index
{
    constructor(){
        this.someMethod()
    }

    @logger("custom message")
    someMethod(){
        console.log("inside some method")
    }

}

