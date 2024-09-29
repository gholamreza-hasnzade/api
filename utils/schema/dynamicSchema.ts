import * as yup from 'yup';
import { ISchemaConfig } from '@/utils/schema/schema.interface'


//type ISchemaConfig = Record<string, FieldConfig>;

export const createSchema = (config: ISchemaConfig) => {
    const shape: Record<string, yup.AnySchema> = {};

    for (const key in config) {
        const fieldConfig = config[key];
        let validator: yup.AnySchema = yup[fieldConfig.type]();

        if (fieldConfig.trim) {
            validator = (validator as yup.StringSchema).trim();
        }
        if (fieldConfig.min !== undefined) {
            validator = (validator as yup.StringSchema).min(fieldConfig.min, fieldConfig.messages?.min);
        }
        if (fieldConfig.max !== undefined) {
            validator = (validator as yup.StringSchema).max(fieldConfig.max, fieldConfig.messages?.max);
        }
        if (fieldConfig.matches) {
            validator = (validator as yup.StringSchema).matches(fieldConfig.matches, fieldConfig.messages?.matches);
        }
        if (fieldConfig.required) {
            validator = validator.required(fieldConfig.messages?.required);
        }
        if (fieldConfig.oneOf) {
            validator = (validator as yup.BooleanSchema).oneOf(fieldConfig.oneOf, fieldConfig.messages?.oneOf);
        }

        shape[key] = validator;
    }

    return yup.object().shape(shape);
};