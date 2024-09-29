// * Import tools
import React, { FC } from 'react';
import styled from '@emotion/styled';

// * Interface
import { ILabel } from '@/components/_atoms/label/label.atom.interface';

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 5px;
`;
const Title = styled.span`
  color: ${({ theme }) => theme?.BLACK}; // Default to black if theme unavailable
  font-size: 12px;
  font-weight: 500;
`;

const Required = styled.span`
  color: red;
  font-size: 12px;
`;

export const LabelAtom: FC<ILabel> = ({ title, isRequired = false, htmlFor }) => {
  return (
    <Label htmlFor={htmlFor}>
      {' '}
      {/* Ensure Label is rendered */}
      <Title>{title}</Title>
      {isRequired && <Required>*</Required>}
    </Label>
  );
};
