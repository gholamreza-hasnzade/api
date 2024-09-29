'use client';

import styled from '@emotion/styled';

// * import components
import { LinkAtom } from '@/components/_atoms';

const NavbarMoleculesStyle = styled('nav')`
  display: flex;
  align-items: center;
  gap: 32px;
`;
export const NavbarMolecules = () => {
  return (
    <NavbarMoleculesStyle>
      <LinkAtom href={'#'}> سوپراپ اسنپ </LinkAtom>
      <LinkAtom href={'#'}> ثبت نام راننده اسنپ </LinkAtom>
      <LinkAtom href={'#'}> پنل سازمانی </LinkAtom>
      <LinkAtom href={'#'}> بلاگ </LinkAtom>
      <LinkAtom href={'#'}> درباره اسنپ </LinkAtom>
    </NavbarMoleculesStyle>
  );
};
