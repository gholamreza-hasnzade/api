// * Import Interfaces
import { ReactNode } from 'react';

export interface ITypography {
  // * your interface
  id?: string;
  fontSize?: number | string;
  fontWeight?: number | string;
  children?: ReactNode;
  color?: string;
}
