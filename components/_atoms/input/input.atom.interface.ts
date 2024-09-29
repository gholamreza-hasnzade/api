// * components
import React from 'react';

export interface IInput {
  disabled?: boolean;
  id?: string;
  name?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  variant?: 'primary' | 'outline' | 'tertiary';
  value?: string | number
}
