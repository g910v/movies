import styled, { css, keyframes } from 'styled-components';
import baseTheme from '../../styles/theme';

const shadow = css`
  -webkit-box-shadow: 0px 0px 10px 10px rgba(225, 225, 225, 0.07);
  -moz-box-shadow: 0px 0px 10px 10px rgba(225, 225, 225, 0.07);
  box-shadow: 0px 0px 10px 10px rgba(225, 225, 225, 0.07);
`;

const shadowAnimation = keyframes`
  0% {
    -webkit-box-shadow: 0px 0px 10px 10px rgba(225, 225, 225, 0);
    -moz-box-shadow: 0px 0px 10px 10px rgba(225, 225, 225, 0);
    box-shadow: 0px 0px 10px 10px rgba(225, 225, 225, 0);
  }
  100% {
    ${shadow}
  }
`;

const Card = styled.div`
  width: 100%;
  background: ${baseTheme.colors.bgSecondary};
  padding: 1rem;
  border-radius: 5px;
  backdrop-filter: blur(60px);
  cursor: pointer;
  margin: 1rem 0rem 1rem;
  display: flex;
  align-items: center;

  &:hover {
    animation: ${shadowAnimation} 0.15s linear;
    ${shadow}
  }
`;

export default Card;
