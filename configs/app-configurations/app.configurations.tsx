'use client';
// * Import Casual modules
import { FC } from 'react';

// * import react-hot-toast
import { Toaster } from 'react-hot-toast';

// * Import interfase
import { IAppConfigurations } from '@/configs/app-configurations/app.configurations.interface';

// * import config
import { EmotionConfig } from '@/configs/app-configurations/emotion/emotion.config';
import { BaseStylesConfig } from '@/configs/app-configurations/base-styles/base-styles.config';

export const AppConfigurations: FC<IAppConfigurations> = ({ children }) => {
  return (
    <EmotionConfig>
      <Toaster />
      <BaseStylesConfig />
      {children}
    </EmotionConfig>
  );
};
