// * Import tools
import React, { FC } from 'react';
import styled from '@emotion/styled';

// * Import interface
import { ITypography } from '@/components/_atoms/typography/typography.atom.interface';

// Single Responsibility Principle (SRP)
const TypographyAtom = styled.p<ITypography>`
  color: ${({ theme, color }) => (color ? color : theme.BLACK)};
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : '16px')};
  font-weight: ${({ fontWeight }) => (fontWeight ? `${fontWeight}` : '500')};
  line-height: 1.5;
`;

// Open/Closed Principle (OCP)
export const Typography: FC<ITypography> = ({ id, fontWeight, fontSize, children, color }) => {
  // Dependency Inversion Principle (DIP) - Consider passing theme as a prop
  return (
    <TypographyAtom id={id} color={color} fontWeight={fontWeight} fontSize={fontSize}>
      {children}
    </TypographyAtom>
  );
};

// Interface Segregation Principle (ISP) - Consider splitting ITypography if needed
