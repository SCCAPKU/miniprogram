declare function ruleOfField(_: any, value: any, raw?: any): string;
declare function ruleOfFields(_: any, value: any): string;
declare function ruleOfSort(_: any, value: any): string;
declare function ruleOfProjection(_: any, value: any): string;
declare function ruleOfNobject(_: any, value: any): string;
declare const rules: {
    ruleOfField: typeof ruleOfField;
    ruleOfFields: typeof ruleOfFields;
    ruleOfSort: typeof ruleOfSort;
    ruleOfProjection: typeof ruleOfProjection;
    ruleOfNobject: typeof ruleOfNobject;
};
export { rules };
