'use client';
// * Import Tools
import { FC } from 'react';
import styled from '@emotion/styled';

// * Import interface
import { IForm } from '@/components/_atoms/form/form.atom.interface';

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  width: 700px;
  background: #fff;
  border-radius: 6px;
  padding: 16px;
  gap: 16px;
`;

export const Form: FC<IForm> = ({ onSubmit, children, ...rest }) => {
  return (
    <FormStyle onSubmit={onSubmit} {...rest}>
      {children}
    </FormStyle>
  );
};
