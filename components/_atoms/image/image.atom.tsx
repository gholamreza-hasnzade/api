'use client';

// * import tools
import { FC } from 'react';
import Image from 'next/image';

// * interface
import { IImage } from '@/components/_atoms/image/image.atom.interface';

export const ImageAtom: FC<IImage> = ({ src, alt, width, height, ...rest }) => {
  return <Image src={src} alt={alt} width={width} height={height} {...rest} />;
};
