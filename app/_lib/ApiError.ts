export default class ApiError extends Error{
    data: any;
    constructor(data: any){
        super('Api Error')
        this.name = 'Api Error';
        this.data = data;
    }
}