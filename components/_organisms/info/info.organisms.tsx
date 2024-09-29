'use client';
import React from 'react';

//* import components
import { Image, Typography } from '@/components/_atoms';
// * import style
import { InfOrganismStyle as S } from '@/components/_organisms/info/info.organisms.style';

import { IMAGES } from '@/constants/contents';
export const Info = () => {
  return (
    <S.Info>
      <S.Info_right>
        <div className="information">
          <h1>تجربه‌ی زندگی راحت‌تر، سریع‌تر و به‌صرفه‌تر با سوپراپلیکیشن اسنپ!</h1>

          <Typography color="#fff" fontSize={18}>
            از درخواست خودرو گرفته تا سفارش غذا، خرید سوپرمارکتی، خرید بلیط سفر، رزرو هتل و... را
            میتوانید با اسنپ انجام دهید.
          </Typography>
        </div>
      </S.Info_right>
      <S.Info_left>
        <Image src={IMAGES.Homepage} alt="Home page" />
      </S.Info_left>
    </S.Info>
  );
};
