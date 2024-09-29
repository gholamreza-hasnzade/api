'use client';
// * import tools
import { FC } from 'react';
// * import style
import { HeaderMoleculesStyle as S } from '@/components/_molecules/header/header.molecules.style';

// * import interface
import { IHeader } from '@/components/_molecules/header/header.molecules.interface';
// * import componnets
import { ImageAtom as Image } from '@/components/_atoms/image/image.atom';
// * import image
import { IMAGES } from '@/constants/contents';

// * import components
import { Navbar } from '@/components/_molecules';
export const HeaderMolecules: FC<IHeader> = () => {
  return (
    <S.Header>
      <Image alt="holoo store" src={IMAGES.LOGO} height={32} width={90} />
      <Navbar />
    </S.Header>
  );
};
