import { createGlobalStyle } from 'styled-components';

import ABCWoff2Regular from '../assets/fonts/ABCMonumentGrotesk-Regular.woff2';
import ABCWoffRegular from '../assets/fonts/ABCMonumentGrotesk-Regular.woff';
import ABCWoff2Medium from '../assets/fonts/ABCMonumentGrotesk-Medium.woff2';
import ABCWoffMedium from '../assets/fonts/ABCMonumentGrotesk-Medium.woff';
import ABCWoff2Light from '../assets/fonts/ABCMonumentGrotesk-Light.woff2';
import ABCWoffLight from '../assets/fonts/ABCMonumentGrotesk-Light.woff';

export const GlobalFonts = createGlobalStyle`

@font-face {
  font-family: 'ABCMonumentGRegular';
  src: url(${ABCWoff2Regular}) format('woff2'),
    url(${ABCWoffRegular}) format('woff');
    font-style: normal;
    font-display: swap;
}
@font-face {
  font-family: 'ABCMonumentGMedium';
  src: url(${ABCWoff2Medium}) format('woff2'),
    url(${ABCWoffMedium}) format('woff');
    font-style: normal;
    font-display: swap;
}

@font-face {
  font-family: 'ABCMonumentGLight';
  src: url(${ABCWoff2Light}) format('woff2'),
    url(${ABCWoffLight}) format('woff');
    font-style: normal;
    font-display: swap;
}

`;
