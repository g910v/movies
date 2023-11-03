import { createGlobalStyle } from 'styled-components';
import baseTheme from './theme';

export default createGlobalStyle`
  :root {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;
    font-size: 14px;
  }

  body {
    margin: 0;
    display: flex;
    justify-content: center;
    min-height: 100vh;
    background: ${baseTheme.colors.bg};
    color: ${baseTheme.colors.text};
  }

  #root {
    width: 100%;
    max-width: 1700px;
  }
`;
