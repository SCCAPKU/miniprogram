import { BaseService } from './../core';
import { Transaction, QueryService } from './mongo';
export declare class DbService extends BaseService {
    collection(name: string): QueryService;
    startTransaction(): Promise<Transaction>;
}
