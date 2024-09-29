export type IFieldConfig = {
    type: 'string' | 'number' | 'boolean';
    trim?: boolean;
    min?: number;
    max?: number;
    matches?: RegExp;
    required?: boolean;
    oneOf?: any[];
    messages?: {
        min?: string;
        max?: string;
        matches?: string;
        required?: string;
        oneOf?: string;
    };
};

export type ISchemaConfig = Record<string, IFieldConfig>;
