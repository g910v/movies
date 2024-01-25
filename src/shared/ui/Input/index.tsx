import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import baseTheme from '../../../styles/theme';

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const StyledInput = styled.input`
  width: 100%;
  background: ${baseTheme.colors.bgSecondary};
  color: ${baseTheme.colors.text};
  border: 1px solid ${baseTheme.colors.textSecondary};
  padding: 0.6rem;
  border-radius: 5px;
  transition: all .15s linear;

  &:hover {
    border: 1px solid ${baseTheme.colors.input};
  }

  &:focus-visible {
    outline: transparent auto 0px;
    outline-offset: 0px;
    border: 1px solid ${baseTheme.colors.mix};
  }
`;

const Input: React.FC<Props> = props => (
  <StyledInput {...props} />
);

export default Input;
