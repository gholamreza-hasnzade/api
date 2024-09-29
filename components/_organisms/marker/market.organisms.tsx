'use client';
// * import tools
import React from 'react';

// * import style
import { MarketOrganismsStyle as S } from '@/components/_organisms/marker/market.organisms.style';

// * import components
import { LinkAtom, Image } from '@/components/_atoms';

// * import store
import { IMAGES } from '@/constants/contents';

export const Markets = () => {
  return (
    <S.Market>
      <LinkAtom href="#">
        <Image src={IMAGES.STORE} alt="store" />
      </LinkAtom>
      <LinkAtom href="#">
        <Image src={IMAGES.STORE} alt="store" />
      </LinkAtom>
      <LinkAtom href="#">
        <Image src={IMAGES.STORE} alt="store" />
      </LinkAtom>
      <LinkAtom href="#">
        <Image src={IMAGES.STORE} alt="store" />
      </LinkAtom>
    </S.Market>
  );
};
