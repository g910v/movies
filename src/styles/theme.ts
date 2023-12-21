import { css } from 'styled-components';

const baseTheme = {
  colors: {
    link: '#FFFFFF',
    text: '#cbbcb7',
    textSecondary: '#55545f',

    input: '#706e87',
    simpleButton: '#373642',

    yellow: '#F3CE3E',
    pink: '#B42790',
    mix: '#c96073',

    gradient: 'linear-gradient(to right, #F3CE3E, #B42790)',
    gradientDisabled: 'linear-gradient(to right, #a89b67, #692c59)',

    bg: '#050511',
    bgSecondary: '#16161d',
    bgLighter: '#1f1f27',
    buttonGradient: 'linear-gradient(#151639, #070815)',
    hoverButtonGradient: 'linear-gradient(#141431, #070815)',
    headerGradient: 'linear-gradient(#050511, transparent)',
    backimgGradient: 'linear-gradient(transparent, #050511)',
  },

  media: {
    xl: '(max-width: 1200px)',
    l: '(max-width: 992px)',
    m: '(max-width: 768px)',
    sm: '(max-width: 576px)',
  },
};

export const textGradient = css`
  background-image: ${baseTheme.colors.gradient};
  background-size: 100%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; 
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
`;

export default baseTheme;
