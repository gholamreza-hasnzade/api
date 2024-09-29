import { ISchemaConfig } from '@/utils/schema/schema.interface'

export const registerFormConfig: ISchemaConfig = {
    holooSoftwareSerial: {
        type: 'string',
        trim: true,
        min: 6,
        max: 12,
        required: true,
        messages: {
            min: 'این فیلد نباید کمتر از 6 کاراکتر باشد',
            max: 'این فیلد نباید بیشتر از 12 کاراکتر باشد',
            required: 'این فیلد اجباری می باشد'
        }
    },
    holooSoftwareCode: {
        type: 'string',
        trim: true,
        min: 6,
        max: 12,
        required: true,
        messages: {
            min: 'این فیلد نباید کمتر از 6 کاراکتر باشد',
            max: 'این فیلد نباید بیشتر از 12 کاراکتر باشد',
            required: 'این فیلد اجباری می باشد'
        }
    },
    ownerMobileNo: {
        type: 'string',
        trim: true,
        matches: /^[0][9][0-9][0-9]{8,8}$/,
        required: true,
        messages: {
            matches: 'شماره موبایل معتبر نمی باشد',
            required: 'این فیلد اجباری می باشد'
        }
    },
    acceptTerms: {
        type: 'boolean',
        oneOf: [true],
        required: true,
        messages: {
            oneOf: 'باید شرایط را بپذیرید',
            required: 'پذیرفتن شرایط اجباری است'
        }
    }
};
