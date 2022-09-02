import { css } from '@emotion/react';
import typography from './typography';
import { colors } from './variables';
import 'react-toastify/dist/ReactToastify.css';

export const globalStyles = () => css`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    backface-visibility: hidden;
    text-rendering: geometricprecision;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
    font-family: 'Roboto', sans-serif;
  }

  :focus {
    outline: none;
  }

  input::-ms-clear {
    display: none;
  }

  html {
    font-size: 62.5%;
  }

  a {
    color: ${colors.white};
    text-decoration: none; 
  }

  button {
    border: 0;
    cursor: pointer;
    outline: none;
  }

  ul {
    list-style: none;
  }

  h1 {
    ${typography.h1Headline()};
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--success {
    ${typography.s2Subtitle()};
  }

`;
