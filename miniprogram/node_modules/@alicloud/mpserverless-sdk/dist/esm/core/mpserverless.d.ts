import { HTTPTransport } from './transport';
import { Logger, MPServerlessOptions } from './global';
export declare class MPServerlessCore {
    protected options: MPServerlessOptions;
    protected _debug: boolean;
    protected _logger: Logger;
    protected transport: HTTPTransport;
    constructor(options: MPServerlessOptions);
    setDebugFlag(flag: boolean): void;
    get debug(): boolean;
    get logger(): Logger;
    protected createTransport(options: MPServerlessOptions): void;
}
