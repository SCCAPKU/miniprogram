import { GenericObject } from './../../../core';
import { PERMISSION } from '../constant';
export interface CommandJSONObject extends GenericObject<any> {
    options?: GenericObject<any>;
    command?: string;
}
export declare class BaseCommand {
    readonly name: string;
    protected _schema: GenericObject<any>;
    protected _argMap: GenericObject<any>;
    protected _permission: PERMISSION;
    constructor(argMap: GenericObject<any>);
    get permission(): PERMISSION;
    get argMap(): GenericObject<any>;
    get schema(): GenericObject<any>;
    augmentOptions(options: GenericObject<any>): void;
    inspect(): CommandJSONObject;
}
export declare class AggregateCommand extends BaseCommand {
    name: string;
    protected _schema: {
        pipeline: string;
        options: {
            type: string;
            required: boolean;
            rule: {
                explain: {
                    type: string;
                    required: boolean;
                };
                allowDiskUse: {
                    type: string;
                    required: boolean;
                };
                maxTimeMS: {
                    type: string;
                    required: boolean;
                    min: number;
                };
                bypassDocumentValidation: {
                    type: string;
                    required: boolean;
                };
                raw: {
                    type: string;
                    required: boolean;
                };
                promoteLongs: {
                    type: string;
                    required: boolean;
                };
                promoteValues: {
                    type: string;
                    required: boolean;
                };
                promoteBuffers: {
                    type: string;
                    required: boolean;
                };
                collation: {
                    type: string;
                    required: boolean;
                };
            };
        };
    };
    protected _permission: PERMISSION;
}
export declare class CountCommand extends BaseCommand {
    name: string;
    protected _schema: {
        query: string;
        options: {
            type: string;
            required: boolean;
            rule: {
                limit: {
                    type: string;
                    required: boolean;
                    min: number;
                };
                skip: {
                    type: string;
                    required: boolean;
                    min: number;
                };
                maxTimeMS: {
                    type: string;
                    required: boolean;
                    min: number;
                };
            };
        };
    };
    protected _permission: PERMISSION;
}
export declare class DistinctCommand extends BaseCommand {
    name: string;
    protected _schema: {
        key: string;
        query: string;
        options: {
            type: string;
            required: boolean;
        };
    };
    protected _permission: PERMISSION;
}
export declare class FindDocumentCommand extends BaseCommand {
    name: string;
    protected _schema: {
        query: {
            type: string;
            required: boolean;
        };
        options: {
            type: string;
            required: boolean;
            rule: {
                limit: {
                    type: string;
                    required: boolean;
                    min: number;
                };
                skip: {
                    type: string;
                    required: boolean;
                    min: number;
                };
                maxTimeMS: {
                    type: string;
                    required: boolean;
                    min: number;
                };
                sort: {
                    type: string;
                    required: boolean;
                };
                projection: {
                    type: string;
                    required: boolean;
                };
                hint: {
                    type: string;
                    required: boolean;
                };
            };
        };
    };
    protected _permission: PERMISSION;
}
export declare class FindDocumentsCommand extends BaseCommand {
    name: string;
    protected _schema: {
        query: {
            type: string;
            required: boolean;
        };
        options: {
            type: string;
            required: boolean;
            rule: {
                limit: {
                    type: string;
                    required: boolean;
                    min: number;
                };
                skip: {
                    type: string;
                    required: boolean;
                    min: number;
                };
                maxTimeMS: {
                    type: string;
                    required: boolean;
                    min: number;
                };
                sort: {
                    type: string;
                    required: boolean;
                };
                projection: {
                    type: string;
                    required: boolean;
                };
                hint: {
                    type: string;
                    required: boolean;
                };
            };
        };
    };
    protected _permission: PERMISSION;
}
export declare class InsertDocumentCommand extends BaseCommand {
    name: string;
    protected _schema: {
        doc: string;
        options: {
            type: string;
            required: boolean;
        };
    };
    protected _permission: PERMISSION;
}
export declare class InsertDocumentsCommand extends BaseCommand {
    name: string;
    protected _schema: {
        docs: string;
        options: {
            type: string;
            required: boolean;
        };
    };
    protected _permission: PERMISSION;
}
export declare class FindAndUpdateDocumentCommand extends BaseCommand {
    name: string;
    protected _schema: {
        filter: string;
        update: string;
        options: {
            type: string;
            required: boolean;
            rule: {
                maxTimeMS: {
                    type: string;
                    min: number;
                    required: boolean;
                };
                sort: {
                    type: string;
                    required: boolean;
                };
                upsert: {
                    type: string;
                    required: boolean;
                };
                projection: {
                    type: string;
                    required: boolean;
                };
                returnNewDocument: {
                    type: string;
                    required: boolean;
                };
            };
        };
    };
    protected _permission: PERMISSION;
}
export declare class UpdateDocumentCommand extends BaseCommand {
    name: string;
    protected _schema: {
        filter: string;
        update: string;
        options: {
            type: string;
            required: boolean;
            rule: {
                upsert: {
                    type: string;
                    required: boolean;
                };
            };
        };
    };
    protected _permission: PERMISSION;
}
export declare class UpdateDocumentsCommand extends BaseCommand {
    name: string;
    protected _schema: {
        filter: string;
        update: string;
        options: {
            type: string;
            required: boolean;
            rule: {
                upsert: {
                    type: string;
                    required: boolean;
                };
            };
        };
    };
    protected _permission: PERMISSION;
}
export declare class FindAndReplaceDocumentCommand extends BaseCommand {
    name: string;
    protected _schema: {
        filter: string;
        replacement: string;
        options: {
            type: string;
            required: boolean;
            rule: {
                maxTimeMS: {
                    type: string;
                    min: number;
                    required: boolean;
                };
                sort: {
                    type: string;
                    required: boolean;
                };
                upsert: {
                    type: string;
                    required: boolean;
                };
                projection: {
                    type: string;
                    required: boolean;
                };
            };
        };
    };
    protected _permission: PERMISSION;
}
export declare class ReplaceDocumentCommand extends BaseCommand {
    name: string;
    protected _schema: {
        filter: string;
        doc: string;
        options: {
            type: string;
            required: boolean;
            rule: {
                upsert: {
                    type: string;
                    required: boolean;
                };
            };
        };
    };
    protected _permission: PERMISSION;
}
export declare class FindAndDeleteDocumentCommand extends BaseCommand {
    name: string;
    protected _schema: {
        filter: string;
        options: {
            type: string;
            required: boolean;
            rule: {
                maxTimeMS: {
                    type: string;
                    min: number;
                    required: boolean;
                };
                sort: {
                    type: string;
                    required: boolean;
                };
                projection: {
                    type: string;
                    required: boolean;
                };
            };
        };
    };
    protected _permission: PERMISSION;
}
export declare class DeleteDocumentCommand extends BaseCommand {
    name: string;
    protected _schema: {
        filter: {
            type: string;
        };
        options: {
            type: string;
            required: boolean;
        };
    };
    protected _permission: PERMISSION;
}
export declare class DeleteDocumentsCommand extends BaseCommand {
    name: string;
    protected _schema: {
        filter: {
            type: string;
        };
        options: {
            type: string;
            required: boolean;
        };
    };
    protected _permission: PERMISSION;
}
export declare class StartTransactionCommand extends BaseCommand {
    name: string;
}
export declare class CommitTransactionCommand extends BaseCommand {
    name: string;
}
export declare class AbortTransactionCommand extends BaseCommand {
    name: string;
}
