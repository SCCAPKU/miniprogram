export declare const uploadFileSchema: {
    options: {
        type: string;
        rule: {
            fileSize: {
                type: string;
                required: boolean;
                min: number;
            };
            extension: {
                type: string;
                required: boolean;
                values: string[];
            };
            filePath: {
                type: string;
            };
            env: {
                type: string;
                required: boolean;
                values: string[];
            };
            timeout: {
                type: string;
                required: boolean;
                min: number;
            };
            headers: {
                type: string;
                required: boolean;
                rules: {
                    cacheControl: {
                        type: string;
                        required: boolean;
                    };
                    contentDisposition: {
                        type: string;
                        required: boolean;
                    };
                    contentEncoding: {
                        type: string;
                        required: boolean;
                    };
                    expires: {
                        type: string;
                        required: boolean;
                    };
                };
            };
            meta: {
                type: string;
                required: boolean;
            };
        };
    };
};
export declare const deleteFileSchema: {
    url: string;
};
