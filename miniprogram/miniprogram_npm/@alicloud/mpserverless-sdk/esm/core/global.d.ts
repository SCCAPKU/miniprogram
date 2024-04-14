import { HTTPTransport } from './transport';
export interface Logger {
    debug(message?: any, ...optionalParams: any[]): void;
    error(message?: any, ...optionalParams: any[]): void;
    warn(message?: any, ...optionalParams: any[]): void;
    info(message?: any, ...optionalParams: any[]): void;
    log(message?: any, ...optionalParams: any[]): void;
}
export interface GenericObject<T> {
    [key: string]: T;
}
export interface MPServerlessOptions {
    spaceId: string;
    timeout?: string | number;
    endpoint: string;
    httpTransport?: typeof HTTPTransport;
    userId?: string;
    [key: string]: any;
}
