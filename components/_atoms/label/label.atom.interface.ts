// * Import Interfaces
import { ReactNode } from 'react';

export interface ILabel {
    /**
    * The text content of the label.
    * Required prop for the component.
    */
    title?: ReactNode;
    /**
     * A boolean flag to indicate whether the label is required for the associated input.
     * Defaults to `false` if not provided.
     */
    isRequired?: boolean;
    /**
     * The HTML element ID for which this label is associated.
     */
    htmlFor?: string;
}