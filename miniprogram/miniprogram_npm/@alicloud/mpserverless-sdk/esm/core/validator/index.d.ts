import Parameter from 'parameter';
import { GenericObject } from '../global';
export declare class Validator {
    protected p: Parameter;
    constructor(options?: GenericObject<any>);
    validate(rules: any, obj: any): string;
}
