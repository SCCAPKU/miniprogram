interface ErrorOptions {
    code: string;
    message: string;
}
interface ErrorConfig {
    [key: string]: ErrorOptions;
}
export declare class ErrorClass extends Error {
    code: string;
    message: string;
    static code: string;
    static prefix: string;
    constructor(err?: Error | string, customMessage?: string);
}
export declare function MPServerlessErrorClass(errorConfig: ErrorConfig, defaultConfig?: ErrorOptions): {
    [key: string]: typeof ErrorClass;
};
export declare const bizError: {
    [key: string]: typeof ErrorClass;
};
export {};
