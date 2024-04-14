export interface CollectionJSONObject {
    collection: string;
}
export declare class Collection {
    protected name: string;
    constructor(name: string);
    inspect(): CollectionJSONObject;
}
