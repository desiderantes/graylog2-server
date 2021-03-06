// @flow strict
import PropTypes from 'prop-types';

import breakpoints, { breakpointPropTypes } from './breakpoints';
import colors, { colorsPropTypes } from './colors';
import fonts, { fontsPropTypes } from './fonts';
import utils, { utilsPropTypes } from './utils';
import type { ThemeInterface } from './types';

const theme: ThemeInterface = {
  breakpoints,
  colors,
  utils,
  fonts,
};

const themePropTypes = PropTypes.shape({
  breakpoints: breakpointPropTypes,
  colors: colorsPropTypes,
  fonts: fontsPropTypes,
  utils: utilsPropTypes,
});

const themeModes: Array<string> = ['teinte'];

export {
  breakpoints,
  colors,
  fonts,
  utils,
  themeModes,
  themePropTypes,
};

export type { ThemeInterface };

export default theme;
