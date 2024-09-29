import React, { forwardRef } from 'react';
import styled from '@emotion/styled';
import { IInput } from '@/components/_atoms/input/input.atom.interface';

const Input = styled.input<IInput>`
  width: 100%;
  height: 35px;
  border-radius: 3px;
  font-family: 'IRANSans';
  padding-right: 6px;
  color: ${(props) => (props.disabled ? '#ccc' : '#333')};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};

  &::placeholder {
    color: #a7a7a7;
  }

  ${({ variant }) => {
    switch (variant) {
      case 'primary':
        return `
          background-color: #fff;
          border: 1px solid #d1d1d1;
        `;
      case 'outline':
        return `
          background-color: transparent;
          border: 1px solid #ccc;
        `;
      case 'tertiary':
        return `
          background-color: transparent;
          border-bottom: 1px solid #007bff;
        `;
      default:
        return 'primary';
    }
  }}
`;

export const InputAtom = forwardRef<HTMLInputElement, IInput>(
  (
    {
      disabled = false,
      id,
      name,
      onChange,
      placeholder,
      type = 'text',
      variant = 'primary',
      value,
    },
    ref,
  ) => {
    return (
      <Input
        id={id}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        type={type}
        disabled={disabled}
        variant={variant}
        value={value}
        ref={ref}
      />
    );
  },
);

InputAtom.displayName = 'InputAtom';
