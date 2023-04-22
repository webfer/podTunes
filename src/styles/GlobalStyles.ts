import { createGlobalStyle } from 'styled-components';

import { DefaultTheme } from '../interfaces';

export const GlobalStyle = createGlobalStyle<{ theme: DefaultTheme }>`


  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
html {
  -webkit-text-size-adjust: 100%; 
  font-size: 16px;
  line-height: 1.15;
}

body {
  font-family: 'ABCMonumentGRegular', helvetica, sans-serif;
  margin: 0;
  padding:0;
}
main {
  display: block;
}
h1 {
  font-size: 2em;
  margin: 0.67em 0;
}
hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible; 
}
pre {
  font-family: monospace, monospace;
  font-size: 1em; 
}
a {
  background-color: transparent;
}
abbr[title] {
  border-bottom: none;
  text-decoration: underline dotted; 
  text-decoration: underline; 
}
b,
strong {
  font-weight: bolder;
}
code,
kbd,
samp {
  font-family: monospace, monospace;
  font-size: 1em; 
}
small {
  font-size: 80%;
}
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sub {
  bottom: -0.25em;
}
sup {
  top: -0.5em;
}
img {
  border-style: none;
}
button,
input,
optgroup,
select,
textarea {
  font-family: inherit; 
  font-size: 100%; 
  line-height: 1.15; 
  margin: 0; 
}
button,
input { 
  overflow: visible;
}
button,
select { 
  text-transform: none;
}
button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}
button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}
button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}
fieldset {
  padding: 0.35em 0.75em 0.625em;
}
legend {
  box-sizing: border-box;
  color: inherit; 
  display: table;
  max-width: 100%;
  padding: 0; 
  white-space: normal;
}
progress {
  vertical-align: baseline;
}
textarea {
  overflow: auto;
}
[type="checkbox"],
[type="radio"] {
  box-sizing: border-box;
  padding: 0; 
}
[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}
[type="search"] {
  -webkit-appearance: textfield;
  outline-offset: -2px; 
}
[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}
::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit; 
}
details {
  display: block;
}
summary {
  display: list-item;
}
template {
  display: none;
}
[hidden] {
  display: none;
}


/* ======== Theme ====== */

:root{
  --color-text-body-light: #4c4c4c;
  --color-text-body-dark: #fafafa;
  --color-text-headline: #f3f6f9;
  --secondary-color900:  #AB47BC;
  --secondary-color500:  #CE93D8;
  --secondary-color100:  #F3E5F5;
  --primary-color900:  #42a5f5;
  --primary-color500:  #90caf9;
  --primary-color100:  #e3f2fd;
  --warning-color900:  #F57C00;
  --warning-color500:  #FFA726;
  --warning-color100:  #FFB74D;
  --success-color900:  #388E3C;
  --success-color500:  #66BB6A;
  --success-color100:  #81C784;
  --info-color900:  #0288D1;
  --info-color500:  #29B6F6;
  --info-color100:  #4FC3F7;
  --error-color900: #D32F2F;
  --error-color500: #F44336;
  --error-color100: #E57373;
  --neutral-mui900: #64748B;
  --neutral-900: #001E3C;
  --neutral-800: #093057;
  --neutral-700: #164370;
  --neutral-600: #265380;
  --neutral-500: #38628C;
  --neutral-400: #537CA6;
  --neutral-300: #86A3BF;
  --neutral-200: #ADC3D9;
  --neutral-100: #DFEBF7;
  --neutral-50: #F5F6F7;
  --grays-900: #212121;
  --grays-800: #424242;
  --grays-700: #616161;
  --grays-600: #757575;
  --grays-500: #9E9E9E;
  --grays-400: #BDBDBD;
  --grays-300: #E0E0E0;
  --grays-200: #EEEEEE;
  --grays-100: #F5F5F5;
  --grays-50: #FAFAFA;
  --shades-100: #000;
  --shades-0: #fff;
}

body{
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  transition: all .5s linear;
  > #root{
    position: relative;
  }
}

a{
  color: ${({ theme }) => theme.text};
}

h1,h2,h3,h4,h5,h6{
   color: ${({ theme }) => theme.colorHeadline};
   font-family: 'ABCMonumentGMedium', Arial, Helvetica, sans-serif;
}

`;

export const lightTheme = {
  body: 'var(--grays-50)',
  text: 'var(--color-text-body-light)',
  colorHeadline: 'var(--color-text-body-light)',
  backgrounSectionHome: 'var(--shades-100)',
  textColorSectionHeaderFirst: 'var(--shades-100)',
  textColorSectionHeaderSecond: 'var(--shades-0)',
  backImageSectionHome: `${'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjQuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9Ik93bCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDg1MC43IDIwNC44IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA4NTAuNyAyMDQuODsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOnVybCgjU1ZHSURfMV8pO30KPC9zdHlsZT4KPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8xXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIxMS45MTIyIiB5MT0iODUuNiIgeDI9IjIzNi40MzkzIiB5Mj0iODUuNiI+Cgk8c3RvcCAgb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojRkZGRkZGO3N0b3Atb3BhY2l0eTowIi8+Cgk8c3RvcCAgb2Zmc2V0PSI3LjE4NzQyMGUtMDIiIHN0eWxlPSJzdG9wLWNvbG9yOiNFN0U3RTc7c3RvcC1vcGFjaXR5OjcuMTg3NDIwZS0wMiIvPgoJPHN0b3AgIG9mZnNldD0iMC4yNDExIiBzdHlsZT0ic3RvcC1jb2xvcjojQjVCNUI1O3N0b3Atb3BhY2l0eTowLjI0MTEiLz4KCTxzdG9wICBvZmZzZXQ9IjAuNDA4NCIgc3R5bGU9InN0b3AtY29sb3I6IzhDOEM4QztzdG9wLW9wYWNpdHk6MC40MDg0Ii8+Cgk8c3RvcCAgb2Zmc2V0PSIwLjU3MDciIHN0eWxlPSJzdG9wLWNvbG9yOiM2QzZDNkM7c3RvcC1vcGFjaXR5OjAuNTcwNyIvPgoJPHN0b3AgIG9mZnNldD0iMC43MjY0IiBzdHlsZT0ic3RvcC1jb2xvcjojNTU1NTU1O3N0b3Atb3BhY2l0eTowLjcyNjQiLz4KCTxzdG9wICBvZmZzZXQ9IjAuODcyNyIgc3R5bGU9InN0b3AtY29sb3I6IzQ3NDc0NztzdG9wLW9wYWNpdHk6MC44NzI3Ii8+Cgk8c3RvcCAgb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojNDI0MjQyIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik01OTUuOCw2OC42di00LjljMCwwLTUuMywxLjQtMTEuMiwzLjFjLTUuNS03LTE0LjEtMTEuNS0yMy44LTExLjVjLTkuNywwLTE4LjIsNC41LTIzLjgsMTEuNQoJYy01LjktMS43LTExLjItMy4xLTExLjItMy4xSDExLjl2NC45aDUxMy45bDguNCwyLjRjLTIuNCw0LjMtMy43LDkuMy0zLjcsMTQuNmMwLDE2LjcsMTMuNiwzMC4zLDMwLjMsMzAuM2M5LjgsMCwxOC41LTQuNiwyNC0xMS44CglIODUwVjEwMEg1ODcuNWMwLjItMC4zLDAuNC0wLjcsMC41LTFjMi00LjEsMy4xLTguNiwzLjEtMTMuNGMwLTUuMy0xLjMtMTAuMi0zLjctMTQuNUw1OTUuOCw2OC42eiBNNTYwLjksNTkuNgoJYzcuNiwwLDE0LjQsMy4zLDE5LjEsOC41Yy0zLjksMS4yLTcuNiwyLjQtOS40LDMuNGMtMy40LDEuNy05LjgsMTAuMy05LjgsMTAuM3MtNi40LTguNi0xMC0xMC40Yy0xLjktMC45LTUuMy0yLjEtOS4xLTMuMwoJQzU0Ni40LDYyLjgsNTUzLjMsNTkuNiw1NjAuOSw1OS42eiBNNTc4LjUsNzcuMmMwLDEuOS0xLjUsMy40LTMuNCwzLjRzLTMuNC0xLjUtMy40LTMuNHMxLjUtMy40LDMuNC0zLjQKCUM1NzcsNzMuOCw1NzguNSw3NS40LDU3OC41LDc3LjJ6IE01NjAuOCw4OS40YzAsMCwxLjUsMiwzLjUsNC4zbC0zLjEsNC4zYy0wLjIsMC4yLTAuNSwwLjItMC43LDBsLTMuMS00LjMKCUM1NTkuMyw5MS40LDU2MC44LDg5LjQsNTYwLjgsODkuNHogTTU0OS44LDc3LjJjMCwxLjktMS41LDMuNC0zLjQsMy40cy0zLjQtMS41LTMuNC0zLjRzMS41LTMuNCwzLjQtMy40UzU0OS44LDc1LjMsNTQ5LjgsNzcuMnoKCSBNNTM1LDg1LjRjMC00LjgsMS4zLTkuMywzLjYtMTMuMmwyLjMsMC43Yy0xLDEuMi0xLjUsMi43LTEuNSw0LjRjMCwzLjgsMy4xLDcsNyw3YzMsMCw1LjYtMS45LDYuNi00LjZsNS4xLDZsLTYuNCw3LjUKCWMtMi41LDIuMi01LjIsMy42LTkuMSw0LjdsLTMuOCwxLjFDNTM2LjQsOTQuOSw1MzUsOTAuMyw1MzUsODUuNHogTTU2MC45LDExMS4yYy03LjUsMC0xNC4yLTMuMi0xOC45LTguM2MzLjctMS4xLDcuMS0yLjMsOC45LTMuMgoJYzEtMC41LDIuMi0xLjUsMy40LTIuNmw2LjMsOC41YzAuMiwwLjIsMC41LDAuMiwwLjcsMGw2LjItOC41YzEuMiwxLjIsMi4zLDIuMSwzLjIsMi42YzEuOCwwLjksNS4zLDIuMSw5LjIsMy4zCglDNTc1LjEsMTA4LDU2OC4zLDExMS4yLDU2MC45LDExMS4yeiBNNTg2LjcsODUuNGMwLDQuOS0xLjQsOS42LTMuOCwxMy41bC00LTEuMWMtMy41LTEtNi0yLjItOS4xLTQuOGwtNi4zLTcuNGw1LTUuOQoJYzEsMi43LDMuNSw0LjYsNi42LDQuNmMzLjgsMCw3LTMuMSw3LTdjMC0xLjctMC42LTMuMi0xLjUtNC40bDIuNS0wLjdDNTg1LjQsNzYsNTg2LjcsODAuNSw1ODYuNyw4NS40eiBNNTg2LjUsMTAybDEuMS0xLjgiLz4KPC9zdmc+Cg=='}`,
  galleryBackground: 'var(--shades-0)',
  layerMenuBackground: 'var(--primary-color500)',
  txtColorLinkMenu: 'var(--neutral-900)',
  seudoElSection: 'var(--primary-color900)',
  outLineCustomButton: 'var(--info-color900)',
  dotsCarouselWorks: 'var(--grays-900)',
  boxesWorks: 'var(--grays-200)',
};

export const darkTheme = {
  // backgroundImageSectionHeaderHome: `${OxovIconWhite}`,
  body: 'var(--neutral-900)',
  text: 'var(--color-text-body-dark)',
  iconCard: 'var(--primary-color100)',
  colorHeadline: 'var(--color-text-headline)',
  backgrounSectionHome: 'var(--shades-100)',
  textColorSectionHeaderFirst: 'var(--shades-0)',
  textColorSectionHeaderSecond: 'var(--warning-color900)',

  backImageSectionHome: `${'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjQuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9Ik93bCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDg1MC43IDIwNC44IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA4NTAuNyAyMDQuODsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOnVybCgjU1ZHSURfMV8pO30KPC9zdHlsZT4KPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8xXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIxMS45MTIyIiB5MT0iODUuNiIgeDI9IjIzNi40MzkzIiB5Mj0iODUuNiI+Cgk8c3RvcCAgb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojRkZGRkZGO3N0b3Atb3BhY2l0eTowIi8+Cgk8c3RvcCAgb2Zmc2V0PSI3LjE4NzQyMGUtMDIiIHN0eWxlPSJzdG9wLWNvbG9yOiNFN0U3RTc7c3RvcC1vcGFjaXR5OjcuMTg3NDIwZS0wMiIvPgoJPHN0b3AgIG9mZnNldD0iMC4yNDExIiBzdHlsZT0ic3RvcC1jb2xvcjojQjVCNUI1O3N0b3Atb3BhY2l0eTowLjI0MTEiLz4KCTxzdG9wICBvZmZzZXQ9IjAuNDA4NCIgc3R5bGU9InN0b3AtY29sb3I6IzhDOEM4QztzdG9wLW9wYWNpdHk6MC40MDg0Ii8+Cgk8c3RvcCAgb2Zmc2V0PSIwLjU3MDciIHN0eWxlPSJzdG9wLWNvbG9yOiM2QzZDNkM7c3RvcC1vcGFjaXR5OjAuNTcwNyIvPgoJPHN0b3AgIG9mZnNldD0iMC43MjY0IiBzdHlsZT0ic3RvcC1jb2xvcjojNTU1NTU1O3N0b3Atb3BhY2l0eTowLjcyNjQiLz4KCTxzdG9wICBvZmZzZXQ9IjAuODcyNyIgc3R5bGU9InN0b3AtY29sb3I6IzQ3NDc0NztzdG9wLW9wYWNpdHk6MC44NzI3Ii8+Cgk8c3RvcCAgb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojNDI0MjQyIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik01OTUuOCw2OC42di00LjljMCwwLTUuMywxLjQtMTEuMiwzLjFjLTUuNS03LTE0LjEtMTEuNS0yMy44LTExLjVjLTkuNywwLTE4LjIsNC41LTIzLjgsMTEuNQoJYy01LjktMS43LTExLjItMy4xLTExLjItMy4xSDExLjl2NC45aDUxMy45bDguNCwyLjRjLTIuNCw0LjMtMy43LDkuMy0zLjcsMTQuNmMwLDE2LjcsMTMuNiwzMC4zLDMwLjMsMzAuM2M5LjgsMCwxOC41LTQuNiwyNC0xMS44CglIODUwVjEwMEg1ODcuNWMwLjItMC4zLDAuNC0wLjcsMC41LTFjMi00LjEsMy4xLTguNiwzLjEtMTMuNGMwLTUuMy0xLjMtMTAuMi0zLjctMTQuNUw1OTUuOCw2OC42eiBNNTYwLjksNTkuNgoJYzcuNiwwLDE0LjQsMy4zLDE5LjEsOC41Yy0zLjksMS4yLTcuNiwyLjQtOS40LDMuNGMtMy40LDEuNy05LjgsMTAuMy05LjgsMTAuM3MtNi40LTguNi0xMC0xMC40Yy0xLjktMC45LTUuMy0yLjEtOS4xLTMuMwoJQzU0Ni40LDYyLjgsNTUzLjMsNTkuNiw1NjAuOSw1OS42eiBNNTc4LjUsNzcuMmMwLDEuOS0xLjUsMy40LTMuNCwzLjRzLTMuNC0xLjUtMy40LTMuNHMxLjUtMy40LDMuNC0zLjQKCUM1NzcsNzMuOCw1NzguNSw3NS40LDU3OC41LDc3LjJ6IE01NjAuOCw4OS40YzAsMCwxLjUsMiwzLjUsNC4zbC0zLjEsNC4zYy0wLjIsMC4yLTAuNSwwLjItMC43LDBsLTMuMS00LjMKCUM1NTkuMyw5MS40LDU2MC44LDg5LjQsNTYwLjgsODkuNHogTTU0OS44LDc3LjJjMCwxLjktMS41LDMuNC0zLjQsMy40cy0zLjQtMS41LTMuNC0zLjRzMS41LTMuNCwzLjQtMy40UzU0OS44LDc1LjMsNTQ5LjgsNzcuMnoKCSBNNTM1LDg1LjRjMC00LjgsMS4zLTkuMywzLjYtMTMuMmwyLjMsMC43Yy0xLDEuMi0xLjUsMi43LTEuNSw0LjRjMCwzLjgsMy4xLDcsNyw3YzMsMCw1LjYtMS45LDYuNi00LjZsNS4xLDZsLTYuNCw3LjUKCWMtMi41LDIuMi01LjIsMy42LTkuMSw0LjdsLTMuOCwxLjFDNTM2LjQsOTQuOSw1MzUsOTAuMyw1MzUsODUuNHogTTU2MC45LDExMS4yYy03LjUsMC0xNC4yLTMuMi0xOC45LTguM2MzLjctMS4xLDcuMS0yLjMsOC45LTMuMgoJYzEtMC41LDIuMi0xLjUsMy40LTIuNmw2LjMsOC41YzAuMiwwLjIsMC41LDAuMiwwLjcsMGw2LjItOC41YzEuMiwxLjIsMi4zLDIuMSwzLjIsMi42YzEuOCwwLjksNS4zLDIuMSw5LjIsMy4zCglDNTc1LjEsMTA4LDU2OC4zLDExMS4yLDU2MC45LDExMS4yeiBNNTg2LjcsODUuNGMwLDQuOS0xLjQsOS42LTMuOCwxMy41bC00LTEuMWMtMy41LTEtNi0yLjItOS4xLTQuOGwtNi4zLTcuNGw1LTUuOQoJYzEsMi43LDMuNSw0LjYsNi42LDQuNmMzLjgsMCw3LTMuMSw3LTdjMC0xLjctMC42LTMuMi0xLjUtNC40bDIuNS0wLjdDNTg1LjQsNzYsNTg2LjcsODAuNSw1ODYuNyw4NS40eiBNNTg2LjUsMTAybDEuMS0xLjgiLz4KPC9zdmc+Cg=='}`,

  // backImageSectionHome: `${'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjQuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9Ik93bCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDg1MC43IDIwNC44IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA4NTAuNyAyMDQuODsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOnVybCgjU1ZHSURfMV8pO30KPC9zdHlsZT4KPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8xXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIxMS45IiB5MT0iMTIwLjQiIHgyPSIyNDYuOTgxNyIgeTI9IjEyMC40IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIC0xIDAgMjA2KSI+Cgk8c3RvcCAgb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojRkZGRkZGO3N0b3Atb3BhY2l0eTowIi8+Cgk8c3RvcCAgb2Zmc2V0PSIwLjk4ODMiIHN0eWxlPSJzdG9wLWNvbG9yOiNFMEUwRTAiLz4KPC9saW5lYXJHcmFkaWVudD4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTU5NS44LDY4LjZ2LTQuOWMwLDAtNS4zLDEuNC0xMS4yLDMuMWMtNS41LTctMTQuMS0xMS41LTIzLjgtMTEuNXMtMTguMiw0LjUtMjMuOCwxMS41CgljLTUuOS0xLjctMTEuMi0zLjEtMTEuMi0zLjFIMTEuOXY0LjloNTEzLjlsOC40LDIuNGMtMi40LDQuMy0zLjcsOS4zLTMuNywxNC42YzAsMTYuNywxMy42LDMwLjMsMzAuMywzMC4zYzkuOCwwLDE4LjUtNC42LDI0LTExLjgKCUg4NTBWMTAwSDU4Ny41YzAuMi0wLjMsMC40LTAuNywwLjUtMWMyLTQuMSwzLjEtOC42LDMuMS0xMy40YzAtNS4zLTEuMy0xMC4yLTMuNy0xNC41TDU5NS44LDY4LjZ6IE01NjAuOSw1OS42CgljNy42LDAsMTQuNCwzLjMsMTkuMSw4LjVjLTMuOSwxLjItNy42LDIuNC05LjQsMy40Yy0zLjQsMS43LTkuOCwxMC4zLTkuOCwxMC4zcy02LjQtOC42LTEwLTEwLjRjLTEuOS0wLjktNS4zLTIuMS05LjEtMy4zCglDNTQ2LjQsNjIuOCw1NTMuMyw1OS42LDU2MC45LDU5LjZ6IE01NzguNSw3Ny4yYzAsMS45LTEuNSwzLjQtMy40LDMuNHMtMy40LTEuNS0zLjQtMy40czEuNS0zLjQsMy40LTMuNAoJQzU3Nyw3My44LDU3OC41LDc1LjQsNTc4LjUsNzcuMnogTTU2MC44LDg5LjRjMCwwLDEuNSwyLDMuNSw0LjNsLTMuMSw0LjNjLTAuMiwwLjItMC41LDAuMi0wLjcsMGwtMy4xLTQuMwoJQzU1OS4zLDkxLjQsNTYwLjgsODkuNCw1NjAuOCw4OS40eiBNNTQ5LjgsNzcuMmMwLDEuOS0xLjUsMy40LTMuNCwzLjRzLTMuNC0xLjUtMy40LTMuNHMxLjUtMy40LDMuNC0zLjRTNTQ5LjgsNzUuMyw1NDkuOCw3Ny4yegoJIE01MzUsODUuNGMwLTQuOCwxLjMtOS4zLDMuNi0xMy4ybDIuMywwLjdjLTEsMS4yLTEuNSwyLjctMS41LDQuNGMwLDMuOCwzLjEsNyw3LDdjMywwLDUuNi0xLjksNi42LTQuNmw1LjEsNmwtNi40LDcuNQoJYy0yLjUsMi4yLTUuMiwzLjYtOS4xLDQuN2wtMy44LDEuMUM1MzYuNCw5NC45LDUzNSw5MC4zLDUzNSw4NS40eiBNNTYwLjksMTExLjJjLTcuNSwwLTE0LjItMy4yLTE4LjktOC4zYzMuNy0xLjEsNy4xLTIuMyw4LjktMy4yCgljMS0wLjUsMi4yLTEuNSwzLjQtMi42bDYuMyw4LjVjMC4yLDAuMiwwLjUsMC4yLDAuNywwbDYuMi04LjVjMS4yLDEuMiwyLjMsMi4xLDMuMiwyLjZjMS44LDAuOSw1LjMsMi4xLDkuMiwzLjMKCUM1NzUuMSwxMDgsNTY4LjMsMTExLjIsNTYwLjksMTExLjJ6IE01ODYuNyw4NS40YzAsNC45LTEuNCw5LjYtMy44LDEzLjVsLTQtMS4xYy0zLjUtMS02LTIuMi05LjEtNC44bC02LjMtNy40bDUtNS45CgljMSwyLjcsMy41LDQuNiw2LjYsNC42YzMuOCwwLDctMy4xLDctN2MwLTEuNy0wLjYtMy4yLTEuNS00LjRsMi41LTAuN0M1ODUuNCw3Niw1ODYuNyw4MC41LDU4Ni43LDg1LjR6IE01ODYuNSwxMDJsMS4xLTEuOCIvPgo8L3N2Zz4K'}`,
  galleryBackground: 'var(--shades-100)',
  layerMenuBackground: 'var(--info-color900)',
  txtColorLinkMenu: 'var(--primary-color100)',
  seudoElSection: 'var(--warning-color900)',
  outLineCustomButton: 'var(--primary-color500)',
  dotsCarouselWorks: 'var(--shades-0)',
  boxesWorks: 'var(--primary-color500)',
};
