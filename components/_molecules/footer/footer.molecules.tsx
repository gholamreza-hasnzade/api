'use client';

// * import tools
import React from 'react';

// * import style
import { FooterMoleculesStyle as S } from '@/components/_molecules/footer/footer.molecules.style';

// * import
import { Typography } from '@/components/_atoms';
export const Footer = () => {
  return (
    <S.Footer>
      <Typography fontSize={36} fontWeight={700}>
        یک اپلیکیشن، برای تمام نیازها
      </Typography>
    </S.Footer>
  );
};
