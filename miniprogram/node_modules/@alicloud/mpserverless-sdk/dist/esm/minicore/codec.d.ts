import { GenericObject, HTTPRequestEncoder, HTTPResponseObject, HTTPResponseDecoder, HTTPMethod, PREFIX } from './../core';
export interface MPHTTPRequestObject {
    url: string;
    data: GenericObject<any>;
    method: HTTPMethod;
    timeout?: number;
    headers: GenericObject<string>;
    dataType?: 'json' | 'text' | 'base64';
}
export declare class MPHTTPRequestEncoder extends HTTPRequestEncoder {
    protected spaceId: string;
    protected prefix: PREFIX;
    protected serviceHeaders: GenericObject<string>;
    constructor(endpoint: string, spaceId: string);
    sign(clientSecret: string): void;
    encodeAsHTTPRequestObject(additionalObject: GenericObject<any>): MPHTTPRequestObject;
    clone(): MPHTTPRequestEncoder;
}
export declare class MPHTTPResponseDecoder extends HTTPResponseDecoder {
    protected ERROR_CODES: number[];
    setStatusAndBody(status: number, body: any): void;
    decode(res: GenericObject<any>): HTTPResponseObject;
}
