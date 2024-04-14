import { HTTPTransport, HTTPResponseObject, PREFIX } from './../core';
import { UserService } from './../user';
import { MPHTTPRequestObject, MPHTTPRequestEncoder } from './codec';
export declare class MPHTTPTransport extends HTTPTransport {
    protected userService: UserService;
    protected httpRequest: (options: MPHTTPRequestObject) => Promise<HTTPResponseObject>;
    constructor(endpoint: string);
    setUserService(userService: any): void;
    setRequest(request: any): void;
    getEncoder(prefix?: PREFIX): MPHTTPRequestEncoder;
    request(encoder: MPHTTPRequestEncoder, retried?: boolean): Promise<HTTPResponseObject>;
    wrapApi(myMethod: any): (args: any) => Promise<HTTPResponseObject>;
}
