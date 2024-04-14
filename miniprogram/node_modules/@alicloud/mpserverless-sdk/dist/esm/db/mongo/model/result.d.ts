import { JSONEncoder, JSONDecoder } from '../codec';
export interface ResultJSONObject {
    affectedDocs: number;
    transactionId: string;
    result: any;
}
export declare class Result {
    protected raw: any;
    protected encoder: JSONEncoder;
    protected decoder: JSONDecoder;
    constructor(data: ResultJSONObject);
    inspect(): ResultJSONObject;
}
