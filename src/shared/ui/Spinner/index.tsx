import styled, { keyframes } from 'styled-components';
import baseTheme from '../../../styles/theme';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const spinBack = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
`;

const Spinner = styled.span<{ size: number, strokeWidth: number }>`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  border: ${props => props.strokeWidth}px solid;
  border-color: ${baseTheme.colors.yellow} ${baseTheme.colors.yellow} transparent transparent;
  box-sizing: border-box;
  animation: ${spin} 2s linear infinite;

  &:after, &:before {
    content: '';  
    box-sizing: border-box;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    border: ${props => props.strokeWidth}px solid;
    border-color: transparent transparent ${baseTheme.colors.mix} ${baseTheme.colors.mix};
    width: ${props => props.size - props.strokeWidth * 4}px;
    height: ${props => props.size - props.strokeWidth * 4}px;
    border-radius: 50%;
    box-sizing: border-box;
    animation: ${spinBack} 1s linear infinite;
    transform-origin: center center;
  }

  &:before {
    width: ${props => props.size - props.strokeWidth * 8}px;
    height: ${props => props.size - props.strokeWidth * 8}px;
    border-color: ${baseTheme.colors.pink} ${baseTheme.colors.pink} transparent transparent;
    animation: ${spin} 1.5s linear infinite;
  }
`;

export default Spinner;
