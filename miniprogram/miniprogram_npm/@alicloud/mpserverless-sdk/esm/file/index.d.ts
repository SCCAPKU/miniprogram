import { BaseService, GenericObject, HTTPTransport } from './../core';
export interface OSSUploadOptions {
    id: string;
    key: string;
    host: string;
    policy: string;
    Signature: string;
    OSSAccessKeyId: string;
}
export interface OSSUploadHeaders {
    'Expires'?: string;
    'Cache-Control'?: string;
    'Content-Type'?: string;
    'Content-Encoding'?: string;
    'Content-Disposition'?: string;
}
export interface OSSUploadResponseDataJSONObject {
    id: string;
    key: string;
    host: string;
    policy: string;
    Signature: string;
    OSSAccessKeyId: string;
    securityToken: string;
    cdnDomain: string;
}
export declare function OSSUploadResponseFormat(data: GenericObject<string>): OSSUploadResponseDataJSONObject;
export declare const OSSUploadHeaderList: string[];
export declare const WHITELIST_EXTENSIONS: string[];
declare enum OSSEnv {
    PUBLIC = "public",
    PRIVATE = "private"
}
export interface FileUploadOptions {
    filePath: string;
    fileName?: string;
    fileSize?: number;
    extension?: string;
    env?: OSSEnv;
    path?: string;
    meta?: GenericObject<string>;
    headers?: {
        contentType?: string;
        cacheControl?: string;
        contentEncoding?: string;
        contentDisposition?: string;
    };
    file?: string | any;
    timeout?: number;
}
export declare class MPFileService extends BaseService {
    private upload;
    constructor(transport: HTTPTransport, options: any);
    deleteFile(url: string): Promise<any>;
    uploadFile(options: FileUploadOptions): Promise<any>;
    getOSSUploadOptionsFromPath(relativePath: string, targetPath: string, fileSize?: number): Promise<any>;
    reportOSSUpload(id: string, contentType?: string): Promise<void>;
    private validate;
}
export {};
