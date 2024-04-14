import { GenericObject } from '../global';
import { HTTPMethod, PREFIX } from '../constant';
export interface EncodedObject extends GenericObject<any> {
}
export declare abstract class BaseEncoder {
    abstract encode(..._: any[]): EncodedObject;
}
export interface HTTPRequestObject extends EncodedObject {
    url: string;
    data: GenericObject<any>;
    method: HTTPMethod;
    headers: GenericObject<string>;
}
export declare class HTTPRequestEncoder extends BaseEncoder {
    protected endpoint: string;
    body: GenericObject<any>;
    query: GenericObject<string>;
    method: HTTPMethod;
    protected prefix: string;
    protected baseHeaders: GenericObject<string>;
    protected serviceHeaders: GenericObject<string>;
    protected serverlessHeaders: GenericObject<string>;
    protected baseUrl: string;
    constructor(endpoint: string, prefix?: PREFIX);
    encodeAsHTTPRequestObject(additionalObject: GenericObject<any>): HTTPRequestObject;
    sign(secret: string): void;
    get url(): string;
    get headers(): GenericObject<string>;
    setBodyField(fields: GenericObject<any>): HTTPRequestEncoder;
    setUserId(userId: string): HTTPRequestEncoder;
    setBaseHeaders(headers?: GenericObject<string | number>): HTTPRequestEncoder;
    setServerlessHeaders(headers?: GenericObject<string | number>): HTTPRequestEncoder;
    encode(..._: any[]): HTTPRequestObject;
}
