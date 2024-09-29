// * Import Casual modules
import { FC } from 'react';

// * Import Tools
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';

// * import interfaces
import { IEmotionConfig } from '@/configs/app-configurations/emotion/emotion.config.interface';

// * import constants
import { THEME_LIGHT } from '@/constants/themes';

export const EmotionConfig: FC<IEmotionConfig> = ({ children }) => {
  return <EmotionThemeProvider theme={THEME_LIGHT}>{children}</EmotionThemeProvider>;
};
