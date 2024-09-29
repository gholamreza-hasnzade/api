import { ReactNode } from 'react';

export interface IForm {
    onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
    children?: ReactNode;
}