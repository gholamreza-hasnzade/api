// hooks/useRegisterForm.ts
'use client';
// * import tools
import { useState, useCallback, useRef } from 'react';
import * as yup from 'yup';
import toast from 'react-hot-toast';
import axios, { AxiosResponse, CancelTokenSource } from 'axios';

// * import utils
import { createSchema } from '@/utils/schema/dynamicSchema';
import { registerFormConfig } from '@/utils/schema/formConfigs';
// * import service
import axiosService from '@/service/HttpInterceptor';
// * import interface
import { IForm, IFieldName } from '@/components/_organisms/register/register.organisms.interface';


const initialFormState: IForm = {
    holooSoftwareSerial: '',
    holooSoftwareCode: '',
    ownerMobileNo: '',
    isOpenRule: false,
    isOpenVerify: false,
    formError: {},
    isLoading: false,
    acceptTerms: false,
};
const useRegisterForm = () => {
    const schema = createSchema(registerFormConfig);

    const [form, setForm] = useState<IForm>(initialFormState);
    const cancelTokenSource = useRef<CancelTokenSource | null>(null);
    const handleChange = useCallback((fieldName: IFieldName, value: string | number) => {
        setForm((prevForm) => ({
            ...prevForm,
            [fieldName]: value,
        }));
        validateField(fieldName, value);
    }, []);

    const handleFormChange = useCallback((fieldName: keyof IForm, value?: boolean) => {
        setForm((prevForm) => {
            let newValue;
            switch (fieldName) {
                case 'isOpenVerify':
                    newValue = value !== undefined ? value : !prevForm.isOpenVerify;
                    break;
                case 'acceptTerms':
                    newValue = value !== undefined ? value : !prevForm.acceptTerms;
                    validateField(fieldName, newValue);
                    break;
                default:
                    newValue = value !== undefined ? value : !prevForm[fieldName];
            }
            return {
                ...prevForm,
                [fieldName]: newValue,
            };
        });
    }, []);

    const handleSubmit = useCallback(async (event: React.FormEvent) => {
        event.preventDefault();
        setForm((prevForm) => ({ ...prevForm, isLoading: true }));
        cancelTokenSource.current = axios.CancelToken.source();
        try {
            if (form.formError?.acceptTerms) {
                toast.error(`${form.formError?.acceptTerms}`);
            }

            await schema.validate(
                { holooSoftwareSerial: form.holooSoftwareSerial, holooSoftwareCode: form.holooSoftwareCode, ownerMobileNo: form.ownerMobileNo, acceptTerms: form.acceptTerms },
                { abortEarly: false },
            );

            const body = {
                holooSoftwareSerial: form.holooSoftwareSerial,
                holooSoftwareCode: form.holooSoftwareCode,
                ownerMobileNo: form.ownerMobileNo,
                contractPublicKey: '123',
            };



            const { data }: AxiosResponse = await axiosService.post(
                '/HolooClientOnBoardControllers/PostHolooClientOnBoard',
                JSON.stringify(body),
                { cancelToken: cancelTokenSource.current?.token }
            );


            if (data?.Status) {
                setForm((prevForm) => ({
                    ...prevForm,
                    isOpenVerify: true,
                    isLoading: false,
                    response: data?.Data
                }))
            }
        } catch (err) {

            if (axios.isCancel(err)) {
                toast.error('در خواست لغو شد');

            } else if (err instanceof yup.ValidationError) {

                const validationErrors = err.inner.reduce(
                    (acc: Record<string, string>, err: yup.ValidationError) => {
                        if (err.path) {
                            acc[err.path] = err.message;
                        }
                        return acc;
                    },
                    {},
                );
                setForm((prevForm) => ({
                    ...prevForm,
                    formError: validationErrors,
                    isLoading: false,
                }));
            } else {
                toast.error(' مشکلی پیش آمده است');

                setForm((prevForm) => ({ ...prevForm, isLoading: false }));
                if (cancelTokenSource.current) {
                    cancelTokenSource.current.cancel('Operation canceled by the user.');
                }
            }
        }
    }, [form, handleFormChange, schema]);

    const validateField = useCallback(async (fieldName: keyof IForm, value: any) => {
        try {
            await schema.validateAt(fieldName, { [fieldName]: value });
            setForm((prevForm) => ({
                ...prevForm,
                formError: {
                    ...prevForm.formError,
                    [fieldName]: '',
                },
            }));
        } catch (err: any) {
            if (err instanceof yup.ValidationError) {
                setForm((prevForm) => ({
                    ...prevForm,
                    formError: {
                        ...prevForm.formError,
                        [fieldName]: err.message,
                    },
                }));
            } else {
                console.error('Unexpected error', err);
            }
        }
    }, [schema]);

    const resetForm = useCallback(() => {
        setForm(initialFormState);
        if (cancelTokenSource.current) {
            cancelTokenSource.current.cancel('Operation canceled by the user.');
        }
    }, []);



    return {
        form,
        handleChange,
        handleFormChange,
        handleSubmit,
        resetForm,
    };
};

export default useRegisterForm;
