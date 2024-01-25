import React, { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
import baseTheme from '../../../styles/theme';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string,
  icon?: React.ReactElement,
}

const StyledButton = styled.button`
  padding: 0.5rem;
  background: ${baseTheme.colors.bgLighter};
  color: ${baseTheme.colors.text};
  border-radius: 5px;
  border: 1px solid transparent;
  cursor: pointer;
  font-weight: 600;
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
  transition: all .15s linear;

  &:hover {
    border: 1px solid ${baseTheme.colors.simpleButton};
  }

  &:focus {
    border: 1px solid ${baseTheme.colors.simpleButton};
  }
`;

const SimpleButton: React.FC<Props> = ({ label, icon, ...props }) => (
  <StyledButton {...props}>
    {icon}
    {label}
  </StyledButton>
);

export default SimpleButton;
