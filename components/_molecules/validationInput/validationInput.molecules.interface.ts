

export interface IValidationInput {
    title: React.ReactNode;
    isRequired?: boolean;
    placeholder?: string;
    type?: string;
    variant?: 'primary' | 'outline' | 'tertiary';
    value?: string | number;
    name?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    formError?: React.ReactNode;
    color?: string;
    fontSize?: number;
    helperTitle?: string
}