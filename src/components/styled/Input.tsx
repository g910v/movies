import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import baseTheme from '../../styles/theme';

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const StyledInput = styled.input`
  width: 100%;
  background: ${baseTheme.colors.bgSecondary};
  color: ${baseTheme.colors.text};
  border: 1px solid ${baseTheme.colors.input};
  padding: 0.6rem;
  border-radius: 5px;

  &:focus-visible {
    outline: transparent auto 0px;
    outline-offset: 0px;
    border: 1px solid ${baseTheme.colors.text};
  }
`;

const Input: React.FC<Props> = props => (
  <StyledInput {...props} />
);

export default Input;
