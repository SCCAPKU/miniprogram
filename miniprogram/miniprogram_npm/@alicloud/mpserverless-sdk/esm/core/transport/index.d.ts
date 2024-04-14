import { TransportProtocol, PREFIX } from '../constant';
import { Logger } from '../global';
import { HTTPRequestEncoder, HTTPResponseObject } from '../codec';
export declare class HTTPTransport {
    endpoint: string;
    authType: string;
    protocol: TransportProtocol;
    logger: Logger;
    protected appId: string;
    protected appSecret: string;
    protected spaceId: string;
    protected timeout: number;
    protected ua: string;
    constructor(endpoint: string);
    getEncoder(prefix?: PREFIX): HTTPRequestEncoder;
    setAppId(appId: string): void;
    setAppSecret(privateKey: string): HTTPTransport;
    setUA(ua: string): HTTPTransport;
    setLogger(logger: Logger): void;
    setTimeout(timeout?: number | string): void;
    get timeoutOption(): number;
    setSpaceId(spaceId: string): void;
    request(encoder: HTTPRequestEncoder): Promise<HTTPResponseObject>;
}
