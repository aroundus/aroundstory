import { addons } from '@storybook/manager-api';
import { themes } from '@storybook/theming';

addons.setConfig({
  theme: {
    ...themes.light,
    brandImage: require('../src/assets/icons/symbol-mark.svg'),
    colorPrimary: '94b080',
  },
});
