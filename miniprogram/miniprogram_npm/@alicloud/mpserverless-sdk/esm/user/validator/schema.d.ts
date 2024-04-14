export declare const authorizeSchema: {
    options: {
        type: string;
        rule: {
            authType: {
                type: string;
                required: boolean;
                values: string[];
            };
            authProvider: {
                type: string;
                required: boolean;
                values: string[];
            };
        };
    };
};
export declare const getInfoSchema: {
    options: {
        type: string;
        required: boolean;
        rule: {
            authProvider: {
                type: string;
                required: boolean;
                values: string[];
            };
        };
    };
};
