// * import tools
import React, { FC } from 'react';
import styled from '@emotion/styled';

// *
import { IFlex } from '@/components/_atoms/flex/Flex.atom.interface';

const Flex = styled.div<IFlex>`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  justify-content: ${({ justify }) => justify || 'flex-start'};
  align-items: ${({ align }) => align || 'stretch'};
  flex-wrap: ${({ wrap }) => wrap || 'nowrap'};
  gap: ${({ gap }) => gap || '0'};
  height: ${({ height }) => `${height}px` || 'unset'};
  width: ${({ width }) => `${width}px` || 'unset'};
  /*   margin-top: 16px; */
  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;
export const FlexAtom: FC<IFlex> = ({ children, ...rest }) => {
  return <Flex {...rest}>{children}</Flex>;
};
