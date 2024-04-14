import { MPServerlessCore, MPServerlessOptions as BaseOptions } from './../core';
import { ProxyService } from '@alicloud/mp-proxy-service';
import { DbService } from './../db';
import { UserService } from './../user';
import { FunctionService } from './../function';
import { HighFileSevice } from './file';
export declare class MPServerlessMiniAppCore extends MPServerlessCore {
    db: DbService;
    file: HighFileSevice;
    user: UserService;
    function: FunctionService;
    network: ProxyService;
    constructor(appGlobal: any, options: BaseOptions);
    get version(): string;
    protected get ua(): string;
    protected createTransport(options: BaseOptions): void;
}
