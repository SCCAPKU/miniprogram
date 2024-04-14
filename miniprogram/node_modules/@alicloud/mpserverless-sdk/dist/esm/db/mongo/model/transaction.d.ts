import { HTTPTransport, HTTPRequestEncoder } from './../../../core';
import { QueryService } from './query';
export interface TransactionJSONObject {
    transactionId: string;
}
export declare enum TransactionStatus {
    INIT = "init",
    COMMIT = "commit",
    ROLLBACK = "rollback"
}
export declare class Transaction {
    protected id: string;
    protected status: TransactionStatus;
    protected httpTransport: HTTPTransport;
    protected httpRequestEncoder: HTTPRequestEncoder;
    protected queryService: QueryService;
    constructor(httpTransport: HTTPTransport, httpRequestEncoder: HTTPRequestEncoder);
    init(): Promise<void>;
    collection(name: string): QueryService;
    commit(): Promise<import("./result").ResultJSONObject | import("./query").QueryJSONObject>;
    rollback(): Promise<import("./result").ResultJSONObject | import("./query").QueryJSONObject>;
    private checkStatus;
}
