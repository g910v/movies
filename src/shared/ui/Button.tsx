import React, { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
import baseTheme from '../styles/theme';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string,
  icon?: React.ReactElement,
}

const StyledButton = styled.button`
  padding: 0.8rem 1.5rem;
  background: ${baseTheme.colors.bgLighter};
  color: ${baseTheme.colors.text};
  position: relative;
  border-radius: 5px;
  border: 1px solid ${baseTheme.colors.textSecondary};
  cursor: pointer;
  font-weight: 600;
  display: flex;
  align-items: center;
  column-gap: 0.5rem;

  &:before {
    content: "";
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    border-radius: 5px; 
    padding: 0.1rem; 
    background: ${baseTheme.colors.gradient}; 
    -webkit-mask: 
       linear-gradient(#fff 0 0) content-box, 
       linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out; 
    mask-composite: exclude;
    opacity: 0;
    transition: all .3s linear;
  }

  &:after {
    content: "";
    position: absolute;
    inset: 1px;
    z-index: -1;
    background: ${baseTheme.colors.gradient};
    filter: blur(7px);
    opacity: 0;
    transition: all .3s linear;
  }

  &:hover {
    border: 1px solid transparent;
    &:after{
      opacity: 1;
    }
    &:before {
      opacity: 1;
    }
  }

  &:focus {
    border: 1px solid transparent;
    &:after {
      opacity: 1;
      filter: blur(10px);
    }
    &:before {
      opacity: 1;
    }
  }

  &:disabled {
    &:before {
      background: ${baseTheme.colors.gradientDisabled};
    }
    &:hover {
      background: ${baseTheme.colors.hoverButtonGradient};
    }
    background: ${baseTheme.colors.hoverButtonGradient};
    color: ${baseTheme.colors.textSecondary};
    cursor: default;
  }
`;

const Button: React.FC<Props> = ({ label, icon, ...props }) => (
  <StyledButton {...props}>
    {icon}
    {label}
  </StyledButton>
);

export default Button;
