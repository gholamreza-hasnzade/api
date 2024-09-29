import { ReactNode } from 'react';
export interface IAddModal {
    title?: string;
    renderBody?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    onClick?: () => void;
}
