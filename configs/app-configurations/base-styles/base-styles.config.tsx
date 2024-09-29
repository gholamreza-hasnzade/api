// * Import Tools
import { Global } from '@emotion/react';

// * Import config reset style
import { BaseStylesConfigReset } from '@/configs/app-configurations/base-styles/base-styles.config.reset';

export const BaseStylesConfig = () => {
  return (
    <>
      <Global styles={BaseStylesConfigReset} />
    </>
  );
};
