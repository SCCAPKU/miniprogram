import { GenericObject, EncodedObject, HTTPTransport, HTTPRequestEncoder } from './../../../core';
import { JSONEncoder, JSONDecoder } from '../codec';
import { Collection, CollectionJSONObject } from './collection';
import { BaseCommand, CommandJSONObject } from './command';
import { ResultJSONObject } from './result';
export interface QueryJSONObject extends CollectionJSONObject, CommandJSONObject, EncodedObject {
}
export declare class Query {
    protected transId: string;
    protected coll: Collection;
    protected comm: BaseCommand;
    protected encoder: JSONEncoder;
    protected decoder: JSONDecoder;
    transaction(): Promise<string>;
    commit(): Promise<ResultJSONObject | QueryJSONObject>;
    rollback(): Promise<ResultJSONObject | QueryJSONObject>;
    collection(name: string): this;
    aggregate(pipeline: Array<GenericObject<any>>, options?: GenericObject<any>): Promise<QueryJSONObject | ResultJSONObject>;
    count(query: GenericObject<any>, options?: GenericObject<any>): Promise<QueryJSONObject | ResultJSONObject>;
    distinct(key: string, query: GenericObject<any>, options?: GenericObject<any>): Promise<QueryJSONObject | ResultJSONObject>;
    findOne(query: GenericObject<any>, options?: GenericObject<any>): Promise<QueryJSONObject | ResultJSONObject>;
    find(query?: GenericObject<any>, options?: GenericObject<any>): Promise<QueryJSONObject | ResultJSONObject>;
    insertOne(doc: GenericObject<any>, options?: GenericObject<any>): Promise<QueryJSONObject | ResultJSONObject>;
    insertMany(docs: Array<GenericObject<any>>, options?: GenericObject<any>): Promise<QueryJSONObject | ResultJSONObject>;
    findOneAndUpdate(filter: GenericObject<any>, update: GenericObject<any>, options?: GenericObject<any>): Promise<QueryJSONObject | ResultJSONObject>;
    updateOne(filter: GenericObject<any>, update: GenericObject<any>, options?: GenericObject<any>): Promise<QueryJSONObject | ResultJSONObject>;
    updateMany(filter: GenericObject<any>, update: GenericObject<any>, options?: GenericObject<any>): Promise<QueryJSONObject | ResultJSONObject>;
    findOneAndReplace(filter: GenericObject<any>, replacement: GenericObject<any>, options?: GenericObject<any>): Promise<QueryJSONObject | ResultJSONObject>;
    replaceOne(filter: GenericObject<any>, doc: GenericObject<any>, options?: GenericObject<any>): Promise<QueryJSONObject | ResultJSONObject>;
    findOneAndDelete(filter: GenericObject<any>, options?: GenericObject<any>): Promise<QueryJSONObject | ResultJSONObject>;
    deleteOne(filter: GenericObject<any>, options?: GenericObject<any>): Promise<QueryJSONObject | ResultJSONObject>;
    deleteMany(filter?: GenericObject<any>, options?: GenericObject<any>): Promise<QueryJSONObject | ResultJSONObject>;
    validate(): void;
    execute(..._: any[]): Promise<QueryJSONObject | ResultJSONObject>;
    private validateTransactionAction;
}
export declare class QueryService extends Query {
    getEncoder: () => HTTPRequestEncoder;
    getTransport: () => HTTPTransport;
    execute(): Promise<ResultJSONObject>;
}
