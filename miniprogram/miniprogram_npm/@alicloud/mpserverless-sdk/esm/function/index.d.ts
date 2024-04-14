import { BaseService } from './../core';
export declare class FunctionService extends BaseService {
    invoke(functionTarget: string, functionArgs?: any): Promise<object>;
    private validate;
}
