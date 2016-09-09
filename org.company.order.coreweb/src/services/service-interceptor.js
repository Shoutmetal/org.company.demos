export class ServiceInterceptor
{
    request(request) {  
        return request; 
    }

    requestError(error){
        throw error;
    }

    response(response) {
        return response; 
    }

    responseError(error){
        throw error;
    }

}