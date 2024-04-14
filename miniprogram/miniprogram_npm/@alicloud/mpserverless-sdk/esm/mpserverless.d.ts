import { MPServerlessMiniAppCore } from './minicore';
interface AppId {
    alipay?: string;
    wechat?: string;
    dingtalk?: string;
}
interface MPServerlessOptions {
    appId: AppId | string;
    spaceId: string;
    clientSecret: string;
    endpoint: string;
}
interface EnvApp {
    request?(options?: any): any;
    httpRequest?(options?: any): any;
    login?(options?: any): any;
    getAuthCode?(options?: any): any;
    uploadFile?(options?: any): any;
    getImageInfo?(options?: any): any;
    getFileInfo?(options?: any): any;
}
interface AuthorOptions {
    authorType?: 'anonymous' | 'unanonymous';
    authType?: 'anonymous' | 'unanonymous';
}
declare enum Platform {
    WECHAT = "wechat",
    ALIPAY = "alipay",
    DINGTALK = "dingtalk"
}
export declare class MPServerless extends MPServerlessMiniAppCore {
    platform: Platform;
    constructor(App: EnvApp, options: MPServerlessOptions);
    private get authProvider();
    init(authorOptions?: AuthorOptions): Promise<any>;
    wrap(myMethod: any): (args: any) => Promise<any>;
}
export {};
