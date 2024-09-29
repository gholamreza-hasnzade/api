'use client';
// * import tools
import { FC } from 'react';
import styled from '@emotion/styled';
// * import interface
import { IInputGroup } from '@/components/_atoms/InputField/InputGroup.atom.interface';

const InputGroupStyle = styled('div')`
  width: 100%;
  padding: 3px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
export const InputGroupAtom: FC<IInputGroup> = ({ children }) => {
  return <InputGroupStyle>{children}</InputGroupStyle>;
};
