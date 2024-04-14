import { GenericObject } from '../global';
export interface DecodedObject extends GenericObject<any> {
}
export declare abstract class BaseDecoder {
    abstract decode(..._: any[]): DecodedObject;
}
export interface HTTPResponseObject extends DecodedObject {
    body: GenericObject<any>;
    error: Error;
    status: number;
    headers: GenericObject<string>;
}
export declare class HTTPResponseDecoder extends BaseDecoder {
    protected _body: GenericObject<any>;
    protected _error: Error;
    protected _status: number;
    protected _headers: GenericObject<string>;
    setHeaders(headers: GenericObject<string>): void;
    setStatusAndBody(status: number, body: any): void;
    setErrorMessage(message: string): void;
    setErrorObject(error: Error): void;
    decode(..._: any[]): HTTPResponseObject;
}
