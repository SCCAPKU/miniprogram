import { HTTPTransport } from '../transport';
import { HTTPRequestEncoder } from '../codec';
import { PREFIX } from '../constant';
export declare class BaseService {
    protected transport: HTTPTransport;
    constructor(transport: HTTPTransport);
    protected getEncoder(prefix?: PREFIX): HTTPRequestEncoder;
}
