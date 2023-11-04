import React, { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
import baseTheme from '../../styles/theme';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string,
  icon?: React.ReactElement,
}

const StyledButton = styled.button`
  padding: 1rem 1.5rem;
  background: ${baseTheme.colors.bgSecondary};
  color: ${baseTheme.colors.text};
  position: relative;
  border-radius: 50px;
  border: 0px;
  cursor: pointer;
  font-weight: 600;
  display: flex;
  align-items: center;
  column-gap: 0.5rem;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50px; 
    padding: 0.15rem; 
    background: ${baseTheme.colors.gradient}; 
    -webkit-mask: 
       linear-gradient(#fff 0 0) content-box, 
       linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out; 
    mask-composite: exclude; 
  }

  &:hover {
    background: ${baseTheme.colors.hoverButtonGradient};
  }

  &:active {
    background: ${baseTheme.colors.hoverButtonGradient};
  }

  &:focus {
    background: ${baseTheme.colors.hoverButtonGradient};
    &:after {
      content: "";
      position: absolute;
      inset: 1px;
      z-index: -1;
      background: ${baseTheme.colors.gradient};
      filter: blur(14px);
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
