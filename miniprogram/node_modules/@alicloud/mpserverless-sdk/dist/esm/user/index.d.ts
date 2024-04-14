import { BaseService, HTTPTransport, HTTPRequestEncoder } from './../core';
export interface GetInfoOptions {
    authProvider?: string;
}
export interface AuthorizeOptions {
    authProvider?: OAuthProvider;
    authType?: AuthType;
}
export declare type OAuthProvider = 'alipay_openapi' | 'wechat_openapi' | 'dingtalk_openapi';
export declare type OAuthScope = 'auth_user' | 'auth_zhima' | 'auth_base';
export declare enum AuthType {
    ANONYMOUS = "anonymous",
    DEFAULT = ""
}
export interface MPOAuthObject {
    scopes: OAuthScope | OAuthScope[];
}
export declare class UserService extends BaseService {
    protected pendingRequest: Promise<any>;
    protected scope: OAuthScope;
    protected appId: string;
    protected appSecret: string;
    protected isvAppId: string;
    protected ua: string;
    protected authorizeOptions: AuthorizeOptions;
    protected accessToken: string;
    private getAuthCode;
    private httpRequest;
    private currentAuthType;
    constructor(transport: HTTPTransport, options: any);
    authorize(options?: AuthorizeOptions): Promise<{
        success: boolean;
    }>;
    getInfo(options?: GetInfoOptions): Promise<any>;
    setRequestToken(encoder: HTTPRequestEncoder, refresh?: boolean): Promise<HTTPRequestEncoder>;
    private authorizeHandler;
    private anonymousAuthorizeHandler;
    private validate;
}
