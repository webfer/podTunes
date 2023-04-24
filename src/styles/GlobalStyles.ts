import { createGlobalStyle } from 'styled-components';

import { DefaultTheme } from '../interfaces';

export const GlobalStyle = createGlobalStyle<{ theme: DefaultTheme }>`

:root {
    --blue: #0d6efd;
    --indigo: #6610f2;
    --purple: #6f42c1;
    --pink: #d63384;
    --red: #dc3545;
    --orange: #fd7e14;
    --yellow: #ffc107;
    --green: #198754;
    --teal: #20c997;
    --cyan: #0dcaf0;
    --white: #fff;
    --gray: #6c757d;
    --gray-dark: #343a40;
    --gray-50: #fafafa;
    --gray-100: #f8f9fa;
    --gray-200: #e9ecef;
    --gray-300: #dee2e6;
    --gray-400: #ced4da;
    --gray-500: #adb5bd;
    --gray-600: #6c757d;
    --gray-700: #495057;
    --gray-800: #343a40;
    --gray-900: #212529;
    --primary: #0d6efd;
    --secondary: #6c757d;
    --success: #198754;
    --info: #0dcaf0;
    --warning: #ffc107;
    --danger: #dc3545;
    --light: #f8f9fa;
    --dark: #212529;
    --primary-rgb: 13,110,253;
    --secondary-rgb: 108,117,125;
    --success-rgb: 25,135,84;
    --info-rgb: 13,202,240;
    --warning-rgb: 255,193,7;
    --danger-rgb: 220,53,69;
    --light-rgb: 248,249,250;
    --dark-rgb: 33,37,41;
    --white-rgb: 255,255,255;
    --black-rgb: 0,0,0;
    --body-color-rgb: 33,37,41;
    --body-bg-rgb: 255,255,255;
    --font-sans-serif: 'system-ui','-apple-system',"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    --font-monospace: 'SFMono-Regular',Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
    --gradient: linear-gradient(180deg,hsla(0,0%,100%,.15),hsla(0,0%,100%,0));
    --body-font-family: ABCMonumentGLight,Helvetica;
    --body-font-size: 1.25rem;
    --body-font-weight: 300;
    --body-line-height: 1.2;
    --body-color: #212529;
    --body-bg-dark: #151515;
    --body-bg: #fff;
}



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

  font-size: var(--body-font-size);
  font-weight: var(--body-font-weight);
  line-height: var(--body-line-height);
  background-color: ${({ theme }) => theme.backgroundColorBody};
  color: ${({ theme }) => theme.colorText};
  font-family: var(--body-font-family);
  margin: 0;
  padding:0;
  transition: all .5s linear;
  > #root{
    position: relative;
  }
}

a{
  color: ${({ theme }) => theme.colorText};
}

h1,h2,h3,h4,h5,h6{
   color: ${({ theme }) => theme.colorText};
   font-family: 'ABCMonumentGLight', Arial, Helvetica, sans-serif;
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

`;

export const lightTheme = {
  backgroundColorBody: 'var(--body-bg)',
  colorText: 'var(--body-color)',
  colorLogoDarkPink: 'var(--dark)',
  colorLogoDarkRed: 'var(--dark)',
  colorLogoText: 'var(--dark)',
  colorTogleTheme: 'var(--dark)',
};

export const darkTheme = {
  backgroundColorBody: 'var( --body-bg-dark)',
  colorText: 'var(--gray-50)',
  colorLogoDarkPink: 'var(--pink)',
  colorLogoDarkRed: 'var(--danger)',
  colorLogoDark: 'var(--pink)',
  colorLogoText: 'var(--white)',
  colorTogleTheme: 'var(--white)',
};
