import { BaseEncoder, BaseDecoder, DecodedObject, EncodedObject } from './../../../core';
import { QueryJSONObject } from '../model';
export declare function _isByProto(val: any, type: any): boolean;
export declare function isArray(val: any): boolean;
export declare function isObject(val: any): val is QueryJSONObject;
export declare function isString(val: any): boolean;
export declare class JSONEncoder extends BaseEncoder {
    encode(data: any): EncodedObject;
    protected toDate(val: any): string;
    protected toRegexp(val: any): string;
}
export declare class JSONDecoder extends BaseDecoder {
    decode(data: any): DecodedObject;
    protected isDate(val: any): boolean;
    protected isRegexp(val: any): boolean;
    protected toDate(val: any): Date;
    protected toRegexp(val: any): RegExp;
}
